import { exec } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Function to read the MySQL dump file
function readMySQLDump(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Function to parse the MySQL dump and extract table names, column definitions, and nullability
function parseMySQLDump(mysqlDump) {
    const tables = [];
    const tableRegex = /CREATE TABLE `(\w+)` \(([\s\S]+?)\) ENGINE=/g;
    const columnRegex = /`(\w+)` (\w+\(?\d*?\)?) (NOT NULL|NULL)/g;

    let match;
    while ((match = tableRegex.exec(mysqlDump)) !== null) {
        const tableName = match[1];
        const columns = match[2];

        const columnsArray = [];

        let columnMatch;
        while ((columnMatch = columnRegex.exec(columns)) !== null) {
            const columnName = columnMatch[1];
            const columnType = columnMatch[2];
            const isNullable = columnMatch[3] === 'NULL';

            columnsArray.push({
                name: columnName,
                type: columnType,
                nullable: isNullable
            });
        }
        tables.push({
            name: tableName,
            columns: columnsArray
        });
    }
    return tables;
}

function capitalizeFirstLetter(str) {
    return str
        .split('_') // Split the string by underscores
        .map((word, index) => {
            if (index === 0) {
                // Capitalize the first word
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                // Capitalize the first letter of subsequent words
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        })
        .join(''); // Join the words without underscores
}

// Function to map MySQL data types to TypeScript types
function mapMySQLTypeToTypeScript(mysqlType) {
    switch (mysqlType.toUpperCase()) {
        case 'INT':
        case 'BIGINT':
        case 'SMALLINT':
        case 'MEDIUMINT':
        case 'TINYINT':
        case 'DECIMAL':
        case 'FLOAT':
        case 'DOUBLE':
            return 'number';
        case 'VARCHAR':
        case 'CHAR':
        case 'TEXT':
        case 'TINYTEXT':
        case 'MEDIUMTEXT':
        case 'LONGTEXT':
            return 'string';
        case 'DATE':
        case 'DATETIME':
        case 'TIMESTAMP':
            return 'Date';
        case 'BOOLEAN':
        case 'TINYINT(1)':
            return 'boolean';
        case 'JSON':
            return 'any';
        default:
            return 'any';
    }
}

function generateInterfaces(tables) {
    let output = '';

    tables.forEach(table => {
        output += `export interface ${capitalizeFirstLetter(table.name)} {\n`;
        table.columns.forEach(column => {
            const columnName = column.name;
            const nullableSymbol = column.nullable ? '?' : '';
            const columnType = mapMySQLTypeToTypeScript(column.type);
            output += `    ${columnName}${nullableSymbol}: ${columnType};\n`;
        });
        output += `}\n\n`;
    });

    return output;
}

// Function to generate TypeScript input interfaces
function generateInputInterfaces(tables) {
    let output = '';

    tables.forEach(table => {
        output += `export interface ${capitalizeFirstLetter(table.name)}Input {\n`;
        table.columns.forEach(column => {
            if (column.name !== 'id') { // Exclude auto-incremented primary key from input interfaces
                const columnName = column.name;
                const nullableSymbol = column.nullable ? '?' : '';
                const columnType = mapMySQLTypeToTypeScript(column.type);
                output += `    ${columnName}${nullableSymbol}: ${columnType};\n`;
            }
        });
        output += `}\n\n`;
    });

    return output;
}

// Function to ensure directory exists
function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

// Main function
function generateTypeScriptInterfaces(mysqlDumpPath, outputPath) {
    const mysqlDump = readMySQLDump(mysqlDumpPath);
    const tables = parseMySQLDump(mysqlDump);

    const tsInterfaces = generateInterfaces(tables);
    const tsInputInterfaces = generateInputInterfaces(tables);

    ensureDirectoryExists(outputPath);
    fs.writeFileSync(outputPath, tsInterfaces + tsInputInterfaces);
}

// Example usage
const getConfigPath = (env) => {
    if (env === 'local') {
        return '.env.local';
    } else if (env === 'server') {
        return '.env.server';
    } else {
        console.error('Invalid environment. Please provide "local" or "server".');
        process.exit(1);
    }
};

const dumpOrRestore = (action, env, fileName) => {
    dotenv.config({ path: getConfigPath(env) });

    const dumpFileName = fileName || 'backup.sql';

    const dumpSQLCommand = `mysqldump -h ${process.env.MYSQL_HOST} -u ${process.env.MYSQL_USER} -p${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE} > ${dumpFileName}`;
    const restoreSQLCommand = `mysql -h ${process.env.MYSQL_HOST} -u ${process.env.MYSQL_USER} -p${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE} < ${dumpFileName}`;

    if (action === 'dump') {
        exec(dumpSQLCommand, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error dumping database: ${stderr}`);
                return;
            }
            console.log('Database dumped successfully.');

            // Generate TypeScript interfaces after successful dump
            const outputPath = '../frontend/src/interfaces/index.ts';
            generateTypeScriptInterfaces(dumpFileName, outputPath);
            console.log('TypeScript interfaces generated successfully.');
        });
    } else if (action === 'restore') {
        exec(restoreSQLCommand, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error restoring database: ${stderr}`);
                return;
            }
            console.log('Database restored successfully.');
        });
    } else {
        console.error('Invalid action. Please provide "dump" or "restore" as a command line argument.');
    }
};

const action = process.argv[2];
const env = process.argv[3];
const fileName = process.argv[4];

if (action && env) {
    dumpOrRestore(action, env, fileName);
} else {
    console.error('Invalid usage. Please provide "dump" or "restore" as action and "local" or "server" as environment.');
}

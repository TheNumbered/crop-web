import { ThemeProvider } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import createDefaultTheme from "./create-theme";

const ThemeWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
    const colorMode = "light";
    const appliedTheme = createDefaultTheme(colorMode);

    return (
        <ThemeProvider theme={appliedTheme}>
            <GlobalStyles
                styles={{
                    ul: { margin: 0, padding: 0, listStyle: "none" },
                    html: { WebkitFontSmoothing: "auto" },
                }}
            />
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

const ExtendThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <ThemeWrapper>{children}</ThemeWrapper>
}

export default ExtendThemeProvider;

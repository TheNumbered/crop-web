import { useGetQuery } from '@/dataprovider';
import { Courses } from '@/interfaces';
import { Search } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {data, isLoading, isError} = useGetQuery<Courses[]>('courses');

  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (isError) {
    return <div>Error</div>;
  }



  const courses = data || [];

  const filteredCourses = courses.filter(course =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TextField
          label="Search Courses"
          variant="outlined"
          fullWidth
          value={searchTerm}
          InputProps={{
            endAdornment: <Search />,
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={3}  sx={{ padding: 1 }}>
        {filteredCourses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={course.imageUrl ?? 'https://via.placeholder.com/150'}
                alt={course.courseName}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.courseName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesPage;

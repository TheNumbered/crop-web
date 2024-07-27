import { Search } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

// Mock Data for Farming Courses
const mockCourses = [
  { id: 1, title: 'Sustainable Farming', description: 'Learn the basics of sustainable farming practices.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Advanced Crop Management', description: 'Explore advanced techniques for crop management and soil health.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Organic Farming Techniques', description: 'Understand the principles and practices of organic farming.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Farm Machinery and Equipment', description: 'Get hands-on training with farm machinery and equipment.', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Agricultural Economics', description: 'Study the economic aspects of agriculture and farm management.', imageUrl: 'https://via.placeholder.com/150' },
];

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                image={course.imageUrl}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
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

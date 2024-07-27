// src/pages/CoursePage.tsx
import { Avatar, Box, Card, CardContent, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material';
import React from 'react';

// Mock Data for the Course
const course = {
  title: 'Mathematics 101',
  description: 'Introduction to Algebra and Geometry. This course covers the basics of algebraic concepts and geometric principles.',
  syllabus: [
    'Week 1: Introduction to Algebra',
    'Week 2: Linear Equations',
    'Week 3: Quadratic Equations',
    'Week 4: Introduction to Geometry',
    'Week 5: Geometric Shapes',
    'Week 6: Area and Volume Calculations',
  ],
  instructors: [
    { name: 'John Doe', bio: 'PhD in Mathematics, 10 years of teaching experience.', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', bio: 'MSc in Mathematics, 5 years of teaching experience.', avatar: 'https://via.placeholder.com/150' },
  ],
  reviews: [
    { name: 'Student A', rating: 5, comment: 'Excellent course!' },
    { name: 'Student B', rating: 4, comment: 'Very informative.' },
  ],
};

const CoursePage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {course.description}
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Syllabus
          </Typography>
          <List>
            {course.syllabus.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Instructors
          </Typography>
          <Grid container spacing={3}>
            {course.instructors.map((instructor, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={instructor.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1">{instructor.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {instructor.bio}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Reviews
          </Typography>
          <List>
            {course.reviews.map((review, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={review.name} src="https://via.placeholder.com/150" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                          {review.name}
                        </Typography>
                        <Rating value={review.rating} readOnly size="small" />
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" color="textSecondary">
                        {review.comment}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < course.reviews.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CoursePage;

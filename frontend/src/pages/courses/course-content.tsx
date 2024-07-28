import { useGetQuery } from "@/dataprovider";
import { Courses } from "@/interfaces";
import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const CourseContent: React.FC = () => {
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [resources, setResources] = useState<Courses[]>([]);

  const handleToggle = (chapterId: string) => {
    setOpenChapters((prev) => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  const handleClick = (chapterTitle: string) => {
    console.log(`Suggestions for ${chapterTitle} clicked`);
  };

  const { data, isLoading, isError } =
    useGetQuery<Courses[]>("courses/topics/1");

  useEffect(() => {
    if (data) {
      setResources(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error</div>;
  }

  return (
    <Box p={4} bgcolor="background.paper" color="text.secondary">
      <Box mt={4}>
        <Button color="primary" fullWidth>
          Discussion Forum
        </Button>
      </Box>
      <Box mt={4}>
        {resources.map((chapter) => (
          <Box key={chapter.id} mb={2}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body1"
                fontWeight="bold"
                onClick={() => handleToggle(chapter.id.toString())}
                style={{ cursor: "pointer" }}
              >
                {/*@ts-ignore*/}
                {chapter.topic}
              </Typography>
              <Button
                color="secondary"
                onClick={() => handleClick(chapter.topic)}
              >
                Suggestions From The Public
              </Button>
            </Box>
            <Collapse in={openChapters[chapter.id.toString()]}>
              <Box mt={2} mb={2}>
                {/*@ts-ignore*/}
                {chapter.my_resources.videos.map((videoUrl, index) => (
                  <iframe
                    key={index}
                    width="560"
                    height="315"
                    src={videoUrl}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

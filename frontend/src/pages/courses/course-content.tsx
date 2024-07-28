import { useGetQuery } from "@/dataprovider";
import { Courses } from "@/interfaces";
import CloseIcon from "@mui/icons-material/Close";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Button, Collapse, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CourseContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({});
  const [resources, setResources] = useState<Courses[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalVideos, setModalVideos] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [votes, setVotes] = useState<{ [key: number]: { up: number; down: number } }>({});

  const handleToggle = (chapterId: string) => {
    setOpenChapters((prev) => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  const handleClick = (chapterTitle: string, videos: string[]) => {
    setModalTitle(chapterTitle);
    setModalVideos(videos);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalVideos([]);
  };

  const handleVote = (index: number, type: 'up' | 'down') => {
    setVotes((prevVotes) => {
      const currentVotes = prevVotes[index] || { up: 0, down: 0 };
      return {
        ...prevVotes,
        [index]: {
          up: type === 'up' ? currentVotes.up + 1 : currentVotes.up,
          down: type === 'down' ? currentVotes.down + 1 : currentVotes.down,
        }
      };
    });
  };

  const { data, isLoading, isError } = useGetQuery<Courses[]>(`courses/topics/${id}`);

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
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography
                variant="body1"
                fontWeight="bold"
                onClick={() => handleToggle(chapter.id.toString())}
                style={{ cursor: "pointer" }}
              >
                {chapter.topic}
              </Typography>
              <Button
                color="secondary"
                onClick={() => handleClick(chapter.topic, chapter.my_resources.videos)}
              >
                Suggestions From The Public
              </Button>
            </Box>
            <Collapse in={openChapters[chapter.id.toString()]}>
              <Box mt={2} mb={2}>
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

      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="md">
        <DialogTitle>
          {modalTitle}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            style={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {modalVideos.map((videoUrl, index) => (
            <Box key={index} mb={2}>
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title={`Public Suggestion Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Box display="flex" justifyContent="center" mt={1}>
                <Button
                  startIcon={<ThumbUpIcon />}
                  onClick={() => handleVote(index, 'up')}
                >
                  {votes[index]?.up || 0}
                </Button>
                <Button
                  startIcon={<ThumbDownIcon />}
                  onClick={() => handleVote(index, 'down')}
                >
                  {votes[index]?.down || 0}
                </Button>
              </Box>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

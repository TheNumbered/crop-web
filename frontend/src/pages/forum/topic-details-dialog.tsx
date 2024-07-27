import { useUser } from "@clerk/clerk-react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { Reply, Topic } from "./types";

interface TopicDetailsDialogProps {
  topic: Topic;
  onClose: () => void;
  onOpenReplyDialog: () => void;
  handleDeleteTopic: (topic: Topic) => void;
  handleDeleteComment: (reply: Reply) => void;
}

export const TopicDetailsDialog: React.FC<TopicDetailsDialogProps> = ({
  topic,
  onClose,
  onOpenReplyDialog,
  handleDeleteTopic,
  handleDeleteComment,
}) => {
  const { subject, message, startedBy, date, imageURL, replies } = topic;
  const { user } = useUser();

  return (
    <>
      <Dialog
        open={true}
        onClose={onClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: "100%", // Set your width here
            height: "80vh",
            maxHeight: "80vh", // Set your height here
          },
        }}
      >
        <DialogTitle>{subject}</DialogTitle>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ mr: 6, ml: 3 }}
        >
          <Button
            color="primary"
            sx={{ marginTop: 1 }}
            onClick={onOpenReplyDialog}
          >
            Add a new comment
          </Button>

          <Button
            color="primary"
            sx={{ marginTop: 1 }}
            onClick={() => handleDeleteTopic(topic)}
          >
            Delete Topic
          </Button>
        </Box>
        <DialogContent>
          <Box>
            <Box
              marginTop={2}
              component="section"
              sx={{ p: 2, border: "1px solid grey" }}
            >
              <Box display="flex">
                <Avatar src={imageURL} alt="User Avatar" sx={{ mr: 1 }} />
                <Box>
                  <Typography variant="body1" color="textPrimary">
                    <strong>{subject}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    by {startedBy} on {date}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                color="textPrimary"
                component="div"
                // dangerouslySetInnerHTML={{ __html: message }}
                whiteSpace="pre-wrap"
                sx={{ ml: 6 }}
              >
                {message}
              </Typography>

              <Box marginTop={2}>
                <Typography variant="h6">Comments:</Typography>
                {replies.map((reply, index) => (
                  <Box
                    key={index}
                    marginTop={2}
                    padding={2}
                    border="1px solid grey"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{ ml: 6 }}
                      >
                        {reply.message}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          src={reply.replyImageURL}
                          alt="User Avatar"
                          sx={{ mr: 1 }}
                        />
                        <Box>
                          <Typography variant="subtitle1">
                            {reply.repliedBy}
                          </Typography>
                          <Typography variant="body2">
                            on {reply.date.toString()}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    {reply.id && (
                      <Button onClick={() => handleDeleteComment(reply)}>
                        Delete
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

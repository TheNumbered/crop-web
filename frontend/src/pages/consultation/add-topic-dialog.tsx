
import { CloudUpload } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface AddTopicDialogProps {
  open: boolean;
  onClose: () => void;
  subject: string;
  setSubject: (subject: string) => void;
  message: string;
  setMessage: (message: string) => void;
  handleAddTopic: () => void;
}

export const AddTopicDialog: React.FC<AddTopicDialogProps> = ({
  open,
  onClose,
  subject,
  setSubject,
  message,
  setMessage,
  handleAddTopic,
}) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePostToForum = () => {
    // Handle the image and other topic details here
    handleAddTopic();
    // Optionally reset the image state after posting
    setImage(null);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Topic</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Subject"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          style={{ marginTop: "16px" }}
        />
        {image && <p>Selected Image: {image.name}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handlePostToForum} color="primary">
          Post to Forum
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUpload/>}
        >
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

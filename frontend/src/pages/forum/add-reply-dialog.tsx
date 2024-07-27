import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

interface AddReplyDialogProps {
  open: boolean;
  onClose: () => void;
  replyMessage: string;
  setReplyMessage: (replyMessage: string) => void;
  handleAddReply: () => void;
}

export const AddReplyDialog: React.FC<AddReplyDialogProps> = ({
  open,
  onClose,
  replyMessage,
  setReplyMessage,
  handleAddReply,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "85%",
          maxWidth: "100%", // Set your width here
          height: "80vh",
          maxHeight: "80vh", // Set your height here
        },
      }}
    >
      <DialogTitle>Add a New comment</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddReply} color="primary">
          Post comment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

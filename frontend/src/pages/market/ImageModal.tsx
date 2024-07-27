import CloseIcon from "@mui/icons-material/Close";
import { Box, CardMedia, IconButton, Modal } from "@mui/material";
import React from "react";

interface ImageModalProps {
  modalOpen: boolean;
  selectedPicture: string | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  modalOpen,
  selectedPicture,
  onClose,
}) => (
  <Modal
    open={modalOpen}
    onClose={onClose}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        position: "relative",
        maxWidth: "95%",
        maxHeight: "95%",
        backgroundColor: "background.paper",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      {selectedPicture && (
        <CardMedia
          component="img"
          image={selectedPicture}
          alt="Enlarged Image"
          sx={{
            maxWidth: "100%",
            maxHeight: "90vh",
            borderRadius: 2,
            objectFit: "contain",
          }}
        />
      )}
    </Box>
  </Modal>
);

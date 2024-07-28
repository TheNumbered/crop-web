import { Box, CardMedia, Modal } from "@mui/material";
import React from "react";

interface ImageModalProps {
  open: boolean;
  handleClose: () => void;
  image: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  open,
  handleClose,
  image,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CardMedia component="img" image={image} alt="Image Modal" />
      </Box>
    </Modal>
  );
};

export default ImageModal;

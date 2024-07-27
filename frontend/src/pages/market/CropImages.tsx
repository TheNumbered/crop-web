import { Box, CardMedia } from "@mui/material";
import React from "react";
import { CropDetails } from "../../interfaces/index";

interface CropImagesProps {
  crop: CropDetails;
  handleThumbnailClick: (picture: string) => void;
}

export const CropImages: React.FC<CropImagesProps> = ({
  crop,
  handleThumbnailClick,
}) => (
  <>
    <CardMedia
      component="img"
      height="400"
      image={crop.primary_image}
      alt="Primary Crop Image"
      sx={{ borderRadius: 2 }}
    />
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        mt: 1,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {crop.pictures.map((pic, index) => (
        <Box
          key={index}
          sx={{ flex: "0 0 auto", mr: 1 }}
          onClick={() => handleThumbnailClick(pic)}
        >
          <CardMedia
            component="img"
            height="100"
            image={pic}
            alt="Thumbnail"
            sx={{ borderRadius: 2, cursor: "pointer" }}
          />
        </Box>
      ))}
    </Box>
  </>
);

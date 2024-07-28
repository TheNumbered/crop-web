import { Box, CardMedia } from "@mui/material";
import React from "react";

interface CropImagesProps {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  pictures: string[];
}

const CropImages: React.FC<CropImagesProps> = ({
  selectedImage,
  setSelectedImage,
  pictures,
}) => {
  //random number betwee 1 and 3
  const random = Math.floor(Math.random() * 3) + 1;

  return (
    <>
      <CardMedia
        component="img"
        height="400"
        image={selectedImage}
        alt="Selected Crop"
        sx={{ borderRadius: 2 }}
      />
      <Box
        mt={1}
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        }}
      >
        {pictures?.map((picture, index) => (
          <Box
            key={index}
            sx={{ flex: "0 0 auto", mr: 1 }}
            onClick={() => setSelectedImage(picture)}
          >
            <CardMedia
              component="img"
              height="100"
              image={`/uploads/market/${random}.jpg`}
              alt={`Thumbnail ${index + 1}`}
              sx={{
                borderRadius: 2,
                cursor: "pointer",
                border: picture === selectedImage ? "2px solid #000" : "none",
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CropImages;

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import { CropDetails } from "../../../interfaces/index";
import { CropDetailsCard } from "./CropDetailsCard";
import { ImageModal } from "./ImageModal";

const Widget: React.FC = () => {
  const [cropDetails, setCropDetails] = useState<CropDetails[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null);

  useEffect(() => {
    const fetchCropDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/crop-listings/1"
        );
        if (response.ok) {
          const data = await response.json();
          setCropDetails(data);
        } else {
          setError("Failed to fetch crop details");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchCropDetails();
  }, []);

  useEffect(() => {
    if (!cropDetails || cropDetails.length === 0) return;

    const updateTimeLeft = () => {
      if (cropDetails.length > 0) {
        const remainingTime = formatTimeLeft(cropDetails[0].auctionEnd);
        setTimeLeft(remainingTime);
        setAuctionEnded(remainingTime === "00:00:00");
      }
    };

    updateTimeLeft(); // Initial call

    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [cropDetails]);

  const formatTimeLeft = (endTime: string): string => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) {
      return "00:00:00";
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return [hours, minutes, seconds]
      .map((value) => String(value).padStart(2, "0"))
      .join(":");
  };

  const handleThumbnailClick = (picture: string) => {
    setSelectedPicture(picture);
    setModalOpen(true);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Header />
      {cropDetails &&
        cropDetails.map((crop, index) => (
          <CropDetailsCard
            key={index}
            crop={crop}
            timeLeft={timeLeft}
            auctionEnded={auctionEnded}
            handleThumbnailClick={handleThumbnailClick}
          />
        ))}
      <ImageModal
        modalOpen={modalOpen}
        selectedPicture={selectedPicture}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Widget;

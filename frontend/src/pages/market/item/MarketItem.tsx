import { useGetByIdQuery } from "@/dataprovider";
import { CropListings } from "@/interfaces";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CropDetailsCard from "./CropDetailsCard";
import SimilarListings from "./SimilarListings";

const MarketItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetByIdQuery<CropListings[]>(
    "market",
    id
  );

  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (!data || data.length === 0) return;

    const updateTimeLeft = () => {
      if (data.length > 0) {
        const remainingTime = formatTimeLeft(data[0].auctionEnd.toString());
        setTimeLeft(remainingTime);
        setAuctionEnded(remainingTime === "00:00:00");
      }
    };

    updateTimeLeft(); // Initial call

    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [data]);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedImage(data[0].primaryImage); // Set initial image
    }
  }, [data]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  const item = data[0];

  return (
    <>
      <CropDetailsCard
        item={item}
        timeLeft={timeLeft}
        auctionEnded={auctionEnded}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <SimilarListings />
    </>
  );
};

export default MarketItem;

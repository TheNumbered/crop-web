import { useGetByIdQuery } from "@/dataprovider";
import { useUpdateMutation } from "@/dataprovider/mutation/update";
import { CropListings } from "@/interfaces";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MarketItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetByIdQuery<CropListings[]>(
    "market",
    id
  );
  const updateBidMutation = useUpdateMutation({
    resource: "market/bid", // This should match your API endpoint
    invalidateKeys: ["market"],
  });

  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  //@ts-ignore
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [bidAmount, setBidAmount] = useState<number>();

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

  const handlePlaceBid = async () => {
    //@ts-ignore
    if (bidAmount <= item.currentBid) {
      alert("Your bid must be higher than the current bid.");
      return;
    }

    updateBidMutation.mutate(
      {
        id: item.id,
        newValues: { currentBid: bidAmount },
      },
      {
        onSuccess: () => {
          alert("Bid placed successfully!");
        },
        onError: () => {
          alert("Failed to place bid. Please try again.");
        },
      }
    );
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
      <Card
        sx={{
          maxWidth: "xl",
          mx: "auto",
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CardMedia
              component="img"
              height="400"
              image={selectedImage}
              alt={item.cropName}
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
              {item.pictures?.map((picture: string, index: number) => (
                <Box
                  key={index}
                  sx={{ flex: "0 0 auto", mr: 1 }}
                  onClick={() => setSelectedImage(picture)}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={picture}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
                      borderRadius: 2,
                      cursor: "pointer",
                      border:
                        picture === selectedImage ? "2px solid #000" : "none",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardContent>
              <Typography variant="h5" component="div" fontWeight="bold">
                {item.cropName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Box mt={2}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Crop Name:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.cropName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Variety:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.variety}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Quality Grade:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.qualityGrade}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Quantity:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.quantity}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Seller:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.sellerName}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Seller Rating:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">4.5</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Contact Info:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.contactInfo}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Location:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">{item.location}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Shipping Options:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {item.shippingOptions.map((option: any, index: any) => (
                      <Typography variant="body2" key={index}>
                        {option}{" "}
                        {index < item.shippingOptions.length - 1 && ","}
                      </Typography>
                    ))}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Pickup Options:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {item.pickupOptions.map((option: any, index: any) => (
                      <Typography variant="body2" key={index}>
                        {option} {index < item.pickupOptions.length - 1 && ","}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold">
                  Bidding Information
                </Typography>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">Current Bid</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    R{item.currentBid}
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  mt={1}
                >
                  <Typography variant="body2">Time Left:</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {timeLeft}
                  </Typography>
                </Grid>
                <TextField
                  variant="outlined"
                  placeholder={`Enter Your Bid (Minimum R${
                    parseInt(item.currentBid) + 1
                  })`}
                  fullWidth
                  margin="normal"
                  sx={{ mt: 2 }}
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handlePlaceBid}
                >
                  Place Bid
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
        <Typography variant="h6" fontWeight="bold" mt={6}>
          Similar Listings
        </Typography>
        <Grid container spacing={2} mt={2}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CardMedia
                component="img"
                height="200"
                image="https://placehold.co/300x200?text=Similar+Listing"
                alt="Similar Listing"
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default MarketItem;

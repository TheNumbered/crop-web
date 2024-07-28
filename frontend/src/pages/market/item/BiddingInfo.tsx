import { useUpdateMutation } from "@/dataprovider/mutation/update";
import { CropListings } from "@/interfaces";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface BiddingInfoProps {
  item: CropListings;
  timeLeft: string;
  auctionEnded: boolean;
}

const BiddingInfo: React.FC<BiddingInfoProps> = ({
  item,
  timeLeft,
  auctionEnded,
}) => {
  const [bidAmount, setBidAmount] = useState<number>(0);
  const updateBidMutation = useUpdateMutation({
    resource: "market/bid",
    invalidateKeys: ["market"],
  });

  const handlePlaceBid = async () => {
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

  return (
    <Box mt={2}>
      <Typography variant="h6" fontWeight="bold">
        Bidding Information
      </Typography>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2">Current Bid</Typography>
        <Typography variant="h6" fontWeight="bold">
          R{item.currentBid}
        </Typography>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" mt={1}>
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
        disabled={auctionEnded}
      >
        Place Bid
      </Button>
    </Box>
  );
};

export default BiddingInfo;

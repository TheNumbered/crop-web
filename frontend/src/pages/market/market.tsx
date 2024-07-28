import { useGetQuery } from '@/dataprovider';
import { CropListings } from '@/interfaces';
import { Search } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const formatTimeLeft = (endTime: string|Date): string => {
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

const MarketPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const { data, isLoading, isError } = useGetQuery<CropListings[]>('market');

    const navigate = useNavigate();

    const handleOnClick = (id: number) => {
        navigate(`/market/${id}`);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    const filteredItems = data?.filter((item) =>
        item.cropName.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TextField
                    label="Search Markets"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        endAdornment: <Search />,
                    }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>
            <Grid container spacing={3} sx={{ padding: 1 }}>
                {filteredItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={() => handleOnClick(item.id)}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={`/uploads/market/${item.id}.jpg`}
                                sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                                alt={item.cropName}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="h6">{item.cropName}</Typography>
                                    {/* @ts-ignore */}
                                    <Typography variant="h6">R {item.currentBid}</Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {item.description}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <LocationOnIcon sx={{ mr: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            {item.location}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ mr: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            {formatTimeLeft(item.auctionEnd)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MarketPage;

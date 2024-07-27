import { Search } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const marketItems = [
    {
        id: 1,
        name: 'Corn',
        image: 'https://via.placeholder.com/150',
        highestBid: 150,
        description: 'Fresh and organic corn directly from the farm.',
        location: 'Farmville, USA',
        timeLeft: '2h 30m',
    },
    {
        id: 2,
        name: 'Wheat',
        image: 'https://via.placeholder.com/150',
        highestBid: 200,
        description: 'High-quality wheat perfect for baking and cooking.',
        location: 'Grainland, USA',
        timeLeft: '1d 4h',
    },
    {
        id: 3,
        name: 'Soybeans',
        image: 'https://via.placeholder.com/150',
        highestBid: 250,
        description: 'Organic soybeans rich in protein and nutrients.',
        location: 'Soytown, USA',
        timeLeft: '3h 15m',
    },
    // Add more items as needed
];

const MarketPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredItems = marketItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const navigate = useNavigate();
    const handleOnClick = (id: number) => {
       navigate(`/market/${id}`);
    };

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
                                image={item.image}
                                sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                                alt={item.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="h6">R {item.highestBid}</Typography>
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
                                            {item.timeLeft}
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

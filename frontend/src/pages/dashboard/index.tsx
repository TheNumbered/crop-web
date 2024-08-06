import { Box, Button, Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import './Dashboard.css';

interface CurrentWeather {
  temperature_2m: number;
  wind_speed_10m: number;
}

interface WeatherResponse {
  current: CurrentWeather;
}

const HomePage: React.FC = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));


  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;

      try {
        const response = await fetch(url);
        const data: WeatherResponse = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const handleGeolocationSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    };

    const handleGeolocationError = (error: GeolocationPositionError) => {
      setLocationError('Unable to retrieve your location.');
      console.error('Geolocation error:', error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="homepage">
      <div className="background-video">
        {isMobile ? (
          <img src="/phoneback.jpg" alt="Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <iframe
          width="100%"
          height="120%"
          src="https://www.youtube.com/embed/jauT0wLAEV4?autoplay=1&mute=1&loop=1&playlist=jauT0wLAEV4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        )}
      </div>
      <Box className="content" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 'bold', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '1px #000',
            fontFamily: 'Gill Sans Extrabold',
            mt: 6,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem' },
          }}
        >
          Welcome to Crop Web
        </Typography>
        <Typography variant="h6">
          Helping farmers diagnose and manage their crops and livestock.
        </Typography>
  
        <Box className="weather" sx={{ mt: 4 }}>
          {weather ? (
            <Card sx={{ display: 'inline-block', maxWidth: 400, mx: 'auto' }}>
              <CardContent>
                <Typography variant="h5">Current Weather</Typography>
                <Typography>Temperature: {weather.current.temperature_2m}°C</Typography>
                <Typography>Wind Speed: {weather.current.wind_speed_10m} km/h</Typography>
              </CardContent>
            </Card>
          ) : locationError ? (
            <Typography>{locationError}</Typography>
          ) : (
            <Typography>Loading weather data...</Typography>
          )}
        </Box>
      </Box>
      <Box className="boxes" sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Card className="box" sx={{ maxWidth: 300, backgroundColor: '#FFFFFFCC' }}>
          <img src="/ardobe.png" alt="Fresh Vegetables" className="box-img equal-size" />
          <CardContent>
            <Typography variant="h5" className="box-title">Fresh Vegetables</Typography>
            <Typography className="box-description">
              Enjoy the freshest vegetables, ripeness. Our organic, locally sourced produce offers vibrant flavors and nutrients.
            </Typography>
            <Button variant="contained" className="box-button" sx={{mt:2}}>Learn More</Button>
          </CardContent>
        </Card>
        <Card className="box" sx={{ maxWidth: 300, backgroundColor: '#FFFFFFCC' }}>
          <img src="/theo.png" alt="Agricultural Products" className="box-img equal-size" />
          <CardContent>
            <Typography variant="h5" className="box-title">Agricultural Products</Typography>
            <Typography className="box-description">
              A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradisematic country, in which roasted parts.
            </Typography>
            <Button variant="contained" className="box-button" sx={{mt:2}}>Learn More</Button>
          </CardContent>
        </Card>
        <Card className="box" sx={{ maxWidth: 300, backgroundColor: '#FFFFFFCC' }}>
          <img src="/organic_foods.png" alt="Organic Products" className="box-img equal-size" />
          <CardContent>
            <Typography variant="h5" className="box-title">Organic Products</Typography>
            <Typography className="box-description">
              A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradisematic country, in which roasted parts.
            </Typography>
            <Button variant="contained" className="box-button" sx={{mt:2}}>Learn More</Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default HomePage;

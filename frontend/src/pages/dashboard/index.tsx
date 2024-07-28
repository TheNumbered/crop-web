import { useEffect, useState } from 'react';
import './Dashboard.css';

// Define TypeScript interfaces for weather data
interface CurrentWeather {
  temperature_2m: number;
  wind_speed_10m: number;
}

interface WeatherResponse {
  current: CurrentWeather;
  // Add other properties from the API response if needed
}

const HomePage: React.FC = () => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

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
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Crop Web</h1>
        <p>Helping farmers diagnose and manage their crops and livestock.</p>
        <button className="cta-button">Get Started</button>
        <div className="weather">
          {weather ? (
            <div>
              <h2>Current Weather</h2>
              <p>Temperature: {weather.current.temperature_2m}°C</p>
              <p>Wind Speed: {weather.current.wind_speed_10m} km/h</p>
            </div>
          ) : locationError ? (
            <p>{locationError}</p>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <img src="/ardobe.png" alt="Fresh Vegetables" className="box-img" />
          <h2 className="box-title">Fresh Vegetables</h2>
          <p className="box-description">
          Enjoy the freshest vegetables,  ripeness. Our organic, locally sourced produce offers vibrant flavors and nutrients to nourish your body and soul.
         
          </p>
          <button className="box-button">Learn More</button>
        </div>


        <div className="box">
          <img src="/theo.png" alt="Organic Products" className="box-img" />
          <h2 className="box-title">Agricultural Products</h2>
          <p className="box-description">
            A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradisematic country, in which roasted parts.
          </p>
          <button className="box-button">Learn More</button>
        </div>











        
        <div className="box">
          <img src="/organic_foods.png" alt="Organic Products" className="box-img" />
          <h2 className="box-title">Organic Products</h2>
          <p className="box-description">
            A small river named Duden flows by their place and supplies it with the necessary regalia. It is a paradisematic country, in which roasted parts.
          </p>
          <button className="box-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

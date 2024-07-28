import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import * as tf from '@tensorflow/tfjs';
import React, { useEffect, useState } from 'react';

const CropAiPage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [predictedLabel, setPredictedLabel] = useState<string>('');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [remedy, setRemedy] = useState<string>('');

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    const initializeModel = async () => {
      const loadedModel = await tf.loadLayersModel('/tensorflowjs-model/model.json');
      setModel(loadedModel);
    };

    initializeModel();
  }, []);

  const speak = (text: string) => {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  const fetchRemedy = async (disease: string) => {
    const response = await fetch('/remedies.json');
    const remedies = await response.json();
    return remedies[disease] || 'No remedy found for this disease';
  };

  const fetchData = async () => {
    const response = await fetch('/class_indices.json');
    const data = await response.json();
    return data;
  };

  const predict = async (imgElement: HTMLImageElement) => {
    if (!model) return;

    speak('Image uploaded. Please wait while I diagnose the plant disease. Note that the diagnosis may not be 100% accurate.');

    const tensorImg = tf.browser.fromPixels(imgElement).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
    const tensorImg_scaled = tensorImg.div(tf.scalar(255));
    const prediction = (await model.predict(tensorImg_scaled) as tf.Tensor).dataSync() as Float32Array;

    const data = await fetchData();
    const predictedClass = tf.argMax(prediction);
    const classIdx = Array.from(predictedClass.dataSync())[0];

    const predictedLabel = data[classIdx].replace(/_/g, ' '); // Remove underscores for display
    setPredictedLabel(predictedLabel);
    setConfidence(parseFloat((prediction[classIdx] * 100).toFixed(2)));

    const rawLabel = data[classIdx]; // Use raw label with underscores for fetching remedy
    if (rawLabel.includes('healthy')) {
      setRemedy('No remedy needed. Your plant is healthy.');
      speak(`Based on the diagnosis with ${confidence}% confidence, your plant is healthy.`);
      return;
    } else {
      speak(`The plant is infected with ${predictedLabel} with ${confidence}% confidence.`);
    }

    const remedyText = await fetchRemedy(rawLabel); // Fetch remedy using raw label
    setRemedy(remedyText);
    speak(`The remedy for ${predictedLabel} is: ${remedyText}`);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imgSrc = reader.result as string;
        setImage(imgSrc);

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.onload = () => {
          predict(imgElement);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3, justifyContent: 'center' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            Crop AI Diagnosis
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            {image ? (
              <CardMedia
                component="img"
                image={image}
                alt="Uploaded Plant"
                sx={{ width: '100%', maxHeight: 300, mb: 2, minWidth: 300 }}
              />
            ) : (
              <Box sx={{ width: '100%', height: 300, minWidth: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed gray', mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  No image uploaded
                </Typography>
              </Box>
            )}
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleUpload} />
            </Button>
            {isMobile &&
              <Button
                variant="contained"
                component="label"
                sx={{ mt: 2 }}
                startIcon={<CameraAltIcon />}
              >
                Take Photo
                <input type="file" hidden accept="image/*" onChange={handleUpload} capture="environment" />
              </Button>
            }
          </Box>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Diagnosis
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {predictedLabel ? `Your Plant is infected with: ${predictedLabel}` : 'The AI diagnosis will be displayed here.'}
            </Typography>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Confidence
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {confidence !== null ? `${confidence}% Confident` : ''}
            </Typography>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Recommended Remedies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {remedy || 'Recommended remedies will be displayed here.'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CropAiPage;

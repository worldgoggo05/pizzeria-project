import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "../../../css/calai.css";

export default function CalAiPage() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    foodName: string;
  }>(null);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
          setResults(null); // Reset results when new image is uploaded
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  // Simulate AI analysis
  const analyzeImage = () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results - in a real app, this would come from an API
      const mockResults = {
        calories: Math.floor(Math.random() * 800) + 200,
        protein: Math.floor(Math.random() * 30) + 10,
        carbs: Math.floor(Math.random() * 40) + 20,
        fat: Math.floor(Math.random() * 15) + 5,
        foodName: "Pizza Slice"
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Reset everything
  const handleReset = () => {
    setImage(null);
    setResults(null);
  };

  return (
    <div className={"calai-page"}>
      <Container className={"calai-container"}>
        <Box className={"calai-content"}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2,minHeight:'750px' }}>
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Calorie AI
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Track your calories with just a picture
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Left Column - Upload & Results */}
              <Grid item xs={12} md={6}>
                <Box mb={4}>
                  <Typography variant="h6" gutterBottom>
                    How it works:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText 
                        primary="1. Take or upload a photo of your meal" 
                        secondary="The clearer the image, the better the analysis"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="2. Our AI analyzes your food" 
                        secondary="We identify ingredients and portion sizes"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="3. Get detailed nutritional information" 
                        secondary="Calories, protein, carbs, fat and more"
                      />
                    </ListItem>
                  </List>
                </Box>

                {/* Upload Area */}
                <Box 
                  sx={{ 
                    border: '2px dashed #ccc', 
                    borderRadius: 2, 
                    p: 3, 
                    textAlign: 'center',
                    mb: 3,
                    backgroundColor: '#f8f8ff',
                    minHeight:'300px',
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {!image ? (
                    <>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="image-upload"
                        type="file"
                        onChange={handleImageUpload}
                      />
                      <label htmlFor="image-upload">
                        <Button 
                          variant="contained" 
                          component="span"
                          startIcon={<CameraAltIcon />}
                          sx={{ mb: 2 }}
                        >
                          Upload Food Image
                        </Button>
                      </label>
                      <Typography variant="body2" color="text.secondary">
                        or drag and drop an image here
                      </Typography>
                    </>
                  ) : (
                    <Box>
                      <img 
                        src={image} 
                        alt="Food" 
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '180px', 
                          borderRadius: '8px' 
                        }} 
                      />
                      <Box mt={2} display="flex" justifyContent="center" gap={2}>
                        <Button 
                          variant="outlined" 
                          color="secondary"
                          onClick={handleReset}
                        >
                          Change Image
                        </Button>
                        <Button 
                          variant="contained" 
                          color="primary"
                          onClick={analyzeImage}
                          disabled={isAnalyzing}
                          startIcon={isAnalyzing ? <CircularProgress size={20} color="inherit" /> : <RestaurantIcon />}
                        >
                          {isAnalyzing ? "Analyzing..." : "Analyze Food"}
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Grid>

              {/* Right Column - Results */}
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    height: '95%', 
                    minHeight:'300px',
                    backgroundColor: results ? '#f9f9f9' : 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: results ? 'flex-start' : 'center',
                    alignItems: results ? 'flex-start' : 'center'
                  }}
                >
                  {results ? (
                    <>
                      <Typography variant="h5" gutterBottom color="primary">
                        Nutritional Information
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        {results.foodName}
                      </Typography>
                      <Divider sx={{ width: '100%', my: 2 }} />
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Calories
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {results.calories} kcal
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Protein
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {results.protein}g
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Carbohydrates
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {results.carbs}g
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Fat
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {results.fat}g
                          </Typography>
                        </Grid>
                      </Grid>
                      
                      <Box mt={4} width="100%">
                        <Typography variant="body2" gutterBottom>
                          Want more accurate results?
                        </Typography>
                        <TextField
                          fullWidth
                          variant="outlined"
                          size="small"
                          placeholder="Describe your meal for better analysis"
                          sx={{ mb: 2 }}
                        />
                        <Button variant="contained" color="primary" fullWidth>
                          Improve Results
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <Box textAlign="center" p={3}>
                      <RestaurantIcon sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        No Analysis Yet
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Upload a photo of your food and click "Analyze Food" to see nutritional information
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Grid>
            </Grid>

            {/* Footer Info */}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

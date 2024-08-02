import { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Button,
  Typography,
  Stack,
  Box,
  alpha,
} from '@mui/material';
import AppAppBar from './AppAppBar';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const initialWords = [
  // Animals
  'penguin',
  'panda',
  'shark',
  'raccoon',
  'hippopotamus',
  'kangaroo',
  'elephant',
  'monkey',
  // Objects
  'beanie',
  'toilet',
  'computer',
  'painting',
  'mountain',
  'violin',
  'island',
  // Biblical items
  "Noah's ark",
  'David and Goliath',
  'The Ten Commandments',
  'The Burning Bush',
  'The Red Sea',
  // Foods
  'egg yolk',
  'ramen',
  'sushi',
  'pizza',
  'ice cream',
  'corn',
  // Actions
  'rock climbing',
  'fishing',
  'praying',
  'reading',
  'cooking',
  'worship',
  // Higher difficulty
  'galaxy',
  'volcano',
  'knight',
  'bonfire',
  'cabin',
  'cave',
  'scuba diving',
  'birdhouse',
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    background: '#000',
  },
});

function App() {
  const shuffledWords = shuffleArray(initialWords);
  const [word, setWord] = useState('');
  const [remainingWords, setRemainingWords] = useState(shuffledWords);

  const generateWord = () => {
    if (remainingWords.length === 0) {
      // Reset words if all have been used
      const emptyMessage = 'Out of words! Think of your own :)';
      setWord(emptyMessage);
    } else {
      const randomIndex = Math.floor(Math.random() * remainingWords.length);
      const selectedWord = remainingWords[randomIndex];

      setRemainingWords(
        remainingWords.filter((_, index) => index !== randomIndex)
      );

      setWord(selectedWord);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center items horizontally
          justifyContent: 'center', // Center items vertically
          backgroundImage: `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: 'cover', // Ensure background covers the element
          backgroundRepeat: 'no-repeat',
        }}
      >
        <AppAppBar />
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: 'md', // Set max width to control responsiveness
            overflow: 'hidden',
            padding: 2,
            marginTop: '10vh',
            '&& *': {
              fontFamily: [
                '"IBM Plex Sans"',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif',
              ].join(','),
            },
          }}
        >
          <Stack spacing={4}>
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '4rem', sm: '5rem', md: '6rem' },
                color: 'primary.main',
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, row on larger screens
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                component='span'
                variant='h1'
                sx={{
                  fontSize: 'clamp(3.5rem, 6vw, 4rem)',
                  color: '#24b3fe',
                  fontWeight: 'bold',
                }}
              >
                Pictionary
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  fontSize: 'clamp(3rem, 6vw, 3.5rem)',
                  color: 'white',
                }}
              >
                &nbsp;Word Generator
              </Typography>
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: '#d3d3d3',
                marginBottom: 2,
              }}
            >
              Click the button to generate a random word for your next drawing
              challenge!
            </Typography>
            <Box>
              <Button
                variant='contained'
                color='primary'
                onClick={generateWord}
              >
                Generate Word
              </Button>
            </Box>
            {word && (
              <Typography variant='h5' color='white'>
                {word}
              </Typography>
            )}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

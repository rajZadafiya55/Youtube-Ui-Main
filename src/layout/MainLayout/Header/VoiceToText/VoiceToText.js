import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// material-ui
import { useTheme, styled } from '@mui/material/styles';

import { Chip, Grid, List, Typography, Tooltip } from '@mui/material';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const VoiceToText = () => {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const chipSX = {
    height: 24,
    padding: '0 6px'
  };
  const stop = {
    ...chipSX,
    color: theme.palette.orange.dark,
    backgroundColor: theme.palette.orange.light,
    marginRight: '5px'
  };

  const start = {
    ...chipSX,
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light
  };

  const copy = {
    ...chipSX,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        }
      }}
    >
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12} sx={{ pb: 2 }}>
            <Typography variant="subtitle1">{transcript || 'speak something....'}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Chip onClick={startListening} label="Start" sx={start} />
              </Grid>
              <Grid item>
                <Chip onClick={SpeechRecognition.stopListening} label="Stop" sx={stop} />
              </Grid>
              <Grid item>
                <Tooltip title={isVisible ? 'copied' : 'Click to copy'} placement="top">
                  <Chip
                    onClick={() => {
                      navigator.clipboard.writeText(transcript);
                      setIsVisible(!isVisible);
                    }}
                    label="Copy"
                    sx={copy}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

export default VoiceToText;

import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

const BootstrapTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.grey
  }
}));

const CardWrapper = styled(MainCard)(() => ({
  color: '#fff',
  overflow: 'hidden',
  position: 'relative'
}));

const VideoDetailView = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 0 }}>
            <Grid container direction="column">
              <Grid item>
                <video
                  width="100%"
                  controls
                  poster="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  id="video1"
                >
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  <track kind="captions" />
                </video>
              </Grid>
              <Grid item>
                <Box sx={{ p: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', width: '21rem' }}>
                  <BootstrapTooltip
                    TransitionComponent={Zoom}
                    placement="top"
                    title={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, illum.'}
                  >
                    <Typography variant="h3" noWrap>
                      vv Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, illum.
                    </Typography>
                  </BootstrapTooltip>
                </Box>
                <Box sx={{ p: 1.2 }}>
                  <List sx={{ py: 0 }}>
                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                      <ListItemAvatar>
                        <Avatar
                          variant="circular"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.warning.light,
                            color: theme.palette.warning.dark
                          }}
                        >
                          <h3>R</h3>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          py: 0,
                          mt: 0,
                          mb: 0.1
                        }}
                        // primary={
                        //   <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '10.5rem' }}>
                        //     <BootstrapTooltip TransitionComponent={Zoom} placement="top" title={'lorem........'}>
                        //       <Typography variant="h5" noWrap>
                        //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, illum.
                        //       </Typography>
                        //     </BootstrapTooltip>
                        //   </Box>
                        // }
                        secondary={
                          <>
                            <Typography
                              variant="h4"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              ravi_sen
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              70K subscribers
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              {`200 views`} • {`30 days ago`}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

VideoDetailView.propTypes = {
  isLoading: PropTypes.bool
};

export default VideoDetailView;

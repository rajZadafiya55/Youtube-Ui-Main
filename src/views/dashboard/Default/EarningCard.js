import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

// project imports
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
  // backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative'
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading, entry }) => {
  const theme = useTheme();

  const allVideos = entry;

  // console.log(
  //   'owner',
  //   allVideos.owner.flatMap((e) => e.username)
  // );

  const createdAt = new Date(allVideos.createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate - createdAt;
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(hoursDifference / 24);
  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 0 }}>
            <Grid container direction="column">
              <Grid item>
                <video width="100%" controls poster={allVideos.thumbnail.url} id="video1">
                  <source src={allVideos.videoFile.url} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </Grid>
              <Grid item>
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
                          src={allVideos.owner.flatMap((e) => e.avatar)}
                        ></Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          py: 0,
                          mt: 0,
                          mb: 0.1
                        }}
                        primary={
                          <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '10.5rem' }}>
                            <BootstrapTooltip TransitionComponent={Zoom} placement="top" title={allVideos.description}>
                              <Typography variant="h5" noWrap>
                                {allVideos.description}
                              </Typography>
                            </BootstrapTooltip>
                          </Box>
                        }
                        secondary={
                          <>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              {allVideos.title}
                            </Typography>
                            <Typography
                              variant="subtitle3"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              {`${allVideos.views} views`} •{' '}
                              {daysDifference > 0
                                ? `${daysDifference} ${daysDifference === 1 ? 'day ago' : 'days ago'}`
                                : `${hoursDifference} ${hoursDifference === 1 ? 'hour ago' : 'hours ago'}`}{' '}
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

EarningCard.propTypes = {
  isLoading: PropTypes.bool,
  entry: PropTypes.object.isRequired // Define the shape of the 'entry' object
};

export default EarningCard;

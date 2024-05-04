import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

const CardWrapper = styled(MainCard)(() => ({
  // backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative'
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const UserChannel = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 0 }}>
            <Grid container direction="column">
              <Grid item>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KRDwp6J_LTQ?si=66aLmd7EPe300zNT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Grid>
              <Grid item>
                <h1 style={{ color: 'black' }}>hello</h1>
                {/* <Box sx={{ p: 1.2 }}>
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
                        primary={
                          <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '10.5rem' }}>
                            <BootstrapTooltip
                              TransitionComponent={Zoom}
                              placement="top"
                              title="  Born to live , not to drill (props) | useContext | react js next js | many more feature"
                            >
                              <Typography variant="h5" noWrap>
                                Born to live , not to drill useContext | react js next js | many more feature
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
                              Chai_our_code
                            </Typography>
                            <Typography
                              variant="subtitle3"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.2
                              }}
                            >
                              {`238K views`} • {`1 days ago`}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Box> */}
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

UserChannel.propTypes = {
  isLoading: PropTypes.bool
};

export default UserChannel;

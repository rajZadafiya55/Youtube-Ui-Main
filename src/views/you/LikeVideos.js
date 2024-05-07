import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, IconButton, Avatar } from '@mui/material';
import { ThumbUpOutlined, ThumbDownOutlined, ShareOutlined, SaveAltOutlined, MoreVertOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLikedVideos } from '../../redux/actions/likeAction';

const LikeVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.like.videosDetails);
  const [allVideos, setAllVideos] = useState([]);

  console.log('Liked videos', videos);

  useEffect(() => {
    dispatch(getAllLikedVideos());
  }, [dispatch]);

  useEffect(() => {
    setAllVideos(videos);
  }, [videos]);

  const handleLikeToggle = (index) => {
    setAllVideos((prevVideos) => prevVideos.map((video, i) => (i === index ? { ...video, liked: !video.liked } : video)));
  };

  console.log('liked allVideos', allVideos);

  return (
    <div style={{ margin: '20px' }}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            {allVideos?.map((v, index) => {
              const createdAt = new Date(v.videos.createdAt);
              const currentDate = new Date();
              const timeDifference = currentDate - createdAt;
              const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
              const daysDifference = Math.floor(hoursDifference / 24);

              return (
                <>
                  <Grid item xs={12} md={7}>
                    <iframe
                      style={{ border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}
                      width="90%"
                      height="98%"
                      src={v.videos.videoFile.url}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
                      <Avatar />
                      <Typography variant="h4" style={{ marginLeft: '10px' }}>
                        {v.videos.owner.username}
                      </Typography>
                    </div>
                    <Typography variant="h5" gutterBottom>
                      {v.videos.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" gutterBottom>
                      {v.videos.views} Views
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {daysDifference > 0
                        ? `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'}`
                        : `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'}`}{' '}
                      ago
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                      {v.videos.description}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                      <IconButton onClick={() => handleLikeToggle(index)}>
                        {v.liked ? <ThumbUpOutlined style={{ color: 'blue' }} /> : <ThumbUpOutlined />}
                      </IconButton>
                      <IconButton>
                        <ThumbDownOutlined />
                      </IconButton>
                      <IconButton>
                        <ShareOutlined />
                      </IconButton>
                      <IconButton>
                        <SaveAltOutlined />
                      </IconButton>
                      <IconButton>
                        <MoreVertOutlined />
                      </IconButton>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default LikeVideos;

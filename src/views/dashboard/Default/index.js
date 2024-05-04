import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import EarningCard from './EarningCard';
import { gridSpacing } from 'themes/constant';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideos } from '../../../redux/actions/videoAction';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videosDetails);
  const [allVideos, setAllVideos] = useState([]);

  console.log('videos', videos);

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  useEffect(() => {
    setAllVideos(videos);
  }, [videos]);

  console.log('allVideos', allVideos);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {allVideos.map((entry, index) => (
            <Grid key={index} item lg={3} md={6} sm={6} xs={12}>
              <NavLink to={`/videodetailview/${entry._id}`} style={{ textDecoration: 'none' }}>
                <EarningCard isLoading={isLoading} entry={entry} />
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

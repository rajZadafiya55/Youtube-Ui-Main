import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'themes/constant';

// ==============================|| Collections ||============================== //

const Collections = () => (
  <MainCard title="Basic Collections">
    <Grid container spacing={gridSpacing}></Grid>
  </MainCard>
);

export default Collections;

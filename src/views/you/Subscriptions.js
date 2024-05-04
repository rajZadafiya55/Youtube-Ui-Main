import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'themes/constant';

// ==============================|| Subscriptions ||============================== //

const Subscriptions = () => (
  <MainCard title="Basic Subscriptions">
    <Grid container spacing={gridSpacing}></Grid>
  </MainCard>
);

export default Subscriptions;

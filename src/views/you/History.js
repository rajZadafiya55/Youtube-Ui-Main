import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'themes/constant';

// ==============================|| History ||============================== //

const History = () => (
  <MainCard title="Basic History">
    <Grid container spacing={gridSpacing}></Grid>
  </MainCard>
);

export default History;

import { Container, Grid, Paper, Typography, Button } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Subscriptions ||============================== //

const Subscriptions = () => {
  const subscriptionPlans = [
    { id: 1, name: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 2, name: 'Standard', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { id: 3, name: 'Premium', price: '$29.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] }
  ];

  const handleSubscribe = (planId) => {
    // Handle subscription logic
    console.log(`Subscribed to plan with ID ${planId}`);
  };

  return (
    <MainCard title="Basic Subscriptions">
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 5, mb: 3 }}>
          Choose Your Plan
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {subscriptionPlans.map((plan) => (
            <Grid key={plan.id} item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" align="center">
                  {plan.name}
                </Typography>
                <Typography variant="h5" align="center" sx={{ mt: 1, mb: 2 }}>
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleSubscribe(plan.id)}>
                  Subscribe
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainCard>
  );
};
export default Subscriptions;

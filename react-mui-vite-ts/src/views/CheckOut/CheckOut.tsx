import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Divider,
} from "@mui/material";

const CheckOut = () => {
  return (
    <Box sx={{ padding: 3, maxWidth: "1200px", margin: "auto" }}>
      <Grid container spacing={3}>
        {/* Billing Details */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              BILLING DETAILS
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Full Name *" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country *" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street address *"
                  variant="outlined"
                  placeholder="House number and street name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Apartment, suite, unit, etc. (optional)"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Town / City *" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="State / County *" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Postcode / ZIP *" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3 }}>
            <Typography  gutterBottom>
              YOUR ORDER
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body1">
                <strong>Product</strong>
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography>VNEED Women Embroide... x 2</Typography>
                <Typography>₹900.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Glowworld Women Blue... x 1</Typography>
                <Typography>₹460.00</Typography>
              </Box>
              <Divider sx={{ marginY: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography>
                  <strong>Subtotal</strong>
                </Typography>
                <Typography>₹1,360.00</Typography>
              </Box>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="success"
              sx={{ paddingY: 1.5 }}
            >
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckOut;

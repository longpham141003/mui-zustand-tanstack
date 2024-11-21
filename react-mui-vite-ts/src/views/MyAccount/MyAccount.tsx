import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

const MyAccount: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        mt: 5,
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      {/* Tiêu đề */}
      <Typography variant="h5" align="center" gutterBottom>
        My Account
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="EDIT PROFILE" />
        <Tab label="CHANGE PASSWORD" />
      </Tabs>

      {/* Nội dung Tab */}
      {tabValue === 0 && (
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3} alignItems="center">
            {/* Avatar */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                  border: "2px dashed #aaa",
                }}
                src=""
                alt="No photo"
              >
                No photo
              </Avatar>
            </Grid>

            {/* Form */}
            <Grid item xs={12} sm={8}>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      defaultValue="long"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      defaultValue="longpham141003@gmail.com"
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      defaultValue="0383086343"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        width: "100px",
                        mt: 2,
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {tabValue === 1 && (
        <Typography variant="body1" sx={{ mt: 3 }}>
          Change Password functionality coming soon!
        </Typography>
      )}
    </Box>
  );
};

export default MyAccount;

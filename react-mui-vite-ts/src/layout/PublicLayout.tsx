import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import TopBar from '../layout/Component/TopBar';
import Menu from '../layout/Component/Menu';
import { GLOBAL_PADDING, TOP_BAR_HEIGHT, MENU_HEIGHT } from '../layout/config';
import Footer from './Component/Footer/Footer';
import EmailContactSection from './Component/Footer/ContactForm';
import BenefitsSection from './Component/Footer/BenefitsSection';
import Breadcrumb from './Component/Breadcrumb/Breadcrumb';

const PublicLayout: React.FC = () => {
  const boxStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <Box>
      <Box {...boxStyle} sx={{ px: GLOBAL_PADDING, height: TOP_BAR_HEIGHT }}>
        <TopBar />
      </Box>
      <hr />
      <Box {...boxStyle} sx={{ px: GLOBAL_PADDING, height: MENU_HEIGHT }}>
        <Menu />
      </Box>
      <Breadcrumb />
      <Box sx={{ px: GLOBAL_PADDING, py: GLOBAL_PADDING }}>
        <main>
          <Outlet />
        </main>
      </Box>
      <EmailContactSection />
      <BenefitsSection />
      <Footer />
    </Box>
  );
};

export default PublicLayout;

import { Container } from '@mui/material';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <PublicRoutes />
    </Container>
  );
}
export default App;

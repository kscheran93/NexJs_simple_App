import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Header from './components/Header';
import BasicAccordion from './components/BasicAccordion';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Header/>
            <MuiAlert severity="error">My new Cybersecurity Portfolio project is a work in progress. Please check out my recent ideas for cybersecurity projects below.</MuiAlert>
          </Card>
          <Card>
             <BasicAccordion />
          </Card>
        </Box>
      </Container>
    </main>
  );
}
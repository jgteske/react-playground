'use client';

import RootLayout from '@/components/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { AutocompleteExample } from './components/autocomplete';
import { AccordionExample } from './components/accordion';
import { SkeletonExample } from './components/skeleton';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MuiTestPage: React.FC = () => {
  return (
    <RootLayout>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <h1>Mui Testpage</h1>
        {/* Example autocomplete field */}
        <div className='py-4'>
          <AutocompleteExample />
        </div>
        {/* Accordion Example */}
        <div className='py-4'>
          <AccordionExample />
        </div>
        {/* Skeleton Example */}
        <div className='py-4 w-[300px]'>
          <SkeletonExample />
        </div>
      </ThemeProvider>
    </RootLayout>
  );
};

export default MuiTestPage;

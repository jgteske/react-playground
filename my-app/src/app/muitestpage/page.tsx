'use client';

import RootLayout from '@/components/Layout';
import Container from '@mui/material/Container';

import { AutocompleteExample } from './components/autocomplete';
import { AccordionExample } from './components/accordion';
import { SkeletonExample } from './components/skeleton';
import MuiThemeWrapper, {
  ToggleThemePaletteMode,
} from '@/components/MuiThemeWrapper';

const MuiTestPage: React.FC = () => {
  return (
    <MuiThemeWrapper>
      <RootLayout>
        <ToggleThemePaletteMode />
        <Container
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'left',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}>
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
        </Container>
      </RootLayout>
    </MuiThemeWrapper>
  );
};

export default MuiTestPage;

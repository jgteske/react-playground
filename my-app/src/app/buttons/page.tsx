'use client';

import Button from '@/components/Button/Button';
import RootLayout from '@/components/Layout';
import {
  AnimatedButtonRainbowGlowEffect,
  AnimatedButtonColorGlowEffect,
} from '@/components/Button/AnimatedButton';

import './customStyle.css';

const Buttons: React.FC = () => {
  return (
    <RootLayout>
      <div className='space-y-4'>
        <h1>Example Button Page</h1>
        <br />
        <div>
          <Button
            styles='override-button-style'
            onClick={() => alert('hi')}
            type={'button'}
            title={'Test Titel'}
            disabled={false}>
            {/* children */}
            Open modal
          </Button>
        </div>
        <div>
          <AnimatedButtonRainbowGlowEffect label='Animated Testbutton using CSS only' />
        </div>
        <div>
          <AnimatedButtonColorGlowEffect
            label='Animated Button'
            color='#03fcb6'
          />
        </div>
      </div>
    </RootLayout>
  );
};

export default Buttons;

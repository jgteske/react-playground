import { useState } from 'react';
import './AnimatedButton.css';

type ButtonColor =
  | '#ffffff'
  | '#fcba03'
  | '#03fcb6'
  | '#57a18c'
  | '#660029'
  | '#d60000';

interface AnimatedButtonProps {
  label: string;
}

interface AnimatedButton1Props {
  label: string;
  color?: ButtonColor;
}

export const AnimatedButtonRainbowGlowEffect = ({
  label,
}: AnimatedButtonProps) => {
  return <button className='btn'>{label}</button>;
};

export const AnimatedButtonColorGlowEffect = ({
  label,
  color = '#ffffff',
}: AnimatedButton1Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = { '--clr': color } as React.CSSProperties;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className='btn1'
      style={style}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}>
      <span className={isHovered ? 'hover' : ''}>{label}</span>
    </button>
  );
};

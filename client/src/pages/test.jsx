import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/theme';
import useHover from '../pages/components/utils/useHover';
import GlobalStyles from '../theme/global';
import Cursor from '../pages/components/cursor';
import Button from '../pages/components/buttonMagnetic';

export default function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <Button ref={hoverRef} onClick={() => console.log('clicked')}>
        Magnetic button
      </Button>

      <Cursor hover={isHovered} />
    </ThemeProvider>
  );
}

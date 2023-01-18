import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import TaskListApp from './TaskListApp';

const config = {
    initialColorMode: 'system',
    useSystemColorMode: false,
  };
  
  const theme = extendTheme({ config });

  const rootApp = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <TaskListApp />
    </ChakraProvider>
  </React.StrictMode>,
  rootApp
);
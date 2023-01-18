import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import TaskListApp from './TaskListApp';
import TasksProvider from './context/TasksProvider';

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
        <TasksProvider>
          <TaskListApp />
        </TasksProvider>
    </ChakraProvider>
  </React.StrictMode>,
  rootApp
);
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Chakra from "./components/Chakra";
import './index.css';
import App2 from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App2 />
      <Chakra />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import { Column } from './Column';
import logo from './logo.svg';
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from './styles';

function App() {
  return (
    <AppContainer>
      <Column text='Todo:' />
    </AppContainer>
  );
}

export default App;

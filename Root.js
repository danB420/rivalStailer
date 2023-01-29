import {registerRootComponent} from 'expo';
import App from './App';
import {name as appName} from './app.json';
import { AuthProvider } from './contexts/AuthContext';
import React from 'react';
import { useEffect } from 'react';

const Root = () => {
   
  return (
    <AuthProvider>
        <App />
    </AuthProvider>
  );
};
registerRootComponent(Root);
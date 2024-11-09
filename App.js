// App.js
import React from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import AppLayout from './app/_layout';

export default function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}

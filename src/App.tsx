import React from 'react';
import { AppProvider } from './context/AppContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <AppProvider>
      <AdminAuthProvider>
        <AppRoutes />
      </AdminAuthProvider>
    </AppProvider>
  );
}


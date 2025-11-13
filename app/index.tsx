import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../src/components/context/AuthContext';
import LoadingIndicator from '../src/components/styles/LoadingIndicator';

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  // Mientras está cargando, muestra el indicador de carga
  if (isLoading) {
    return <LoadingIndicator />;
  }

  // Si está autenticado, redirige al área privada (work-orders)
  if (isAuthenticated) {
    return <Redirect href="/(private)/work-orders" />;
  }

  // Si no está autenticado, redirige al área pública (home/login)
  return <Redirect href="/(public)" />;
}

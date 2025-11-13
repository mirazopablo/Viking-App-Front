# Migración a Expo SDK 54

Este documento describe la migración del proyecto de Expo SDK 51 a Expo SDK 54.

## Cambios Principales

### Versiones de Dependencias

- **Expo SDK**: ~54.0.21 (desde ~51.0.28)
- **React**: 19.1.0 (desde 18.2.0)
- **React Native**: 0.81.5 (desde 0.74.5)
- **Expo Router**: ~6.0.14 (versión actualizada)

### Archivos Creados

1. **package.json**: Configuración de dependencias actualizada para SDK 54
2. **app.json**: Configuración de la aplicación Expo
3. **babel.config.js**: Configuración de Babel con soporte para variables de entorno
4. **tsconfig.json**: Configuración de TypeScript
5. **types/env.d.ts**: Definiciones de tipos para variables de entorno

### Dependencias Actualizadas

#### Core
- `expo`: ~54.0.21
- `react`: 19.1.0
- `react-native`: 0.81.5
- `expo-router`: ~6.0.14

#### UI & Navegación
- `@expo/vector-icons`: ^15.0.0
- `react-native-safe-area-context`: ~5.0.1
- `react-native-screens`: ~4.6.0
- `react-native-paper`: ^5.12.5
- `styled-components`: ^6.1.15

#### Estado & Data
- `@tanstack/react-query`: ^5.65.2
- `axios`: ^1.7.9
- `expo-secure-store`: ~14.0.0

#### Otras
- `@shopify/flash-list`: ^1.7.2
- `@react-native-picker/picker`: ^2.10.0
- `jwt-decode`: ^4.0.0
- `expo-status-bar`: ~2.0.0

### Configuración de TypeScript

El `tsconfig.json` ahora incluye:
- Paths aliases para importaciones más limpias
- Soporte para typed routes de Expo Router
- Tipos estrictos habilitados

### Variables de Entorno

Se ha configurado `react-native-dotenv` para manejar variables de entorno:
- `API_URL`: URL del backend
- `ADMIN_ROLE_ID`: ID del rol de administrador

## Pasos para Instalar

1. Asegúrate de tener Node.js 20.19.4 o superior instalado
2. Elimina `node_modules` si existe:
   ```bash
   rm -rf node_modules
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` basado en `.env-example`
5. Inicia el proyecto:
   ```bash
   npx expo start
   ```

## Cambios Breaking Importantes

### React 19.1
- React 19 introduce mejoras en el rendimiento y nuevas características
- La mayoría del código existente es compatible sin cambios

### React Native 0.81
- Incluye precompilación de React Native para iOS (XCFrameworks)
- Mejoras significativas en los tiempos de compilación

### Android 16 (API 36)
- Edge-to-edge habilitado por defecto en todas las apps Android
- Puede requerir ajustes en los estilos para manejar áreas seguras

## Compatibilidad del Código Existente

El código existente ha sido revisado y es compatible con Expo SDK 54:
- ✅ `AuthContext` - Compatible con React 19
- ✅ Expo Router - Funcionando correctamente
- ✅ Styled Components - Compatible
- ✅ React Native Paper - Compatible
- ✅ TanStack Query - Compatible

## Notas Adicionales

- Se mantiene el uso de Expo Router (no React Router)
- Todas las rutas existentes siguen funcionando
- Los grupos de rutas `(public)` y `(private)` se mantienen
- La autenticación con JWT sigue funcionando correctamente

## Problemas Conocidos y Soluciones

Si encuentras algún error durante la instalación o ejecución:

1. **Error de versión de Node.js**: Asegúrate de usar Node.js 20.19.4 o superior
2. **Errores de tipos**: Ejecuta `npx expo install --fix`
3. **Problemas con cached builds**: Limpia el cache con `npx expo start --clear`

## Referencias

- [Expo SDK 54 Changelog](https://expo.dev/changelog/sdk-54)
- [React 19 Announcement](https://react.dev/blog/2024/12/05/react-19)
- [React Native 0.81 Release](https://github.com/facebook/react-native/releases/tag/v0.81.0)

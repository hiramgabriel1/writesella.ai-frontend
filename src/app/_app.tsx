import 'primereact/resources/themes/saga-blue/theme.css';  // Tema PrimeReact
import 'primereact/resources/primereact.min.css';           // Estilos base PrimeReact
import 'primeicons/primeicons.css';                         // Iconos PrimeReact
import 'primeflex/primeflex.css';                           // PrimeFlex (opcional)
import '../styles/globals.css';                             // Otros estilos globales

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
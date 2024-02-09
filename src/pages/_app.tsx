import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { store } from '@/store';
import { Provider } from 'react-redux';
import Header from '@/components/UI/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex justify-center pt-10 mx-auto">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

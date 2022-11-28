import React, { useEffect } from 'react';
import '../assets/css/app.css';
import '../assets/css/my-account.css';
import '../assets/css/my-cart.css';
import '../assets/css/fresco.css';
import Layout from '../layouts/main';
import { Provider } from 'react-redux';
import store from '../stores/store';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem('userDetails');
    if (router.pathname === '/login' && loggedIn) {
      router.push('/');
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

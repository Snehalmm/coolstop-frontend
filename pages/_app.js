import "../assets/css/app.css";
import "../assets/css/my-account.css";
import "../assets/css/my-cart.css";
import "../assets/css/fresco.css";
import Layout from "../layouts/main";
import { Provider } from "react-redux";
import store from "../stores/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

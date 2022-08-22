import Layout from "../components/layout";
import "../styles/globals.css";
import "antd/dist/antd.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

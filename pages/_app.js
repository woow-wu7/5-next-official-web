import App from "next/app";
import Layout from "../components/layout";
import { wrapper } from "../store/index";
import { addAsync } from "../store/counter";
import "antd/dist/antd.css";
import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";

// export default function MyApp({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider
//       session={session}
//       options={{
//         staleTime: 0,
//         refetchInterval: 0,
//       }}
//     >
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </SessionProvider>
//   );
// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    await store.dispatch(addAsync(100));

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        pathname: context.ctx.pathname,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);

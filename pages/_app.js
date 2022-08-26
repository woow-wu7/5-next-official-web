import Layout from "../components/layout";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { SessionProvider } from "next-auth/react";

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

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

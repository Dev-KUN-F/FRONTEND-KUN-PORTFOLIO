import { AppProps } from "next/app";
import "../styles/globals.css";

import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  );
}

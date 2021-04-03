import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";

import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [data, setData] = useState({});
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} data={data} setData={setData} />
    </>
  );
};

export default App;

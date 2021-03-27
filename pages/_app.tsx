import type { AppProps } from "next/app";
import { useState } from "react";

import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [data, setData] = useState({ thoughts: null });
  return <Component {...pageProps} data={data} setData={setData} />;
};

export default App;

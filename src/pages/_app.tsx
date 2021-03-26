import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import React from "react";

const CustomApp = ({ Component, pageProps }: AppProps) => (
    <Component { ...pageProps } />
);

export default appWithTranslation(CustomApp);

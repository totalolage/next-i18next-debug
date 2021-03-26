import { intersection } from "lodash";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, { useEffect } from "react";

const LOCALES = ["cs", "en"];
const DEFAULT_LOCALE = LOCALES[0];

const HomePage: NextPage = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        console.log("loading locales: ", JSON.stringify(LOCALES));
        i18n.loadLanguages(LOCALES).then(() => {
            console.log("loaded locales:", intersection(Object.keys(i18n.store.data), LOCALES));
        });
    }, [i18n.loadLanguages, LOCALES, i18n.store.data]);

    return (
        <>
            { `Current language: ${t("language.long")}` }
            { LOCALES.map((locale) => (
                <div key={ locale }>
                    <Link href="." locale={ locale } passHref>
                        <button type="button">
                            { t("language.short", { lng: locale }) }
                        </button>
                    </Link>
                </div>
            )) }
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    console.log("context locale is: ", ctx.locale);

    return ({
        props: {
            ...await serverSideTranslations(ctx.locale ?? DEFAULT_LOCALE, ["common"]),
        },
    });
};

export default HomePage;

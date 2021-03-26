const path = require("path");

module.exports = {
    i18n: {
        locales: process.env.NEXT_PUBLIC_LOCALES.split(","),
        defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
        ns: process.env.NEXT_PUBLIC_NAMESPACES.split(","),
        defaultNS: process.env.NEXT_PUBLIC_DEFAULT_NAMESPACE,
        localePath: path.resolve("./public/api/translations/"),
        shallowRender: true,
    },
};

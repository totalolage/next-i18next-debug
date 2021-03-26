export const PAGE_TITLE_SUFFIX = "next-i18next bug";
export const IS_CLIENT = typeof window !== "undefined";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT ?? 3000}`;
export const API_URL = `${SERVER_URL}${process.env.NEXT_PUBLIC_API_URL}`;

const defaultNamespace = process.env.NEXT_PUBLIC_DEFAULT_NAMESPACE;
const namespaces = process.env.NEXT_PUBLIC_NAMESPACES?.split(",");
const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;
const locales = process.env.NEXT_PUBLIC_LOCALES?.split(",");

if (!defaultNamespace) {
    throw new Error("Default namespace should be defined in the env");
}
if (!namespaces) {
    throw new Error("Namespaces shoudl be defined in the env");
}
if (!defaultLocale) {
    throw new Error("Default locale should be defined in the env");
}
if (!locales) {
    throw new Error("Locales should be defined in the env");
}

export const DEFAULT_NAMESPACE = defaultNamespace;
export const NAMESPACES = namespaces;
export const DEFAULT_LOCALE = defaultLocale;
export const LOCALES = locales;

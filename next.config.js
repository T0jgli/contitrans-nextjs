const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    i18n: {
        locales: ["hu", "en"],
        defaultLocale: "hu",
    },
    poweredByHeader: false,
    experimental: {
        scrollRestoration: true,
    },
});

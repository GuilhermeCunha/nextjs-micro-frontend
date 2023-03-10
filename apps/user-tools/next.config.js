const { withSentryConfig } = require("@sentry/nextjs");
const { i18n } = require("./next-i18next.config");

const { BASE_PATH } = process.env;

/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n,
  basePath: `/${BASE_PATH}`,
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${BASE_PATH}`,
        basePath: false,
        permanent: false,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

if (process.env.SENTRY_DSN) {
  console.debug("==> enabling sentry");
  // Make sure adding Sentry options is the last code to run before exporting, to
  // ensure that your source maps include changes from all other Webpack plugins
  config = withSentryConfig(config, sentryWebpackPluginOptions);
} else {
  console.warn("==> sentry is disabled");
}

module.exports = config;

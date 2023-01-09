const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["en-US", "pt-BR"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};

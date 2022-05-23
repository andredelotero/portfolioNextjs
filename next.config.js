const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|woff)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
};

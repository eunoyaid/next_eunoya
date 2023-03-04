module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key: env(
          "SIB_API_KEY",
          "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"
        ),
        sendinblue_default_replyto: env(
          "SIB_DEFAULT_REPLY_TO",
          "contact@eunoya.id"
        ),
        sendinblue_default_from: env("SIB_DEFAULT_FROM", "no-reply@eunoya.id"),
        sendinblue_default_from_name: env("SIB_DEFAULT_FROM_NAME", "Eunoya"),
      },
    },
  },
  // "users-permissions": {
  //   config: {
  //     ratelimit: {
  //       interval: 60000,
  //       max: 100000,
  //     },
  //   },
  // },
});

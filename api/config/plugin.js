
module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "sendmail",
        settings: {
          defaultFrom: "user@email.com",
          defaultReplyTo: "user@email.com",
          testAddress: "user@email.com",
        },
      },
    },
    // ...
  });
export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        process.env.FRONTEND_URL ?? "http://localhost:3000",
        "http://localhost:1337",
      ],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeadersOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

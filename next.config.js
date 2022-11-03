// module.exports = {
//   reactStrictMode: true,

//   images: {
//     // formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//         port: "",
//         pathname: "/image/upload/*",
//       },
//     ],
//   },
// };
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;

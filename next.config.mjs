/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projects/stock-exchange-simulator",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;

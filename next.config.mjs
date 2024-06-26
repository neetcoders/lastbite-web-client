/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lastbite.sgp1.cdn.digitaloceanspaces.com",
        port: "",
      },
    ]
  }
};

export default nextConfig;

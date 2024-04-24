/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    dangerouslyAllowSVG: true,
=======
>>>>>>> a172990fbede9085c80398133805f9120a860f36
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

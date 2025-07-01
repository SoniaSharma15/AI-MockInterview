import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@components"] = path.resolve(
      process.cwd(),
      "components"
    );
    return config;
  },
};

export default nextConfig;

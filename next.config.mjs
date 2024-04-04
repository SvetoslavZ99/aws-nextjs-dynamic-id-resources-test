/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/SomeBasePath",
  generateBuildId: () => {
    return "020d8ebcd5SomeRandomHash4c23ceeda7cd9a30d82";
  },
};

export default nextConfig;

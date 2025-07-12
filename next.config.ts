import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["127.0.0.1"],
  },
};

export default withFlowbiteReact(nextConfig);
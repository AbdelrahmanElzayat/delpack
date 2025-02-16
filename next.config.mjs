/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["delpack.poultrystore.net"],
  },
};

export default withNextIntl(nextConfig);


// export default nextConfig;

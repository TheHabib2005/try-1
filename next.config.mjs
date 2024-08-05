/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["cdn.dummyjson.com","demo.vercel.store","www.batabd.com","cdn.shopify.com","www.stepfootwear.com"]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false, //
      },
};

export default nextConfig;

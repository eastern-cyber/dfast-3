//import type { NextConfig } from "next";
//import next from "next";
//import { use } from "react";

// const nextConfig = {
//   webpack: (config, { isServer }) => {
//       // Add a rule to handle the canvas.node binary module
//       config.module.rules.push({ test: /\.node$/, use: 'raw-loader' });
  
//       // Exclude canvas from being processed by Next.js in the browser
//       if (!isServer) config.externals.push('canvas');
//       return config;
//   },
// }

// module.exports = nextConfig;
// export default nextConfig;



// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   webpack: (config, { isServer }) => {
//     // Add a rule to handle the canvas.node binary module
//     config.module.rules.push({ test: /\.node$/, use: 'raw-loader' });
//     return config;
//   },
// };

// export default nextConfig;



import { Configuration } from 'webpack';

const nextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    // Ensure config.module exists
    if (!config.module) {
      config.module = { rules: [] };
    }
  
    // Add your custom webpack rules
    config.module.rules.push({
      test: /\.node$/,
      use: 'raw-loader',
    });
  
    return config;
  },  
};

export default nextConfig;

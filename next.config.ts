let domain = "example.com"; // Fallback domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (siteUrl) {
  try {
    domain = new URL(siteUrl).hostname;
  } catch (error) {
    console.warn("Invalid NEXT_PUBLIC_SITE_URL, using fallback domain.");
  }
} else {
  console.warn("NEXT_PUBLIC_SITE_URL not set, using fallback domain.");
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: domain,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

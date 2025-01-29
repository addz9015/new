// config/api.config.ts

interface ApiConfig {
  apiKey: string;
  webhookConfig: {
    webhookUrl: string;
    webhookSecret: string;
    redirectUrl: string; // Fixed property name
    preferences: {
      tradingSignals: boolean;
      // Add other preferences as needed
    };
  };
}

const apiConfig: ApiConfig = {
  apiKey: process.env.STOCK_API_KEY || "",
  webhookConfig: {
    webhookUrl: process.env.WEBHOOK_URL || "",
    webhookSecret: process.env.WEBHOOK_SECRET || "",
    redirectUrl:
      process.env.REDIRECT_URL || "http://localhost:3000/auth/callback",
    preferences: {
      tradingSignals: true,
    },
  },
};

export const validateConfig = () => {
  const requiredFields = ["apiKey", "webhookUrl", "webhookSecret"];
  const missingFields = requiredFields.filter((field) => {
    if (field === "apiKey") return !apiConfig[field];
    return !apiConfig.webhookConfig[field];
  });

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required configuration: ${missingFields.join(", ")}`
    );
  }

  // Fixed property access
  if (
    !apiConfig.webhookConfig.redirectUrl.startsWith("https://") &&
    !apiConfig.webhookConfig.redirectUrl.includes("localhost")
  ) {
    throw new Error("Redirect URL must use HTTPS in production");
  }
};

export default apiConfig;

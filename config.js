const config = {
  // Always enforce the login page on Vercel
  challenge: true, 

  users: {
    // This reads the password securely from Vercel's environment variables
    baker: process.env.BAKER_PASSWORD || "fallback_local_password",
  },
};

export default config;

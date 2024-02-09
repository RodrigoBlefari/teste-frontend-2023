import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
  test: {
    files: "**/*.test.{ts,tsx}",
    environment: "jsdom",
  },
}));

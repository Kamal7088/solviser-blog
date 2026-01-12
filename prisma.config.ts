import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

dotenv.config(); // 👈 VERY IMPORTANT

export default defineConfig({
  schema: "prisma/schema.prisma",
});

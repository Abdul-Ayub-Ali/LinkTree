import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "Username is required" })
      .trim()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username cannot exceed 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),

    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email("Invalid email format"),

    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters long")
      .max(50, "Password cannot exceed 50 characters"),

    fullName: z
      .string({ required_error: "Full name is required" })
      .trim()
      .min(2, "Full name must be at least 2 characters long")
      .max(50, "Full name cannot exceed 50 characters"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email("Invalid email format"),

    password: z.string({ required_error: "Password is required" }),
  }),
});

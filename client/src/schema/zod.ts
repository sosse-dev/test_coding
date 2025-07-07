import z from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone Number is required").max(15, "Max 15 numbers"),
  department: z.string().min(1, "Department is required").max(50, "Max 50 letters"),
});

export { userSchema };

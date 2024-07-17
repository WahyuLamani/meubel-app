import { z } from "zod";

export const formSchemaCustomer = z.object({
    fullname: z.string().min(1, { message: "Full name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(/^(62|0)8[1-9][0-9]{6,11}$/, {
        message: "Invalid phone number",
    }),
    address: z.string().min(1, { message: "Address is required" }),
    gender: z.enum(["male", "female"]),
    photo: z.string().optional(),
});

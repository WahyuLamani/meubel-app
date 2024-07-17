"use server";

import { z } from "zod";
import { formSchemaCustomer } from "./definitions";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export async function storeCustomer(
    customer: z.infer<typeof formSchemaCustomer>
) {
    try {
        const data = await prisma.customers.create({
            data: {
                fullname: customer.fullname,
                email: customer.email,
                gender: customer.gender,
                phone: customer.phone,
                address: customer.address,
                photo: customer.photo,
            },
        });
        revalidatePath('/customers');
        return {
            status: "success",
            message: "Customer created successfully",
            data: data,
        };
    } catch (error) {
        return {
            status: "error",
            message: error
        };
    }
}

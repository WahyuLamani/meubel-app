"use server";

import { z } from "zod";
import { formSchemaCustomer } from "./definitions";
import { prisma, timestamp } from "@/lib/utils";
import { revalidatePath } from "next/cache";
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
                photo: customer.photo
                    ? customer.photo
                    : `https://robohash.org/${customer.fullname}`,
                createdAt: timestamp(),
                updatedAt: timestamp(),
            },
        });
        revalidatePath("/customers");
        return {
            status: "success",
            message: "Customer created successfully",
            data: data,
        };
    } catch (error: Error | any) {
        console.log(`Error : ${error.message}`);
        return {
            status: "error",
            message: "Unsuccessfull create customer. Please try again later",
        };
    }
}

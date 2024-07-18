import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
const prisma = new PrismaClient();

export async function getAllCustomers(): Promise<Customer[]> {
    noStore();
    const customers = await prisma.customers.findMany();
    return customers.map((customer) => ({
        ...customer,
        gender: customer.gender as Gender,
    }));
}

export async function getCustomerById(id: number): Promise<Customer | null> {
    noStore();
    const customer = await prisma.customers.findUnique({
        where: { id },
    });
    return customer ? { ...customer, gender: customer.gender as Gender } : null;
}

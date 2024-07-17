import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
const prisma = new PrismaClient();

export async function getAllCustomers() {
    noStore();
    const customers: Customer[] = await prisma.customers.findMany();
    return customers;
}

export async function getCustomerById(id: number) {
    noStore();
    const customer: Customer | null = await prisma.customers.findUnique({
        where: { id },
    });
    return customer;
}

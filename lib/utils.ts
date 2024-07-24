import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import moment from "moment-timezone";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const prisma = new PrismaClient();
export const formatDate = "DD-MM-YYYY HH:mm:ss";

export function timestamp() {
    moment.tz.setDefault(process.env.NEXT_PUBLIC_TIMEZONE);
    const nowISO = moment().toISOString();
    return nowISO;
}

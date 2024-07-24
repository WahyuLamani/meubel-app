"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { Button } from "../ui/button";

export const customerColumns: ColumnDef<Customer>[] = [
    {
        accessorKey: "photo",
        header: "",
        cell: ({ row }) => {
            return (
                <Image
                    src={row.getValue("photo")}
                    alt={row.getValue("fullname")}
                    width={40}
                    height={40}
                    className="rounded-full my-[-10px] border-2 border-dark-100"
                />
            );
        },
    },
    {
        accessorKey: "fullname",
        header: "Fullname",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({ row }) => {
            const gender: Gender = row.getValue("gender");
            return (
                <span
                    className={clsx(
                        "text-sm border-1 px-2 py-1 rounded-md text-white",
                        { "bg-blue-500": gender === "male" },
                        { "bg-red-500": gender === "female" }
                    )}
                >
                    {gender}
                </span>
            );
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
            const dateFormat = moment(row.getValue("createdAt")).fromNow();
            return (
                <span className="text-sm text-muted-foreground">
                    {dateFormat}
                </span>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>
                                View payment details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { ArrowUpDown, Delete, Edit, MoreHorizontal } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DataTableColumnHeader from "@/components/customers/sortable-hideable";

export const customerColumns: ColumnDef<Customer>[] = [
    {
        accessorKey: "photo",
        header: "Photo",
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
        size: 100,
    },
    {
        accessorKey: "fullname",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Fullname" />;
        },
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
                        "text-sm border-1 px-2 py-1 rounded-md ",
                        { "bg-primary text-white": gender === "male" },
                        { "bg-secondary text-dark": gender === "female" }
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
        header: () => {
            return (
                <span className="flex flex-row justify-center">Actions</span>
            );
        },
        cell: ({ row }) => {
            const customer: Customer = row.original;
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
                            <DropdownMenuItem
                                className="flex-row justify-between"
                                onClick={() => console.log(customer)}
                            >
                                Edit
                                <Edit className="h-4 w-4" />
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex-row justify-between text-destructive hover:text-destructive">
                                Delete
                                <Delete className="h-4 w-4" />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

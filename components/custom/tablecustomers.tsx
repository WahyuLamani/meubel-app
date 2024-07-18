import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { getAllCustomers } from "@/lib/getdata";
import Image from "next/image";
import moment from "moment";

export default async function CustomerTable() {
    const customers = await getAllCustomers();
    return (
        <Table>
            <TableCaption>A list of your recent customers.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Photo</TableHead>
                    <TableHead>Fullname</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Created at</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers.map((customer) => (
                    <TableRow key={customer.id}>
                        <TableCell>
                            <Image
                                src={customer.photo}
                                alt={customer.fullname}
                                width={40}
                                height={40}
                                className="rounded-full my-[-10px] border-2 border-dark-100"
                            />
                        </TableCell>
                        <TableCell>{customer.fullname}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>
                            {moment(customer.createdAt).fromNow()}
                        </TableCell>
                        <TableCell className="text-right">Action</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

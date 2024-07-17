import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonTableCustomers() {
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
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Skeleton className="w-10 h-10 rounded-full my-[-10px] border-2 border-dark-100" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="h-3 w-[120px]" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

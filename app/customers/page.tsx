import FormAddCustomer from "@/components/custom/formaddcustomers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { UserRoundPlus } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import SkeletonTableCustomers from "@/components/skeletons/skeletontable";
import DataTable from "@/components/customers/data-table";
import { getAllCustomers } from "@/lib/getdata";
import { customerColumns } from "@/components/customers/columns";

export const metadata: Metadata = {
    title: "Customers",
    description: "Customers",
};

export default async function Customers() {
    const customers = await getAllCustomers();
    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto flex flex-col sm:flex-row justify-between w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Customers</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="shrink-0">
                            <UserRoundPlus className="h-5 w-5 mr-[4px]" />
                            Register our customers
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[350px] rounded-lg text-left lg:max-w-[700px] sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Customer profile</DialogTitle>
                            <DialogDescription>
                                Register a new customer to get started
                            </DialogDescription>
                        </DialogHeader>
                        <FormAddCustomer />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mx-auto grid w-full max-w-6xl gap-4">
                <Card>
                    <CardHeader>
                        <h2 className="text-lg font-semibold">Customers</h2>
                        <p className="text-sm text-muted-foreground">
                            Registered customers
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <Suspense fallback={<SkeletonTableCustomers />}>
                                    <DataTable
                                        data={customers}
                                        columns={customerColumns}
                                    />
                                </Suspense>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

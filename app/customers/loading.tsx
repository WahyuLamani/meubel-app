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
import SkeletonTableCustomers from "@/components/skeletons/skeletontable";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingCustomers() {
    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto flex justify-between w-full max-w-6xl gap-2">
                <Skeleton className="w-40 h-3" />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="shrink-0">
                            <UserRoundPlus className="h-5 w-5 mr-[4px]" />
                            <Skeleton className="w-20 h-3" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[350px] rounded-lg text-left lg:max-w-[700px] sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>
                                <Skeleton className="w-30 h-3" />
                            </DialogTitle>
                            <DialogDescription>
                                <Skeleton className="w-40 h-3" />
                            </DialogDescription>
                        </DialogHeader>
                        <FormAddCustomer />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mx-auto grid w-full max-w-6xl gap-4">
                <Card>
                    <CardHeader>
                        <Skeleton className="w-40 h-3" />
                        <Skeleton className="w-40 h-3" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <SkeletonTableCustomers />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

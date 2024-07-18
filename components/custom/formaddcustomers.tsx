"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchemaCustomer } from "@/lib/definitions";
import { storeCustomer } from "@/lib/action";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import clsx from "clsx";
import { useState } from "react";

export default function FormAddCustomer() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchemaCustomer>>({
        resolver: zodResolver(formSchemaCustomer),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            gender: undefined,
            address: "",
            photo: "",
        },
    });
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchemaCustomer>) {
        setLoading(true);
        const response = await storeCustomer(values);
        toast({
            variant: "default",
            description: <Messages response={response} />,
        });
        if (response.status === "success") form.reset();
        setLoading(false);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="John Doe"
                                    {...field}
                                    autoComplete="off"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Male
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Female
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="shadcn@example.com"
                                    {...field}
                                    autoComplete="off"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="123-456-7890"
                                    {...field}
                                    autoComplete="off"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="123 Main St"
                                    {...field}
                                    autoComplete="off"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Images</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="user.jpg"
                                    {...field}
                                    autoComplete="off"
                                    type="file"
                                    className="file-input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {loading === false ? (
                    <Button disabled={loading} type="submit">
                        {loading === false ? "Save" : null}
                    </Button>
                ) : (
                    <span className="loading loading-spinner loading-md"></span>
                )}
            </form>
        </Form>
    );
}

const Messages = ({ response }: { response: any }) => {
    return (
        <div>
            <p
                className={clsx("text-lg font-medium", {
                    "text-green-500": response.status === "success",
                    "text-red-500": response.status === "error",
                })}
            >
                {response.status}
            </p>
            <p
                className={clsx("mt-1 text-sm", {
                    "text-green-500": response.status === "success",
                    "text-red-500": response.status === "error",
                })}
            >
                {response.message}
            </p>
        </div>
    );
};

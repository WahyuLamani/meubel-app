type Gender = "male" | "female";
type User = {
    id?: number;
    fullname: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};
type Customer = {
    id?: number;
    fullname: string;
    photo?: string;
    gender: Gender;
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
};

interface Responsable {
    status: "success" | "error";
    message: string | unknown;
    data?: Customer | User;
}

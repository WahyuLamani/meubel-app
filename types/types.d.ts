type Gender = "male" | "female";
type User = {
    id?: number;
    fullname: string;
    username: string;
    password: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};
type Customer = {
    id?: number;
    fullname: string;
    photo: string;
    gender: Gender;
    email: string;
    phone: string;
    address: string;
    createdAt: string;
    updatedAt: string;
};

interface Responsable {
    status: "success" | "error";
    message: string | unknown;
    data?: Customer | User;
}

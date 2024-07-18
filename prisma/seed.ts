import { timestamp, prisma } from "@/lib/utils";
const Users = [
    {
        fullname: "Jane Smith",
        username: "jane112",
        password: "jane112",
        email: "jane.mclean@examplepetstore.com",
        createdAt: timestamp(),
        updatedAt: timestamp(),
    },
    {
        fullname: "John Doe",
        username: "john123",
        password: "jhon123",
        email: "john.mckinley@examplepetstore.com",
        createdAt: timestamp(),
        updatedAt: timestamp(),
    },
];
const Customers = [
    {
        fullname: "Marry Posa",
        photo: "https://picsum.photos/200/200",
        gender: "female",
        email: "marry@marilan.com",
        phone: "081224244474",
        address: "Gunung Kidul",
        createdAt: timestamp(),
        updatedAt: timestamp(),
    },
    {
        fullname: "Fillain Darin",
        photo: "https://picsum.photos/200/200",
        gender: "male",
        email: "fillaen@malefikroar.com",
        phone: "08747741154",
        address: "Turkeyan",
        createdAt: timestamp(),
        updatedAt: timestamp(),
    },
];
async function main() {
    await prisma.customers.deleteMany();
    await prisma.users.deleteMany();
    const users = await prisma.users.createMany({
        data: Users,
    });
    const customer = await prisma.customers.createMany({
        data: Customers,
    });
    console.log({ users, customer });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

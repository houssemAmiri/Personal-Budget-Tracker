import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    console.log(`Start seeding ...`)
    await prisma.user.create({
        data: {
            email: 'admin@gmail.com',
            name: 'Admin admin',
        },
    });
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
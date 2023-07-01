import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.user.upsert({
    where: { username: 'thianhao' },
    update: {},
    create: {
      username: 'thianhao',
      email: 'th0312@gmail.com',
      phone: '+60169999999',
      skillsets: ['Angular', 'NestJs'],
      hobby: ['Basketball', 'Brewing Coffee'],
    },
  });

  const post2 = await prisma.user.upsert({
    where: { username: 'sara' },
    update: {},
    create: {
      username: 'sara',
      email: 'sara@gmail.com',
      phone: '+60179999999',
      skillsets: ['Angular', 'ASP.NET'],
      hobby: ['Yogo', ' '],
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });

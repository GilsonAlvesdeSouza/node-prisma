import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Teste1",
  //     email: "teste1@gmail.com",
  //   },
  // });
  // console.log(user);

  // const user = await prisma.user.findUnique({ where: { id: 1 } });
  // console.log(user);

  // if (user) {
  //   user.name = "Gilson Alves de Souza";
  // }

  //   const userUp = await prisma.user.update({
  //     data: { name: "Gilson Alves de Souza" },
  //     where: { id: 1 },
  //   });

  //   console.log(userUp);

  // const newPost = await prisma.post.create({
  //   data: {
  //     title: "Ifood vai parar",
  //     content: "Na cidade de João Pessoa",
  //     published: true,
  //     authorId: 1,
  //   },
  // });

  // console.log(newPost);

  // const users = await prisma.user.findMany({
  //   include: { posts: true },
  // });
  // console.log(users[3].posts[0]);
  // // console.log(users);

  // const posts = await prisma.post.findUnique({
  //   where: { id: 2 },
  //   include: { author: true },
  // });
  // console.log(posts?.author.email);

  // const users = await prisma.user.findMany({
  //   where: {
  //     OR: [{ name: { startsWith: "F" } }, { name: { startsWith: "G" } }],
  //   },
  //   orderBy: { id: "asc" },
  //   skip: 1,
  //   take: 1,
  // });
  // console.log(users);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

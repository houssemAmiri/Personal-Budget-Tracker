import { Flex, Text, Button } from "@radix-ui/themes";
import prisma from "./lib/prisma";
export default async function Home() {
  const user = await prisma.user.findMany();
  console.log(user);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      content="center"
      height="100vh"
    >
      <Text>Personal budget app</Text>
      <Button>Let&apos;s go</Button>

      <Flex>
        <Text>Users</Text>
        <Text>{JSON.stringify(user)}</Text>
      </Flex>
    </Flex>
  );
}

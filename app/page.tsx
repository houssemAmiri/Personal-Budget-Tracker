import { Flex, Text, Button } from "@radix-ui/themes";
export default function Home() {
  return (
    <Flex
      direction="column"
      gap="2"
      justify="center"
      align="center"
      content="center"
      height="100vh"
    >
      <Text>Personal budget app</Text>
      <Button>Let&apos;s go</Button>
    </Flex>
  );
}

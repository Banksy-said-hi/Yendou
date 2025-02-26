'use client';

import { Center, Button, Text } from "@chakra-ui/react";
import { useCounter } from "./CounterContext";
import { Toaster } from "@/components/ui/toaster"
import { useColorMode } from "@/components/ui/color-mode"


export default function Counter() {
  const { count, increment } = useCounter();

  return (
    <Center h="100vh" bg="purple.300">
      <Text fontSize="4xl" mr="4" color="gray.500">Current count {count}</Text>
      <Button onClick={increment} bg="gray.400" width="70px" borderRadius="xl">
        +1
      </Button>
      <Toaster />
    </Center>
  );
}

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

import React from "react";

export default function Hero() {
    return (
        <Flex
            w="100vw"
            h={"100vh"}
            backgroundImage={"url(https://livani-react.envytheme.com/_next/static/media/electronics-banner-bg.089c44cbc0fb8b4ddc11a737055181ed.jpg)"}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })} bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
                <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                    <Text color={"white"} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                    </Text>
                    <Stack direction={"row"}>
                        <Button bg={"blue.400"} rounded={"full"} color={"white"} _hover={{ bg: "blue.500" }}>
                            Show me more
                        </Button>
                        <Button bg={"whiteAlpha.300"} rounded={"full"} color={"white"} _hover={{ bg: "whiteAlpha.500" }}>
                            Show me more
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}

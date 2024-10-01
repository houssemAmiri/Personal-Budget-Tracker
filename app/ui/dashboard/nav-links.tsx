import { Box, Flex } from "@radix-ui/themes";
import React from "react";

export default function NavLink() {
    return (
        <Box width="100%">
            <Flex direction="column">
                <Box>Dashboard</Box>
                <Box>Transactions</Box>
                <Box>Categories</Box>
                <Box>Reports</Box>
            </Flex>
        </Box>
    );
}

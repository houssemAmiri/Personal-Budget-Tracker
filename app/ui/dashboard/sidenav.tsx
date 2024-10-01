import React from "react";
import NavLink from "./nav-links";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./sidenav.module.css";
import clsx from "clsx";
import { PowerIcon } from "@heroicons/react/24/outline";
export default function Sidenav() {
    return (
        <Flex direction="column" py="16px" px="12px" width="100%">
            <Link href="/">
                <Flex
                    height="80px"
                    mb="8px"
                    p="16px"
                    className={clsx(styles.logoContainer, 'bg-blue-600')}
                    direction="column"
                    justify="end"
                    align="center"
                >
                    <Text className={styles.logoText}>Floussi</Text>
                </Flex>
            </Link>

            <Flex flexGrow="1" justify="between" direction="column">
                <NavLink />
                <Box height="auto" width="100%" flexGrow="1" className="bg-gray-50" />

                <form>
                    <Button size="3" className={styles.logoutButton}>
                        <PowerIcon width="24px" />
                        <Box as="span" display="none">
                            Sign Out
                        </Box>
                    </Button>
                </form>
            </Flex>
        </Flex>
    );
}

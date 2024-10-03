"use client";
import React from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./sidenav.module.css";
import clsx from "clsx";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLink from "./nav-links";

export default function Sidenav() {
    return (
        <Flex direction="column" py="16px" px="12px" width="100%">
            <Flex
                className={clsx(styles.logoContainer, "bg-blue-600")}
                mb="8px"
                p="16px"
                justify={{
                    initial: "between",
                    xs: "between",
                    md: "center",
                }}
                align="center"
            >
                <Link href="/">
                    <Flex
                        height="80px"
                        direction="column"
                        justify={{
                            md: "end",
                            initial: "center",
                        }}
                        align="center"
                    >
                        <Text className={styles.logoText}>Floussi</Text>
                    </Flex>
                </Link>
                <form>
                    <button
                        className={`${styles.iconButton} ${styles.logoutButtonHeader}`}
                        aria-label="Logout"
                    >
                        <PowerIcon width="24px" />
                        <Box as="span" display="none">
                            Sign Out
                        </Box>
                    </button>
                </form>
            </Flex>

            <Flex
                flexGrow="1"
                direction={{ initial: "row", md: "column" }}
                justify="between"
                width="100%"
            >
                <NavLink />
                <Box
                    display={{
                        initial: "none",
                        md: "block",
                    }}
                    height="auto"
                    width="100%"
                    flexGrow="1"
                    className="bg-gray-50"
                />

                <form>
                    <Button size="3" className={styles.logoutButtonSideNav}>
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

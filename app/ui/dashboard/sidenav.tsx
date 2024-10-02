"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./sidenav.module.css";
import clsx from "clsx";
import { PowerIcon, Bars3Icon } from "@heroicons/react/24/outline";
import NavSection from "./nav-section";

export default function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

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
                <button
                    className={styles.iconButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <Bars3Icon width="24px" />
                </button>
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

                <button className={styles.iconButton} aria-label="Logout">
                    <PowerIcon width="24px" />
                </button>
            </Flex>

            {/* web version */}

            <NavSection
                display={{
                    initial: "none",
                    md: "flex",
                    xs: "none",
                }}

            />

            {/* mobile version */}
            <NavSection
                display={{
                    initial: isOpen ? "flex" : "none",
                    md: "none",
                }}
                setIsOpen={setIsOpen}
                logoutButton={false}

            />

        </Flex>
    );
}

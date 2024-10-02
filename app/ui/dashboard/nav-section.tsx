import { Box, Button, Flex } from '@radix-ui/themes'
import React from 'react'
import NavLink from './nav-links'
import { PowerIcon } from '@heroicons/react/16/solid'
import styles from "./sidenav.module.css";
import { Responsive } from '@radix-ui/themes/props';

interface NavSectionProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    display: Responsive<"none" | "inline-flex" | "flex"> | undefined;
    logoutButton?: boolean;
}

export default function NavSection({ setIsOpen, display, logoutButton = true }: NavSectionProps) {
    return (
        <Flex
            flexGrow="1"
            justify="between"
            direction="column"
            display={display}
        >
            <NavLink setIsOpen={setIsOpen} />
            <Box height="auto" width="100%" flexGrow="1" className="bg-gray-50" />
            {
                logoutButton && (
                    <form>
                        <Button size="3" className={styles.logoutButton}>
                            <PowerIcon width="24px" />
                            <Box as="span" display="none">
                                Sign Out
                            </Box>
                        </Button>
                    </form>
                )
            }

        </Flex>
    )
}

import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import {
    HomeIcon,
    BanknotesIcon,
    Cog6ToothIcon,
    ClipboardIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import navlinkStyle from "./nav-link.module.css";
import clsx from "clsx";


type LinkType = {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const links: LinkType[] = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
        name: "Transactions",
        href: "/dashboard/transactions",
        icon: BanknotesIcon,
    },
    { name: "Categories", href: "/dashboard/categories", icon: ClipboardIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
];

export default function NavLink({
    setIsOpen,
}: {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const closeNav = () => {
        if (setIsOpen) setIsOpen(false);
    };
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={clsx("bg-gray-50", navlinkStyle.link)}
                        onClick={closeNav}
                        aria-label={link.name}
                    >
                        <Flex direction="row" height="48px" align="center" p="3">
                            <LinkIcon width="24px" />
                            <Box as="span" ml="12px">
                                {link.name}
                            </Box>
                        </Flex>
                    </Link>
                );
            })}
        </>
    );
}

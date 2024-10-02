import { Flex } from '@radix-ui/themes'
import React from 'react'
import Sidenav from '../ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex height="100vh" direction={{
            initial: 'column',
            md: 'row',
            xs: 'column'
        }}>
            <Flex width={{
                initial: '100%',
                md: "220px",
            }} >
                <Sidenav />
            </Flex>
            <Flex p="24px" flexGrow="1" >{children}</Flex>
        </Flex>
    )
}

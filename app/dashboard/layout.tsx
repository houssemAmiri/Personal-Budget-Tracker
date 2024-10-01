import { Flex } from '@radix-ui/themes'
import React from 'react'
import Sidenav from '../ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Flex height="100vh">
            <Flex width="220px" style={{ borderRight: '1px solid black' }}>
                <Sidenav />
            </Flex>
            <Flex p="24px" flexGrow="1" >{children}</Flex>
        </Flex>
    )
}

import React from 'react'
import Breadcrumbs from '../ui/breadcrumbs'

export default function DashboardPage() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Home', href: '/dashboard', active: true },
                ]}
            />

            <h1>Settings page</h1>

        </main>
    )
}

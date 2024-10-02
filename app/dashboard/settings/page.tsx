import Breadcrumbs from '@/app/ui/breadcrumbs'
import React from 'react'

export default function SettingsPage() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Settings', href: '/settings', active: true },
                ]}
            />


            <h1>Settings page</h1>

        </main>
    )
}

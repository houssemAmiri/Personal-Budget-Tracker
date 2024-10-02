import Breadcrumbs from '@/app/ui/breadcrumbs'
import React from 'react'

export default function CategoriesPage() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Categories', href: '/dashboard/categories', active: true },
                ]}
            />


            <h1>Categrories page</h1>

        </main>
    )
}

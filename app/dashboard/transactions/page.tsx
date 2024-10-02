import Breadcrumbs from '@/app/ui/breadcrumbs'
import React from 'react'

export default function TransactionsPage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transactions', href: '/transactions', active: true },
        ]}
      />


      <h1>Settings page</h1>

    </main>
  )
}

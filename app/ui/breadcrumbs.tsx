import React from "react";

import Link from "next/link";
import styles from "./beadcrumbs.module.css";
import clsx from "clsx";

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}
export default function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: Breadcrumb[];
}) {

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
            <ol className={styles.breadcrumbList}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={breadcrumb.href}
                        aria-current={breadcrumb.active}
                        className={clsx(
                            breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
                        )}
                    >
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        {index < breadcrumbs.length - 1 ? (
                            <span className={styles.separator}>/</span>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav >
    );
}

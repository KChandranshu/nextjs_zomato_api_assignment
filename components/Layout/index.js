import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.scss'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Zomato API Assignment</title>
            </Head>
            <main className={styles.layout}>
                <div className={styles.head}>
                    <div className={styles.pagination__links}>
                        {Array.apply(null, Array(10)).map((page, i) => (
                            <Link href={`/restuarant/${i + 1}`} key={i}>
                                <a>{i + 1}</a>
                            </Link>
                        ))}
                    </div>
                </div>

                {props.children}
                
                <div className={styles.foot}>
                    <div className={styles.pagination__links}>
                        {Array.apply(null, Array(10)).map((page, i) => (
                            <Link href={`/restuarant/${i + 1}`} key={i}>
                                <a>{i + 1}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
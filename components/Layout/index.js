import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>Zomato API Assignment</title>
            </Head>
            <main>
                <div>
                    <ul>
                        {Array.apply(null, Array(10)).map((page, i) => (
                            <li key={i}>
                                <Link href={`/restuarant/${i + 1}`}>
                                    <a>{i + 1}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {props.children}
            </main>
        </>
    )
}
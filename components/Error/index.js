import React from 'react'
import styles from './Error.module.scss'

export default function Error({name, message}){
    return(
        <div className={styles.error}>
            <p>Oops! Something went wrong!</p>
            <p>{name}: {message}</p>
        </div>
    )
}
import React from 'react'
import styles from './Restuarant.module.scss'
import StarRatings from 'react-star-ratings'

export default function Restuarant({
    name,
    thumbnail,
    location,
    establishment,
    cuisines,
    avgRating,
    totalVotes,
    costForTwo,
    url
}) {
    return (
        <section className={styles.restuarant__card}>
            <div className={styles.restuarant__card__image}>
                <img src={thumbnail} alt="Restuarant Image" height="100" width="100" />
            </div>
            <div className={styles.restuarant__card__info}>
                <p className={styles.restuarant__name}>{name}</p>
                <p className={styles.restuarant__location}>{location}</p>
                <p className={styles.restuarant__type}>{establishment} - {cuisines}</p>
                <div className={styles.restuarant__ratings__avgerage_cost}>
                    <div className={styles.restuarant__rating}>
                        <StarRatings
                            rating={Number(avgRating)}
                            starRatedColor="#000"
                            starEmptyColor="#fff"
                            starDimension="1rem"
                            starSpacing="0.1rem"
                        />

                        &nbsp;

                        <span className={styles.ratings}>
                            {avgRating}
                        </span>

                        &nbsp;

                        <span className={styles.votes}>
                            ({totalVotes})
                        </span>
                    </div>
                    <p className={styles.restuarant__average_cost}>
                        ₹{costForTwo} for two (approx)
                    </p>
                </div>
            </div>
        </section>
    )
}
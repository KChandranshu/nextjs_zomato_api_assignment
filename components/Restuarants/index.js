import React from 'react'
import Restuarant from './Restuarant'
import styles from './Restuarants.module.scss'

export default function Restuarants({restaurants}){
    return (
        <section className={styles.restaurants__section}>
            {restaurants.map(restaurant => {
                return <Restuarant 
                    key={restaurant.id}
                    name={restaurant.name} 
                    thumbnail={restaurant.thumb}
                    location={restaurant.location.locality_verbose}
                    establishment={restaurant.establishment}
                    cuisines={restaurant.cuisines}
                    avgRating={restaurant.user_rating.aggregate_rating}
                    totalVotes={restaurant.user_rating.votes}
                    costForTwo={restaurant.average_cost_for_two}
                    url={restaurant.url} />
            })}
        </section>
    )
}
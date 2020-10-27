import React from 'react'
import axios from 'axios'
import Restuarants from '../../components/Restuarants'

const API_KEY = process.env.ZOMATO_API_KEY || '61719ef6704725e47dce801dfe14f441'

axios.interceptors.request.use(config => {
    config.headers['user-key'] = API_KEY
    return config
})

const urlGenerator = id => {
    const start = (Number(id) - 1) * 10
    return `https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&start=${start}&count=10&collection_id=274852`
}

const fetchRestaurants = async (url) => await axios.get(url).then(res => res.data).catch(err => console.log(err.message))

export default function Restuarant(props) {
    const restaurants = Object.values(props)
    return (
        <>
            <Restuarants restaurants={restaurants} />
        </>
    )
}

export async function getStaticPaths() {
    const paths = Array.apply(null, Array(10)).map((path, i) => ({ params: { id: `${i + 1}` } }))
    return { paths, fallback: false };
}

export async function getStaticProps({params}) {
    // console.log(context)
    const data = await fetchRestaurants(urlGenerator(params.id))
    const restaurants = data ? data.restaurants.map(res => res.restaurant) : {}
    return {
        props: { ...restaurants }
    }
}
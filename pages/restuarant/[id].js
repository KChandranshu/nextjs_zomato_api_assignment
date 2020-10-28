import React from 'react'
import axios from 'axios'
import Restuarants from '../../components/Restuarants'
import Error from '../../components/Error'

const API_KEY = process.env.ZOMATO_API_KEY || '61719ef6704725e47dce801dfe14f441'

axios.interceptors.request.use(config => {
    config.headers['user-key'] = API_KEY
    return config
})

const urlGenerator = id => {
    const start = (Number(id) - 1) * 10
    return `https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&start=${start}&count=10&collection_id=274852`
}

const fetchRestaurants = async (url) => await
    axios.get(url)
        .then(res => ({
            error: false,
            data: res.data
        }))
        .catch(error => ({
            error: JSON.stringify(error),
            res: null
        }))

export default function Restuarant({ data, error }) {
    if (error) {
        return <Error name={JSON.parse(error).name}  message={JSON.parse(error).message}/>
    }

    const restaurants = Object.values(data.restaurants.map(res => res.restaurant))
    return <Restuarants restaurants={restaurants} />
}

export async function getStaticPaths() {
    const paths = Array.apply(null, Array(10)).map((path, i) => ({ params: { id: `${i + 1}` } }))
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = await fetchRestaurants(urlGenerator(params.id))
    return {
        props: data
    }
}
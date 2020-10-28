import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/restuarant/1')
  }, [])

  return <div style={{height:'100vh'}}></div>
}
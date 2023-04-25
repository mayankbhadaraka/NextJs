import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')
        },300)
    },[])
  return (
    <div className='not-found'>
      <h1>Oooops...</h1>
      <h2>That page not found.</h2>
      <p>Go Back to Home Page <Link href='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound

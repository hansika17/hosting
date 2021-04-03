import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(1)
      router.push('/app')

    }, 3000)

  },[])
  return ( 
    <div className="not_found">

       <h1>Oooops...</h1>
       <h1>The page can not be found</h1>
       <p>Go back to the
         <Link href="/" ><a>Homepage</a></Link>
       </p>

  </div>

  );
}
 
export default NotFound;
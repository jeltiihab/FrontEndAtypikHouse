import React, { useContext } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
  let {user} = useContext(AuthContext)
  const authenticated = false;
  return (
    <Link>
      {!user ? router.push('/login') : children }
    </Link>
  )
}

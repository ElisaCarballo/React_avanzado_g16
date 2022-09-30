import { getSingerUser } from '@/services/userServices'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/authcontext'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const { userData, setUserData } = useState({})

  useEffect(() => {
    const FetchUserData = async () => {
      try {
        const result = await getSingerUser(user)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ' + error.message)
      }
    }
    FetchUserData()
  }, [])

  return (
    <div>
      <h1>Dashboard </h1>
      {
        user?.role === 'ADMIN'
          ? <h2>Hola Admin </h2>
          : <h2>Hola Customer</h2>
      }
    </div>
  )
}

export default Dashboard

"use client"

import React, { useEffect } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
function Dashboard() {
  const {status} = useSession();
  const router = useRouter()

  useEffect(() => {
    if(status !== "authenticated"){
      router.replace("/login")
    }
  },[status])


  return (
    <div className='rtl'>داشبورد</div>
  )
}

export default Dashboard

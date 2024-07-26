'use client'

import { userState } from '@/app/recoil/atoms'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function updatedUserPage() {

    const user = useRecoilValue(userState)

  return (
    <div>
        <h1>Updated User Page</h1>
        <div>Updated User Name : {user.name}</div>
        <div>Updated User Email : {user.email}</div>
    </div>
  )
}

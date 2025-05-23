import Signin from '@/components/shared/Signin'
import React from 'react'

export default function UserSigninPage() {
  return (
    <div className="w-full h-screen bg-[url('/header/header.png')] p-2 overflow-y-auto scrollbar-hide">
        <Signin validationType='user' />
    </div>
  )
}

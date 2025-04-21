import Logo from '@/components/base/Logo'
import React from 'react'

export default function brandsPage() {
  return (
    <div className='h-full w-full'>
        <header dir='ltr' className="bg-[url('/header/header.png')] bg-cover bg-center h-20 w-ful pt-3 pl-2">
          <Logo />
        </header>
    </div>
  )
}

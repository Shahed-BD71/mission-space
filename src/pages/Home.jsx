import React from 'react'
import Rocket from '../components/Home'
import GlobalLayout from '../components/layouts/GlobalLayout'

export default function Home() {
  return (
    <main>
        <GlobalLayout>
            <Rocket/>
        </GlobalLayout>
    </main>
  )
}

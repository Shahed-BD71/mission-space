import React from 'react'
import RocketList from '../components/Home'
import GlobalLayout from '../components/layouts/GlobalLayout'

export default function Home() {
  return (
    <main>
        <GlobalLayout>
            <RocketList/>
        </GlobalLayout>
    </main>
  )
}

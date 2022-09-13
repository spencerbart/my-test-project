import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react"
import Button from '../components/Button'

const Home: NextPage = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        Button with count {count}
      </button>
      <Button />

    </div>
  )
}

export default Home

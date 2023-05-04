import Image from 'next/image'
import styles from './page.module.css'
import dobraz from '../public/dobraz.png'

export default function Home() {
  return (
    <main style={{marginTop: '10em'}}>
      <Image src={dobraz}></Image>
    </main>
  )
}

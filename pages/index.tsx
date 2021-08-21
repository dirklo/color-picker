import type { NextPage } from 'next'
import Palette from '../components/Palette'
import seedPalettes from '../seedPalettes'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Palette palette={seedPalettes[4]} />
    </div>
  )
}

export default Home

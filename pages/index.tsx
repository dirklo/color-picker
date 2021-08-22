import type { NextPage } from 'next'
import Palette from '../components/Palette'
import seedPalettes from '../seedPalettes'
import styles from '../styles/Home.module.css'
import generatePalette from '../helpers/colorHelpers'

const Home: NextPage = () => {
  console.log(generatePalette(seedPalettes[5]))
  return (
    <div className={styles.container}>
      <Palette palette={seedPalettes[5]} />
    </div>
  )
}

export default Home

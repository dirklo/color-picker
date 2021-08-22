import type { NextPage } from 'next'
import Palette from '../components/Palette'
import seedPalettes from '../seedPalettes'
import styles from '../styles/Home.module.css'
import generatePalette from '../helpers/colorHelpers'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Palette palette={generatePalette(seedPalettes[5])} />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import seedPalettes from '../seedPalettes'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import PaletteList from '../components/PaletteList'

const Home: NextPage = () => {
    return (
      <div>
          <PaletteList palettes={seedPalettes}/>
      </div>
  )
}

export default Home
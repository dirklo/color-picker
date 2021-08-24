import type { NextPage } from 'next'
import seedPalettes from '../seedPalettes'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
        <ul>
            {seedPalettes.map((palette) => 
                <li key={palette.id}>
                    <Link href={`/palettes/${palette.id}`}>{palette.paletteName}</Link>
                </li>
            )}
        </ul>
    </div>
)
}

export default Home
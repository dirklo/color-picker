import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import MiniPalette from './MiniPalette'
import styles from '../styles/PaletteList.module.scss'
import Link from 'next/link'

type PaletteListProps = {
    palettes: IsPalette[];
}

const PaletteList: FC<PaletteListProps> = ({ palettes }): JSX.Element => {
    return (
        <div className={styles.palette_list}>
            <div
                className={styles.container}
            >
                <nav
                    className={styles.nav}
                >
                    <h2>React Colors</h2>
                </nav>
                <div
                    className={styles.palettes}
                    >
                    {palettes.map(palette => 
                        <Link href={`/palettes/${palette.id}`} key={palette.id} passHref>
                            <a>
                                <MiniPalette 
                                    palette={palette}
                                    />
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </div>  
    )
}

export default PaletteList
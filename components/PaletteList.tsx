import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import MiniPalette from './MiniPalette'
import styles from '../styles/PaletteList.module.scss'

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
            </div>
            <div
                className={styles.palettes}
            >
                {palettes.map(palette => 
                    <MiniPalette palette={palette} key={palette.id}/>
                )}
            </div>
        </div>  
    )
}

export default PaletteList
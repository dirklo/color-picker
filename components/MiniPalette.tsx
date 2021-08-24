import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import styles from '../styles/MiniPalette.module.scss'

type MiniPaletteProps = {
    palette: IsPalette;
}

const MiniPalette: FC<MiniPaletteProps> = ({ palette }) => {
    return (
        <div className={styles.mini_palette}>
            <div 
                className={styles.colors}
            ></div>
            <h5
                className={styles.title}
            >
                {palette.paletteName} <span className={styles.emoji}>{palette.emoji}</span>
            </h5>
        </div>
    )
}

export default MiniPalette

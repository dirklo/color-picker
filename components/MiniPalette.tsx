import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import styles from '../styles/MiniPalette.module.scss'
import { Divider } from '@material-ui/core'

type MiniPaletteProps = {
    palette: IsPalette;
}

const MiniPalette: FC<MiniPaletteProps> = ({ palette }) => {

    const miniColorBoxes = palette.colors.map(color => 
        <div 
            style={{ backgroundColor: color.color }}
            className={styles.mini_color} 
            key={color.name}
        />)
    
    return (
        <div className={styles.mini_palette}>
            <div 
                className={styles.colors}
            >
                {miniColorBoxes}
            </div>
            <h5
                className={styles.title}
            >
                {palette.paletteName} <span className={styles.emoji}>{palette.emoji}</span>
            </h5>
        </div>
    )
}

export default MiniPalette

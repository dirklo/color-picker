import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import styles from '../styles/MiniPalette.module.scss'
import { useRouter } from 'next/router'

type MiniPaletteProps = {
    palette: IsPalette;
}

const MiniPalette: FC<MiniPaletteProps> = ({ palette }): JSX.Element => {

    const miniColorBoxes = palette.colors.map(color => 
        <div 
            style={{ backgroundColor: color.color }}
            className={styles.mini_color} 
            key={color.name}
        />
    )

    const router = useRouter();
    
    const handleClick = (e: React.MouseEvent) => {
        router.push(`/palettes/${palette.id}`)
    }
    
    return (
        <div 
            className={styles.mini_palette}
            onClick={(e: React.MouseEvent) => handleClick(e)}
        >
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

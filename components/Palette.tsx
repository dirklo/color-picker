import type { FC } from 'react'
import React from 'react'
import styles from '../styles/Palette.module.css'
import ColorBox from './ColorBox'
import IsPalette from './IsPalette'

interface PaletteProps {
    palette: IsPalette
}

const Palette: FC<PaletteProps> = ({ palette }): JSX.Element => { 
    return (
        <div className={styles.Palette}>
            <div className={styles.Palette_colors}>
                {palette.colors.map((color, i) => 
                    <ColorBox key={i} color={color}/>
                )}
            </div>
        </div>
    )
}

export default Palette

import type { FC } from 'react'
import React, { useState } from 'react'
import styles from '../styles/Palette.module.css'
import ColorBox from './ColorBox'
import IsChromaPalette from './IsChromaPalette'
import NavBar from './NavBar'

interface PaletteProps {
    palette: IsChromaPalette
}

const Palette: FC<PaletteProps> = ({ palette }): JSX.Element => { 

    const [ level, setLevel ] = useState(500)

    const colorBoxes = palette.colors[level].map((color, i) => 
        <ColorBox key={i} color={{name: color.name, color: color.hex}} />
    )
    
    return (
        <div className={styles.Palette}>
            <NavBar level={level} setLevel={setLevel} />
            <div className={styles.Palette_colors}>
                {colorBoxes}
            </div>
        </div>
    )
}

export default Palette

import type { ChangeEvent, FC } from 'react'
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
    const [ format, setFormat ] = useState('hex')

    const colorBoxes = palette.colors[level].map((color, i) => 
        <ColorBox key={i} color={color} format={format} />
    )
    
    const changeFormat = (event: ChangeEvent<{ value: unknown }>): void => {
        const target = event.target as HTMLSelectElement
        setFormat(target.value)
    }

    return (
        <div className={styles.Palette}>
            <NavBar 
                level={level} 
                setLevel={setLevel}
                handleChange={changeFormat}
                format={format}
            />
            <div className={styles.Palette_colors}>
                {colorBoxes}
            </div>
            <footer className={styles.palette_footer}>
                <span>{palette.paletteName}</span>
                <span className={styles.emoji}>{palette.emoji}</span>
            </footer>
        </div>
    )
}

export default Palette

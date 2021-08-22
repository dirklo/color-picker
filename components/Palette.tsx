import type { FC } from 'react'
import React, { useState } from 'react'
import styles from '../styles/Palette.module.css'
import ColorBox from './ColorBox'
import IsChromaPalette from './IsChromaPalette'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PaletteProps {
    palette: IsChromaPalette
}

const Palette: FC<PaletteProps> = ({ palette }): JSX.Element => { 

    const [ level, setLevel ] = useState(500)

    const colorBoxes = palette.colors[level].map((color, i) => 
        <ColorBox key={i} color={{name: color.name, color: color.hex}} />
    )
    
    console.log('rerendering');
    return (
        <div className={styles.Palette}>
            <Slider 
                defaultValue={level} 
                min={100}
                max={900}
                step={100}
                onAfterChange={(value: number) => setLevel(value)}
            />
            <div className={styles.Palette_colors}>
                {colorBoxes}
            </div>
        </div>
    )
}

export default Palette

import type { ChangeEvent, FC } from 'react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Palette.module.css'
import ColorBox from '../../components/ColorBox'
import IsChromaPalette from '../../components/IsChromaPalette'
import NavBar from '../../components/NavBar'
import seedPalettes from '../../seedPalettes'
import generatePalette from '../../helpers/colorHelpers'
import IsPalette from '../../components/IsPalette'

type PaletteProps = {
    palette: IsChromaPalette;
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

export function getServerSideProps(context: any) {
    const slug = context.query.slug
    const palette = seedPalettes.filter(palette => palette.id === slug)[0]
    const chromaPalette = generatePalette(palette)

    return { props: { palette: chromaPalette }  }
}

export default Palette

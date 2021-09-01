import type { ChangeEvent, FC } from 'react'
import React, { useState } from 'react'
import styles from '../../styles/Palette.module.scss'
import ColorBox from '../../components/ColorBox'
import IsChromaPalette from '../../components/IsChromaPalette'
import NavBar from '../../components/NavBar'
import seedPalettes from '../../seedPalettes'
import generatePalette from '../../helpers/colorHelpers'
import PaletteFooter from '../../components/PaletteFooter'

type PaletteProps = {
    palette: IsChromaPalette;
}

const Palette: FC<PaletteProps> = ({ palette }): JSX.Element => { 
    const [ level, setLevel ] = useState(500)
    const [ format, setFormat ] = useState('hex')

    const colorBoxes = palette.colors[level].map((color, i) => 
        <ColorBox key={i} color={color} format={format} singleColor={false} />
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
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
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

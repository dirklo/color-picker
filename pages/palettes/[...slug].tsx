import type { ChangeEvent, FC } from 'react'
import React, { useState } from 'react'
import styles from '../../styles/SinglePalette.module.scss'
import seedPalettes from '../../seedPalettes'
import { generateSinglePalette } from '../../helpers/colorHelpers'
import isSinglePalette from '../../components/IsSinglePalette'
import SingleNavBar from '../../components/SingleNavBar'
import ColorBox from '../../components/ColorBox'

type SinglePaletteProps = {
    palette: isSinglePalette;
}

const SinglePalette: FC<SinglePaletteProps> = ({ palette }): JSX.Element => {

    const [ format, setFormat ] = useState('hex')

    const colorBoxes = palette.shades.map((shade, i) => 
        <ColorBox key={i} color={shade} format={format} singleColor={false}/>
    )
    
    const changeFormat = (event: ChangeEvent<{ value: unknown }>): void => {
        const target = event.target as HTMLSelectElement
        setFormat(target.value)
    }
    return (
        <div className={styles.single_palette}>
            <SingleNavBar handleChange={changeFormat} format={format}/>
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
    const slug: string = context.query.slug[0]
    const palette = seedPalettes.filter(palette => palette.id === slug)[0]
    const singlePalette = generateSinglePalette(palette, context.query.slug[1])
    return { props: { palette: singlePalette }  }
}

export default SinglePalette
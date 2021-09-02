import type { ChangeEvent, FC } from 'react'
import React, { useState } from 'react'
import styles from '../../styles/SinglePalette.module.scss'
import seedPalettes from '../../seedPalettes'
import { generateSinglePalette } from '../../helpers/colorHelpers'
import isSinglePalette from '../../types/IsSinglePalette'
import SingleNavBar from '../../components/SingleNavBar'
import ColorBox from '../../components/ColorBox'
import PaletteFooter from '../../components/PaletteFooter'
import { useRouter } from 'next/router'

type SinglePaletteProps = {
    palette: isSinglePalette;
}

const SinglePalette: FC<SinglePaletteProps> = ({ palette }): JSX.Element => {

    const router = useRouter()

    const [ format, setFormat ] = useState('hex')

    const colorBoxes = palette.shades.slice(1).map((shade, i) => 
        <ColorBox key={i} color={shade} format={format} singleColor={true}/>
    )
    
    const changeFormat = (event: ChangeEvent<{ value: unknown }>): void => {
        const target = event.target as HTMLSelectElement
        setFormat(target.value)
    }
    return (
        <div className={styles.single_palette}>
            <SingleNavBar 
                handleChange={changeFormat} 
                format={format}
            />
            <div className={styles.palette_colors}>
                {colorBoxes}
                <div 
                    className={styles.back_div}
                >
                    <button className={styles.back_button} onClick={() => {
                        router.back()
                    }}>
                        GO BACK
                    </button>
                </div>
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
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
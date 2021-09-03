import type { FC } from 'react'
import React from 'react'
import IsPalette from '../types/IsPalette'
import MiniPalette from './MiniPalette'
import styles from '../styles/PaletteList.module.scss'
import { useRouter } from 'next/router'

type PaletteListProps = {
    palettes: IsPalette[];
}

const PaletteList: FC<PaletteListProps> = ({ palettes }): JSX.Element => {

    const router = useRouter()

    return (
        <div className={styles.palette_list}>
            <div
                className={styles.container}
            >
                <nav
                    className={styles.nav}
                >
                    <h2>React Colors</h2>
                    <button 
                        className={styles.new_palette_button}
                        onClick={(e: React.MouseEvent): void => {
                            e.preventDefault()
                            router.push('/palettes/new')
                        }}
                    >
                        Create Palette
                    </button>
                </nav>
                <div
                    className={styles.palettes}
                    >
                    {palettes.map((palette: IsPalette) => 
                        <MiniPalette 
                            palette={palette}
                            key={palette.id}
                        />    
                    )}
                </div>
            </div>
        </div>  
    )
}

export default PaletteList
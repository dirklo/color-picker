import type { FC } from 'react' 
import React from 'react'
import styles from '../styles/PaletteFooter.module.scss'

type PaletteFooterProps = {
    paletteName: string;
    emoji: string;
}

const PaletteFooter: FC<PaletteFooterProps> = ({ paletteName, emoji}): JSX.Element => {
    return (
        <footer className={styles.palette_footer}>
            <span>{paletteName}</span>
            <span className={styles.emoji}>{emoji}</span>
        </footer>
    )
}

export default PaletteFooter

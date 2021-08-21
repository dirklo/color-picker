import type { FC } from 'react'
import React from 'react'
import styles from '../styles/ColorBox.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface ColorBoxProps {
    color: {name: string; color: string}
}

const ColorBox: FC<ColorBoxProps> = ({ color }) => {
    return (
        <CopyToClipboard 
            text={color.color}
        >
            <div style={{ background: color.color }} className={styles.ColorBox}>
                <div className={styles.copy_container}>

                </div>
                <div className={styles.box_content}>
                    <span>{color.name}</span>
                </div>
                <button className={styles.copy_button}>
                    Copy
                </button>
                <span className={styles.see_more}>More</span>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox

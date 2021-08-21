import type { FC } from 'react'
import React from 'react'
import styles from '../styles/ColorBox.module.css'

interface ColorBoxProps {
    color: {name: string; color: string}
}

const ColorBox: FC<ColorBoxProps> = ({ color }) => {
    return (
        <div style={{ background: color.color }} className={styles.ColorBox}>
            <span>{color.name}</span>
            <br />
            <span>MORE...</span>
        </div>
    )
}

export default ColorBox

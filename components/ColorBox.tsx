import type { FC } from 'react'
import React, {  useState, useEffect } from 'react'
import styles from '../styles/ColorBox.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface ColorBoxProps {
    color: {name: string; color: string}
}

const ColorBox: FC<ColorBoxProps> = ({ color }) => {
    const [ copied, setCopied ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }, [copied])

    const showClass: string = copied ? styles.show : '' 

    return (
        <CopyToClipboard 
            text={color.color}
            onCopy={() => setCopied(true)}
        >
            <div style={{ background: color.color }} className={styles.ColorBox}>
                <div 
                    style={{ background: color.color }} 
                    className={`${styles.copy_overlay} ${showClass}`}
                />
                <div
                    className={`${styles.copy_msg} ${showClass}`}
                >
                    <h1>Copied!</h1>
                    <p>{color.color}</p>
                </div>
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

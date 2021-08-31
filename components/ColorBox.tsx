import type { FC } from 'react'
import React, {  useState, useEffect } from 'react'
import styles from '../styles/ColorBox.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import IsChromaColor from './IsChromaColor'
import { useRouter } from 'next/router'

interface ColorBoxProps {
    color: IsChromaColor;
    format: string;
    singleColor: boolean;
}

const ColorBox: FC<ColorBoxProps> = ({ color, format, singleColor }) => {

    const [ copied, setCopied ] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }, [copied])

    const showClass: string = copied ? styles.show : '' 
    const singleClass: string = singleColor ? styles.single : ''

    const setFormat = () => {
        switch (format) {
            case 'hex':
                return color.hex
            case 'rgb':
                return color.rgb
            case 'rgba':
                return color.rgba
        }
    }

    return (
        <CopyToClipboard 
            text={color.hex}
            onCopy={() => setCopied(true)}
        >
            <div style={{ background: setFormat()}} className={`${styles.color_box} ${singleClass}`}>
                <div 
                    style={{ background: setFormat() }} 
                    className={`${styles.copy_overlay} ${showClass}`}
                />
                <div
                    className={`${styles.copy_msg} ${showClass}`}
                >
                    <h1>Copied!</h1>
                    <p>{setFormat()}</p>
                </div>
                <div className={styles.copy_container}>

                </div>
                <div className={styles.box_content}>
                    <span>{color.name}</span>
                </div>
                <button className={styles.copy_button}>
                    Copy
                </button>

                {!singleColor && 
                    <span 
                        className={styles.see_more}
                        onClick={() => router.push(`${router.asPath}/${color.id}`)}
                    >
                        More
                    </span>
                }
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox

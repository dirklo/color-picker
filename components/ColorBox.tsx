import type { FC } from 'react'
import React, {  useState, useEffect } from 'react'
import styles from '../styles/ColorBox.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import IsChromaColor from './IsChromaColor'
import { useRouter } from 'next/router'
import chroma from 'chroma-js'
import { lighten } from '@material-ui/core'

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

    const setFormat = (): string => {
        switch (format) {
            case 'hex':
                return color.hex
            case 'rgb':
                return color.rgb
            case 'rgba':
                return color.rgba
            default:
                return color.hex
        }
    }

    const showClass: string = copied ? styles.show : '' 
    const singleClass: string = singleColor ? styles.single : ''
    const isDarkColor: boolean = chroma(setFormat()).luminance() <= 0.2
    const isLightColor: boolean = chroma(setFormat()).luminance() >= 0.7
    const darkTextClass: string = isDarkColor ? styles.light_text : styles.dark_text
    const lightTextClass: string = isLightColor ? styles.dark_text : styles.light_text

    return (
        <CopyToClipboard 
            text={setFormat()}
            onCopy={() => setCopied(true)}
        >
            <div style={{ background: setFormat() }} className={`${styles.color_box} ${singleClass}`}>
                <div 
                    style={{ background: setFormat() }} 
                    className={`${styles.copy_overlay} ${showClass}`}
                />
                <div
                    className={`${styles.copy_msg} ${showClass}`}
                >
                    <h1 className={darkTextClass}>Copied!</h1>
                    <p className={`${styles.copy_text} ${darkTextClass}`}>{setFormat()}</p>
                </div>
                <div className={styles.copy_container}>

                </div>
                <div className={styles.box_content}>
                    <span className={`${styles.color_name} ${darkTextClass}`}>{color.name}</span>
                </div>
                <button className={`${styles.copy_button} ${darkTextClass}`}>
                    Copy
                </button>

                {!singleColor && 
                    <span 
                        className={`${styles.see_more} ${lightTextClass}`}
                        onClick={(e: React.MouseEvent): void => {
                            e.stopPropagation()
                            router.push(`${router.asPath}/${color.id}`)
                        }}
                    >
                        More
                    </span>
                }
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox

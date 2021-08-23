import type { ChangeEvent, FC } from 'react' 
import React, { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import IsChromaPalette from './IsChromaPalette';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface NavBarProps {
    level: number;
    setLevel: Function;
    handleChange: Function;
    format: string;
}

const NavBar: FC<NavBarProps> = ({ level, setLevel, handleChange, format }): JSX.Element => {
    return (
        <div className={styles.nav_bar}>
            <div
                className={styles.logo}
            >
                <a href="#">reactcolorpicker</a>
            </div>
            <div
                className={styles.slider_container}
            >
                <span>Level: {level}</span>
                <div
                    className={styles.slider}
                >
                    <Slider 
                        defaultValue={level} 
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={(value: number) => setLevel(value)}
                    />
                </div>
            </div>
            <div
                className={styles.select_container}
            >
                <Select onChange={(event: ChangeEvent<{ value: unknown }>): void => handleChange(event)} value={format}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0)</MenuItem>
                </Select>
            </div>
        </div>
    )
}

export default NavBar

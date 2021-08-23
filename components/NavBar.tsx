import type { FC } from 'react' 
import React from 'react'
import styles from '../styles/NavBar.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface NavBarProps {
    level: number;
    setLevel: Function;
}

const NavBar: FC<NavBarProps> = ({ level, setLevel }): JSX.Element => {
    return (
        <div className={styles.nav_bar}>
            <div
                className={styles.logo}
            >
                <a href="#">reactcolorpicker</a>
            </div>
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
    )
}

export default NavBar

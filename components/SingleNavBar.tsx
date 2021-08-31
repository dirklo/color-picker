import type { ChangeEvent, FC } from 'react' 
import React, { useState } from 'react'
import styles from '../styles/NavBar.module.scss'
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link'


interface SingleNavBarProps {
    handleChange: Function;
    format: string;
}

const NavBar: FC<SingleNavBarProps> = ({ handleChange, format }): JSX.Element => {

    const [ open, setOpen ] = useState(false)

    const handleFormatChange = (event: ChangeEvent<{ value: unknown} >): void => {
        handleChange(event)
        setOpen(true)
    }

    return (
        <header className={styles.nav_bar}>
            <div
                className={styles.logo}
            >
                <Link href="/">reactcolorpicker</Link>
            </div>
            <div
                className={styles.slider_container}
            >
                <div
                    className={styles.slider}
                >
                </div>
            </div>
            <div
                className={styles.select_container}
            >
                <Select onChange={(event: ChangeEvent<{ value: unknown }>): void => handleFormatChange(event)} value={format}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                onClose={() => setOpen(false)} 
                open={open}
                autoHideDuration={3000}
                message={<span id={styles.message_id}>Format Changed To {format.toUpperCase()}</span>}
                ContentProps={{
                    'aria-describedby': 'message_id'
                }}
                action={[
                    <IconButton 
                        key='close' 
                        onClick={() => setOpen(false)}
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default NavBar

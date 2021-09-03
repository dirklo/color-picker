import type { FC } from 'react'
import React from 'react'
import NewPaletteForm from '../../components/NewPaletteForm'
import styles from '../../styles/NewPalette.module.scss'

const NewPalette: FC = (): JSX.Element => {
    return (
        <div className={styles.new_palette}>
            I AM NEW PALETTE PAGE
            <NewPaletteForm />
        </div>
    )
}

export default NewPalette
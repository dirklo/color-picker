import type { FC } from 'react'
import React from 'react'
import NewPaletteForm from '../../components/NewPaletteForm'
import styles from '../../styles/NewPalette.module.scss'
import { useRouter } from 'next/router'

const NewPalette: FC = (): JSX.Element => {
    const router = useRouter()

    return (
        <div className={styles.new_palette}>
            I AM NEW PALETTE PAGE
            <button onClick={(e: React.MouseEvent): void => {
                e.preventDefault()
                router.push('/')
            }}>
                Palette List
            </button>
            <NewPaletteForm />
        </div>
    )
}

export default NewPalette
import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'

interface PaletteProps {
    palette: IsPalette
}

const Palette: FC<PaletteProps> = ({ palette }): JSX.Element => { 
    return (
        <div className='Palette'>
            <div className='Palette-colors'>

            </div>
        </div>
    )
}

export default Palette

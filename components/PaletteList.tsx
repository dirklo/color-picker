import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import MiniPalette from './MiniPalette'

type PaletteListProps = {
    palettes: IsPalette[];
}

const PaletteList: FC<PaletteListProps> = ({ palettes }): JSX.Element => {
    return (
        <div className='palette_list'>
            {palettes.map(palette => 
                <MiniPalette palette={palette} key={palette.id}/>
            )}
        </div>  
    )
}

export default PaletteList
import React from 'react'
import seedPalettes from '../seedPalettes'
import IsPalette from './IsPalette'

const Palette = (palette: IsPalette) => { 
    return (
        <div>
            {palette.paletteName}
        </div>
    )
}

export default Palette

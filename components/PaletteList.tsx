import type { FC } from 'react'
import React from 'react'
import IsPalette from './IsPalette'
import Link from 'next/link'

type PaletteListProps = {
    palettes: IsPalette[];
}

const PaletteList: FC<PaletteListProps> = ({ palettes }): JSX.Element => {
    return (
        <div className='palette_list'>
            {palettes.map(palette => 
                <p key={palette.id}>
                    <Link href={`/palettes/${palette.id}`}>
                        {palette.paletteName}
                    </Link>
                    
                </p>
            )}
        </div>  
    )
}

export default PaletteList
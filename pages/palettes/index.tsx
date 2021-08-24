import type { FC } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import seedPalettes from '../../seedPalettes'

const Palettes: FC = (): JSX.Element => {
    
    const router = useRouter()
    
    return (
        <div>
            <ul>
                {seedPalettes.map((palette) => 
                    <li key={palette.id}>
                        <Link href={`/palettes/${palette.id}`}>{palette.paletteName}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Palettes

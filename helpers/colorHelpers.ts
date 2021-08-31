import chroma from 'chroma-js'
import IsChromaPalette from '../components/IsChromaPalette';
import IsPalette from '../components/IsPalette'
import IsSinglePalette from '../components/IsSinglePalette';

const levels: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

interface newPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: {[key: number]: any}
}

function generatePalette(starterPalette: IsPalette): IsChromaPalette {
    let newPalette: newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    for (let level of levels) {
        newPalette.colors[level] = []
    }
    for (let color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse()
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: createColorId(color.name),
                hex: scale[i],
                rgb: chroma(scale[i]).css(), 
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)') 
            })
        }
    }
    return newPalette
}

export function generateSinglePalette(starterPalette: IsPalette, matchColorId: string): IsSinglePalette {
    const matchedColor = starterPalette.colors.filter((color) => createColorId(color.name) === matchColorId)[0]

    const singlePalette: IsSinglePalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colorId: matchColorId,
        shades: []
    }

    let scale = generateScale(matchedColor.color, 10).reverse()
        for (let i in scale) {
            singlePalette.shades.push({
                name: `${matchedColor.name} ${levels[i]}`,
                id: createColorId(matchedColor.name),
                hex: scale[i],
                rgb: chroma(scale[i]).css(), 
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)') 
            })
        }

    return singlePalette
}

function createColorId(colorName: string): string {
    return colorName.toLowerCase().replace(/ /g, '-')
}

function getRange(hexColor: string) : [string, string, string] {
    const end: string = 'fff';
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ];
}

function generateScale(hexColor: string, numberOfColors: number) {
    return chroma
        .scale(getRange(hexColor))
        .mode('lab')
        .colors(numberOfColors);
}

export default generatePalette
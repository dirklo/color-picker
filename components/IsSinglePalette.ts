import IsChromaColor from './IsChromaColor'

interface IsSinglePalette {
    paletteName: string;
    id: string;
    emoji: string;
    colorName: string;
    shades: IsChromaColor[];
}

export default IsSinglePalette
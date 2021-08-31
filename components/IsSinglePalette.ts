import IsChromaColor from './IsChromaColor'

interface IsSinglePalette {
    paletteName: string;
    id: string;
    emoji: string;
    colorId: string;
    shades: IsChromaColor[];
}

export default IsSinglePalette
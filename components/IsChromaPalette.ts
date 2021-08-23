import IsChromaColor from './IsChromaColor'

interface IsChromaPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: {
        [key: number]: IsChromaColor[]
    }
}

export default IsChromaPalette
interface IsChromaPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: {
        [key: number]: 
        { 
            name: string;
            id: string;
            hex: string;
            rgb: string;
            rgba: string;
        }
    }
}

export default IsChromaPalette
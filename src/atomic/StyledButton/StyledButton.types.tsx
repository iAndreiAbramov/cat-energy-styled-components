export enum ColorType {
    Green = 'Green',
    Gray = 'Gray',
}

export enum ButtonBgColor {
    BasicGreen = '#68b738',
    BasicGreenHovered = '#5eaa2f',
    BasicGreenPressed = '#5eaa2f',
    BasicGray = '#f2f2f2',
    BasicGrayHovered = '#ebebeb',
    BasicGrayPressed = '#ebebeb',
}

export enum ButtonTextColor {
    BasicWhite = '#ffffff',
    SpecialDarkGray = '#444444',
}

export interface IButtonProps {
    width?: string;
    height?: string;
    colorType?: ColorType;
}

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ColorEnum, FontFamilyEnum, SizeEnum, WeightEnum } from '@shared/lib';


export enum ButtonTypeEnum {
    FILLED = 'filled',
    DEFAULT = 'default',
    DASHED = 'dashed',
}

export enum ButtonBorderEnum {
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    H4 = 'H4',
    H5 = 'H5',
    H6 = 'H6',
}

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: ColorEnum;
    bgColor?: ColorEnum;
    size?: SizeEnum;
    fontFamily?: FontFamilyEnum;
    weight?: WeightEnum;
    buttonType: ButtonTypeEnum;
    border?: ButtonBorderEnum;
}
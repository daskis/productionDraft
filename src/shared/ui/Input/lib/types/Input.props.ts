import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { BorderEnum, ColorEnum, SizeEnum } from '@shared/lib';

export interface IInputProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'onChange'
> {
    label: string;
    size?: SizeEnum;
    borderColor?: ColorEnum;
    bgColor?: ColorEnum;
    color?: ColorEnum.BLACK | ColorEnum.WHITE;
    border?: BorderEnum;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
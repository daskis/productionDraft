import cls from './Button.module.scss';
import { ButtonBorderEnum, IButtonProps, Text } from '@shared/ui';
import { classNames, ColorEnum, FontFamilyEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const Button = (
    {
        color = ColorEnum.WHITE,
        size = SizeEnum.H1,
        fontFamily = FontFamilyEnum.FIRST,
        weight = WeightEnum.NORMAL,
        border = ButtonBorderEnum.H3,
        bgColor = ColorEnum.PRIMARY,
        buttonType,
        className,
        children,
        ...props
    }: IButtonProps,
) => {
    return (
        <button
            {...props}
            className={classNames(cls.button, {
                // ЦВЕТА
                [cls.primary]: color === ColorEnum.PRIMARY,
                [cls.secondary]: color === ColorEnum.SECONDARY,
                [cls.success]: color === ColorEnum.SUCCESS,
                [cls.warning]: color === ColorEnum.WARNING,
                [cls.danger]: color === ColorEnum.DANGER,
                [cls.info]: color === ColorEnum.INFO,
                [cls.link]: color === ColorEnum.LINK,
                [cls.white]: color === ColorEnum.WHITE,
                [cls.black]: color === ColorEnum.BLACK,


                [cls.primaryBg]: bgColor === ColorEnum.PRIMARY,
                [cls.secondaryBg]: bgColor === ColorEnum.SECONDARY,
                [cls.successBg]: bgColor === ColorEnum.SUCCESS,
                [cls.warningBg]: bgColor === ColorEnum.WARNING,
                [cls.dangerBg]: bgColor === ColorEnum.DANGER,
                [cls.infoBg]: bgColor === ColorEnum.INFO,
                [cls.linkBg]: bgColor === ColorEnum.LINK,
                [cls.whiteBg]: bgColor === ColorEnum.WHITE,
                [cls.blackBg]: bgColor === ColorEnum.BLACK,


                // РАЗМЕР
                [cls.h1]: size === SizeEnum.H1,
                [cls.h2]: size === SizeEnum.H2,
                [cls.h3]: size === SizeEnum.H3,
                [cls.h4]: size === SizeEnum.H4,
                [cls.h5]: size === SizeEnum.H5,
                [cls.h6]: size === SizeEnum.H6,

                // BORDER
                [cls.borderH1]: border === ButtonBorderEnum.H1,
                [cls.borderH2]: border === ButtonBorderEnum.H2,
                [cls.borderH3]: border === ButtonBorderEnum.H3,
                [cls.borderH4]: border === ButtonBorderEnum.H4,
                [cls.borderH5]: border === ButtonBorderEnum.H5,
                [cls.borderH6]: border === ButtonBorderEnum.H6,


            }, [className])}
        >
            <Text.Paragraph
                color={color}
                size={size}
                weight={weight}
                fontFamily={fontFamily}
            >
                {children}
            </Text.Paragraph>
        </button>
    );
};


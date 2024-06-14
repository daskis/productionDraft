import { INavigation } from '@features/navigation';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum } from '@shared/lib';

export const NavigationItem = (
    {
        path,
        label,
    }: INavigation) => {
    return (
        <Text.Link
            size={SizeEnum.H2}
            color={ColorEnum.TEXT}
            to={path}
        >
            {label}
        </Text.Link>
    );
};


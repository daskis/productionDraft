import cls from './NavigationList.module.scss';
import { NavigationConfig, NavigationItem } from '@features/navigation';
import { classNames, useAppSelector } from '@shared/lib';
import { selectSidebar } from '@features/events';

export const NavigationList = () => {
    const isOpen = useAppSelector(selectSidebar);
    return (
        <ul className={classNames(cls.list, {
            [cls.hide]: !isOpen,
        }, [])}>
            {NavigationConfig.map((item) => (
                <li
                    className={cls.listItem}
                >
                    <NavigationItem {...item} />
                </li>
            ))}
        </ul>
    );
};


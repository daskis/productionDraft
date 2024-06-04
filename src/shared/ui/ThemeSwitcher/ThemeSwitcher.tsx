import cls from './ThemeSwitcher.module.scss';
import Sun from '@assets/icons/sun.svg';
import Moon from '@assets/icons/moon.svg';
import { Theme, useTheme } from '@app/providers';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={() => {
                toggleTheme();
            }}
            className={cls.button}>
            {
                theme === Theme.DARK ? <Sun /> : <Moon />
            }
        </button>
    );
};


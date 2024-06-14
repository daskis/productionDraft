import cls from './SidebarProvider.module.scss';
import { ReactNode } from 'react';
import { Sidebar } from '@widgets/ui';

export const SidebarProvider = (
    {
        children,
    }: { children: ReactNode }) => {
    return (
        <div className={cls.wrapper}>
            <Sidebar />
            <div className={cls.body}>
                {children}
            </div>
        </div>
    );
};


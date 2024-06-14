import cls from './Loader.module.scss';
import Loading from '@assets/icons/loadingSpinner.svg';

export const Loader = () => {
    return (
        <div className={cls.wrapper}>
            <Loading />
        </div>
    );
};


import { setUser, useGetMeQuery } from '@entities/user';
import { useEffect } from 'react';
import { useAppDispatch } from '@shared/lib';

export const useGetMe = () => {
    const { data } = useGetMeQuery(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data]);
    return data;
};
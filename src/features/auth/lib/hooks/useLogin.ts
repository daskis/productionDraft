import { ILoginRequest, setToken, useLoginMutation } from '@features/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@shared/lib';

export const useLogin = () => {
    const [loginTrigger, { data, isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const trigger = async (data: ILoginRequest) => {
        await loginTrigger(data);
    };
    useEffect(() => {
        if (data) {
            const accessToken = data.accessToken.split(' ')[1];
            localStorage.setItem('accessToken', accessToken);
            dispatch(setToken(accessToken));
            toast.success('Вы успешно вошли');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
    }, [data]);


    return { trigger, data, isLoading };
};
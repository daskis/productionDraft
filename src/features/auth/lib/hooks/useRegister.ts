import { IRegisterRequest, setToken, useRegisterMutation } from '@features/auth/lib';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@shared/lib';

export const useRegister = () => {
    const [registerTrigger, { data, isLoading }] = useRegisterMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const trigger = async (data: IRegisterRequest) => {
        await registerTrigger(data);
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
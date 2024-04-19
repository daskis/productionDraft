import {useState} from "react";
import {useLoginMutation} from "@features/auth/lib";

export const MainPage = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [trigger] = useLoginMutation()
    return (
        <div>
            <input
                value={data.email}
                onChange={(e) => {
                    setData({...data, email: e.target.value})
                }}
                type="text"/>
            <input
                value={data.password}
                onChange={(e) => {
                    setData({...data, password: e.target.value})
                }}
                type="text"/>
            <button onClick={() => {
                trigger(data)
            }}>submit</button>
        </div>
    );
};


import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    props: null,
    estate: null,
    setUser: () => {},
    setEstate: () => {},
    setProps: () => {}
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [props, setProps] = useState();
    const [estate, setEstate] = useState();
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) => {
        _setToken(token);
        //console.log(token);
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value = {{
            user, token, setUser, setToken,
            props, setProps, estate, setEstate
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
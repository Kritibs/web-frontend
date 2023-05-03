import {createContext} from 'react';

export const userInfo ={
    userID: 0,
    isAuthenticated: false,
    token: '',
}

export const UserContext = createContext(userInfo)
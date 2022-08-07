import React from 'react';

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}

const setUser = user => isBrowser() ? window.localStorage.setItem("gatsbyUser", JSON.stringify(user)) : null

export const handleLogin = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
        let response = await (await fetch(`https://auth.josh.workers.dev?username=${username}&password=${password}`)).json();
        
        if ('success' in response) {
            if (response.success) {
                setUser({
                    username: response.username,
                    name: response.name,
                    auth_token: response.auth_token,
                })
                
                resolve(response);
            } else {
                reject(response);
            }
        } else {
            reject({success: false, error: 'Unknown error'})
        }
    });
}

export const isLoggedIn = () => {
    const user = getUser()
    return !!user.username
}

export const logout = callback => {
    setUser({})
    isBrowser() && (window.location.href = '/login');
}
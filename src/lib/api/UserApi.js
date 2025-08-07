export const userRegister = async ({username, password, name} )=> {
    //console.log('Registering user:', {username, password, name});
    return await fetch(`${import.meta.env.VITE_Api_Path}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({
            username,
            password,
            name
        }),
    })
};
export const userLogin = async ({username, password} )=> {
    //console.log('Registering user:', {username, password});
    return await fetch(`${import.meta.env.VITE_Api_Path}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify({
            username,
            password
        }),
    })
};
export const userDetail = async (token) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/users/current`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        },
    })
}
export const userUpdateProfile = async (token, {name}) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            name,
        }),
    })
}
export const userUpdatePassword = async (token, {password}) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            password,
        }),
    })
}
export const userLogout = async (token) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/users/logout`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        },
    })
}
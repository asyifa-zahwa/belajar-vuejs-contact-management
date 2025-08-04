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
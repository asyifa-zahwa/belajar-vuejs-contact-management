export const AddressCreate = async (token, contactId, {street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/contacts/${contactId}/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            street,
            city,
            province,
            country,
            postal_code
        }),
    });
}
export const AddressUpdate = async (token, contactId, addressId, {street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/contacts/${contactId}/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            street,
            city,
            province,
            country,
            postal_code
        }),
    });
}
export const AddressDelete = async (token, contactId, addressId) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/contacts/${contactId}/addresses/${addressId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        },
    });
}
export const AddressList = async (token, contactId) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/contacts/${contactId}/addresses`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        },
    });
}
export const AddressDetail = async (token, contactId, addressId) => {
    return await fetch(`${import.meta.env.VITE_Api_Path}/contacts/${contactId}/addresses/${addressId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        },
    });
}
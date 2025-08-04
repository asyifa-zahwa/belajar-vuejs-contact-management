import  Swal  from 'sweetalert2';

export const alertSuccess = async(message) => {
    //alert(`Success: ${message}`);
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        confirmButtonText: 'OK',
    });
};
export const alertError = async(message) => {
    //alert(`Error: ${message}`);
    Swal.fire({
        icon: 'error',
        title: 'Ups!',
        text: message,
        confirmButtonText: 'OK',
    });
};
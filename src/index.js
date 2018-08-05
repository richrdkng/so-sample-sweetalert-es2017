import swal from 'sweetalert';

// without wrapping -----------------------------------------------------------
/*
document.addEventListener('DOMContentLoaded', async () => {
    if (!await swal({text: 'Are you sure?', buttons: true})) {
        return;
    }

    console.log('OK');
});
*/

// with wrapping --------------------------------------------------------------
async function confirm(message) {
    return swal({
        text: message,
        buttons: true
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    if (!await confirm('Are you sure?')) {
        return;
    }

    console.log('OK');
});

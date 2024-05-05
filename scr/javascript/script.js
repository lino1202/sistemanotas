function selectProfile(profile) {
    if (profile === 'Estudiante') {
        const username = prompt('Usuario:');
        const password = prompt('Contraseña:');

        if (username === 'EST1' && password === 'est1') {
            window.location.href = 'estudiante.html';
        } else {
            alert('Credenciales incorrectas');
        }
    } else if (profile === 'Profesor') {
        const username = prompt('Usuario:');
        const password = prompt('Contraseña:');

        if (username === 'PROF1' && password === 'prof1') {
            window.location.href = 'Profesor.html';
        } else {
            alert('Credenciales incorrectas');
        }
    } else if (profile === 'Admin') {
        const username = prompt('Usuario:');
        const password = prompt('Contraseña:');

        if (username === 'ADMIN' && password === 'admin') {
            window.location.href = 'Admin.html';
        } else {
            alert('Credenciales incorrectas');
        }
    }
}
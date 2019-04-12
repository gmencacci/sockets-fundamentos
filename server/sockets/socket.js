const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('desconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (data) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!'
        //     });
        // }
    })
})
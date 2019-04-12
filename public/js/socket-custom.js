var socket = io();


//on => escucha eventos o sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


//emit => Enviar información
socket.emit('enviarMensaje', {
    usuario: 'German',
    mensaje: 'Hola Mundo'
}, function(r) {
    console.log('respuesta server: ', r.resp);
});

//Escucha información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})
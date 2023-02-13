const { WebSocketServer } = require('ws');
 
function onError(ws, err) {
    console.error(`onError: ${err.message}`);
}
 
function onMessage(ws, data) {
    console.log(`onMessage: ${data}`);
    ws.send(`received!`);
}
 
function onConnection(ws, req) {
    console.log(`onConnection`);
    ws.on('message', data => onMessage(ws, data));
    ws.on('error', error => onError(ws, error));
    ws.on('close', () => console.log('Client has disconnected!'));
    
    setInterval(
        () => ws.send(`${new Date()}`),
        1000
    )
    

}
 
module.exports = (server) => {
    const wss = new WebSocketServer({
        server
    });
 
    wss.on('connection', onConnection);
 
    console.log(`App Web Socket Server is running!`);
    return wss;
}
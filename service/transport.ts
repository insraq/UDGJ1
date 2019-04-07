const socket: ISocket = require("builtins.scripts.socket");
const client = socket.udp();
export function send(data: string) {
    client.sendto(data, "127.0.0.1", 6000);
}

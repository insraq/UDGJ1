const socket: ISocket = require("socket");

function run_udp_server(this: void) {
    const udp = socket.udp();
    const [return_code, err] = udp.setsockname("*", 6000);
    if (return_code !== 1) {
        console.log("Failed to listen on 0.0.0.0:6000: ", err);
        return;
    }
    console.log("Starting to listen on 0.0.0.0:6000");
    while (true) {
        const [data, err_rec] = udp.receive();
        console.log(data, err_rec);
    }
}
run_udp_server();

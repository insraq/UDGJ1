import { GameLogic } from "../logic/logic";

const gl = new GameLogic();
const inspect: Inspect = require("lib.inspect");
const camera: ICamera = require("orthographic.camera");

function init(this: any) {
    const socket: ISocket = require("builtins.scripts.socket");
    // camera.follow(hash("/camera"), "/player");
    // camera.shake(hash("/camera"), 0.1, 1);
    // camera.use_projector(hash("/camera"), hash("FIXED_AUTO"));
    const client = socket.udp();
    client.sendto(os.clock().toString(), "127.0.0.1", 6000);
    msg.post(".", "acquire_input_focus");
}

function on_input(this: any, action_id: any, action: any) {
    if (action_id === hash("touch")) {
        const target = camera.screen_to_world(hash("/camera"), vmath.vector3(action.x, action.y, 0));
        go.set_position(vmath.vector3(target.x, target.y, 0));
    }
}

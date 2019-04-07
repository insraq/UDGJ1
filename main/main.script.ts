import { GameLogic } from "../logic/logic";
import { send } from "../service/transport";

const gl = new GameLogic();
const inspect: Inspect = require("lib.inspect");
const camera: ICamera = require("orthographic.camera");

interface IMain {
    last_pos?: vmath.vector3;
}

function init(this: IMain) {
    // camera.follow(hash("/camera"), "/player");
    // camera.shake(hash("/camera"), 0.1, 1);
    // camera.use_projector(hash("/camera"), hash("FIXED_AUTO"));
    msg.post(".", "acquire_input_focus");
}

function on_input(this: IMain, action_id: any, action: any) {
    if (action_id === hash("touch")) {
        const target = camera.screen_to_world(hash("/camera"), vmath.vector3(action.x, action.y, 0));
        const pos = vmath.vector3(target.x, target.y, 0);
        if (this.last_pos == null || this.last_pos.x !== pos.x || this.last_pos.y !== pos.y) {
            this.last_pos = pos;
            go.set_position(pos);
            send(`${target.x},${target.y}`);
        }
    }
}

--[[ Generated with https://github.com/Perryvw/TypescriptToLua ]]
local inspect = require("target.lib.inspect");
local camera = require("orthographic.camera");
init = function(self)
    local socket = require("builtins.scripts.socket");
    local client = socket.udp();
    client:sendto(tostring(os.clock()), "127.0.0.1", 6000);
    msg.post(".", "acquire_input_focus");
end;
on_input = function(self, action_id, action)
    if action_id == hash("touch") then
        local target = camera.screen_to_world(hash("/camera"), vmath.vector3(action.x, action.y, 0));
        go.set_position(vmath.vector3(target.x, target.y, 0));
    end
end;

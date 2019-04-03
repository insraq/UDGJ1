--[[ Generated with https://github.com/Perryvw/TypescriptToLua ]]
local socket = require("socket");
run_server = function()
    local udp = socket.udp();
    local return_code, err = udp:setsockname("*", 6000);
    if return_code ~= 1 then
        print("Failed to listen on 0.0.0.0:6000: ", err);
        return;
    end
    print("Starting to listen on 0.0.0.0:6000");
    while true do
        local data, err_rec = udp:receive();
        print(data, err_rec);
    end
end;
run_server();

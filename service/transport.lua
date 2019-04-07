--[[ Generated with https://github.com/Perryvw/TypescriptToLua ]]
local exports = exports or {};
local socket = require("builtins.scripts.socket");
local client = socket.udp();
exports.send = function(self, data)
    client:sendto(data, "127.0.0.1", 6000);
end;
return exports;

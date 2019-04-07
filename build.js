const { spawn } = require('child_process');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const ts = spawn("tstl", ['-p', 'tsconfig.json', '--watch'], { shell: true });
ts.stderr.on('data', (d) => console.log(String(d)));
ts.stdout.on('data', (d) => console.log(String(d)));
const watcher = chokidar.watch('**/*.script.lua');
watcher
    .on('add', rename)
    .on('change', rename);

function rename(src) {
    fs.rename(src, src.replace(".script.lua", ".script"), (err) => {
        if (err) { console.log(err); }
    });
}
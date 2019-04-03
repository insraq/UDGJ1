const { spawn } = require('child_process');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const ts = spawn("tstl", ['-p', 'tsconfig.json', '--watch'], { shell: true });
ts.stderr.on('data', (d) => console.log(String(d)));
ts.stdout.on('data', (d) => console.log(String(d)));
const watcher = chokidar.watch('**/*.lua');
watcher
    .on('add', copy)
    .on('change', copy)
    .on('unlink', unlink);

function copy(src) {
    const target = getTarget(src);
    const targetDir = path.dirname(target);
    fs.exists(targetDir, (exists) => {
        if (!exists) {
            fs.mkdir(targetDir, { recursive: true }, handleFile.bind(this, src, target));
        } else {
            handleFile(src, target);
        }
    });
}

function unlink(src) {
    const target = getTarget(src);
    fs.unlink(target, (err) => {
        if (err) {
            console.log(`FAILED: Unlink ${target}`);
        } else {
            console.log(`SUCCESS: Unlink ${target}`);
        }
    });
}

function handleFile(src, target) {
    fs.copyFile(src, target, (err) => {
        if (err) {
            console.log(`FAILED: ${src} -> ${target}`);
        } else {
            console.log(`SUCCESS: ${src} -> ${target}`);
        }
    });
}

function getTarget(src) {
    return path.join('../target', src.replace(".script.lua", ".script"));
}
const fs = require("fs");
const sysPath = require("path");
const url = require("url");

async function main() {
  const outPath = sysPath.join(__dirname, "out.txt");
  const outUrl = url.pathToFileURL(outPath);
  await writeText(outUrl, "Hello, World!\n");
}

async function writeText(pathLike, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathLike, text, {encoding: "UTF-8"}, (err) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

main();

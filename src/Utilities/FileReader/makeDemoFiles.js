const { writeFileSync, mkdirSync, existsSync } = require("fs");
const { join } = require("path");

const argv = { files: 10, chars: 500, dir: join(__dirname, "../../../samples/"), name:'sampleFile.txt', firstchar:'a',lastchar:'z'};

process.argv.forEach((arg, i) => {
  if (i > 1 && arg) {
    arg = arg.replace("--", "");
    const [key, val] = arg.split("=");
    argv[key] = val;
  }
});

const { files, chars, dir, name, firstchar, lastchar } = argv;

if (!existsSync(dir))
    mkdirSync(dir)

Array.from({length:files}).forEach((n,i)=>{
    const first = firstchar.charCodeAt(0), last = lastchar.charCodeAt(0), range = last-first
    const fileString = Array.from({length:chars}).map(()=>
        String.fromCharCode(Math.round(Math.random()*range)+first)
    ).join('')
    writeFileSync(join(dir,name.replace('.',`${i}.`)),fileString,'utf8')
})
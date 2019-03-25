import * as fs from 'fs';
import * as path from 'path';

fs.readdir(path.join(__dirname,"stuff"), (err, files) => {
    let age = 22;
    files.forEach(file => {
        import ("./stuff/" + file).then(e => {
            e.default.prototype.setName("MomoLina", ++age).sayName()
        });
    });
});
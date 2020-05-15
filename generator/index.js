// include node fs module
const fs = require('fs');

const jsons = [
    {
        name: 'test.json',
        json: {name: "John", age: 31, city: "New York"}
    },
    {
        name: 'tes1t.json',
        json: {name: "John", age: 31, city: "New York"}
    },
    {
        name: 'test2.json',
        json: {name: "John", age: 31, city: "New York"}
    },
    {
        name: 'test3.json',
        json: {name: "John", age: 31, city: "New York"}
    },
];

const templateVar = 32;
const view =`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const age = ${templateVar}
  }

}`

for (const json of jsons) {
    fs.writeFile('jsons/' + json.name, JSON.stringify(json.json), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

fs.writeFile('test.ts', view, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

const plikSterujacy = [
    {
        nazwa: 'Pies',
        pola: [{
            nazwa: 'name',
            typ: 'string'
        }]
    },
    {
        nazwa: 'Kot',
        pola: [{
            nazwa: 'name',
            typ: 'string'
        },
            {
                nazwa: 'wiek',
                typ: 'number'
            }]
    }

]
for(let plik of plikSterujacy) {
    let spisPol = ``;
    for(let pole of plik.pola){
        spisPol += ` ${pole.nazwa}: ${pole.typ};\n`;
    }
    const model = `export class ${plik.nazwa}Model {
${spisPol}
}`
    fs.writeFile(plik.nazwa.toLowerCase()+'.model.ts', model, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

const inputJson = require('./input/input.json');
const queryJson = require('./query-json');
const fs = require('fs');


// Montamos la query 
const query = {
    field: 'elementMacroId', 
    operator: 'IN', 
    value: [
        //"ND.IE-T023-DRKEN",
        //"ND.IE-T010-LMRCK",
        //"ND.IE-T010-SXMBR",
        //"ND.IE-T010-GORT",
        //"ND.IE-T010-ENNIS",
        //"ND.IE-T023-KONAN",
        "ND.IE-T001-SLIGO",
        "ND.IE-T001-COLNY",
        "ND.IE-T001-BMOTE",
        "ND.IE-T001-BOYLE",
        "ND.IE-T001-CKOSH",
        "ND.IE-T001-DRMOD",
        "ND.IE-T001-LFORD",
        "ND.IE-T001-ETOWN",
        "ND.IE-T001-MLGAR",
        "ND.IE-T001-KLCAN",
        "ND.IE-T001-ENFLD"
        // "ND.IE-T015-DDALK",
        // "ND.IE-T015-DGHDA",
        // "ND.IE-T015-LTOWN",
        // "ND.IE-T015-GSTON",
        // "ND.IE-T015-BBRGN",
        // "ND.IE-T015-SKRES",

    ],
}

// Llamamos a la función que realiza la búsqueda
const result = queryJson(inputJson, query);
console.log(result);
const jsonPretty = JSON.stringify(result, null, 2);

// Guardamos el resultado en un fichero
fs.writeFileSync('./output/output.json', jsonPretty);


const { rejects } = require('assert');
const fs = require ('fs');
require ('colors');
const getMulti = async(base,lista,hasta) => {

        try {
    
        let salida ='';
    
        for (let i=1; i <= hasta; i++)  {
            let num = base*i;
            salida += `${base} x ${i} = ${num}\n`;
        }
        
        if (lista) {
            console.log ('=================');
            console.log (`Tabla del ${base}`);
            console.log ('=================');
            console.log(salida);
        }

        fs.writeFileSync (`./salidas/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
        } catch (err) {
            throw err;
        }
        
    
   
}

module.exports = {
    getMulti
}
//Si nadamas es una funcion la que queremos exportar tendriamos que poner "export" antes de declarar la funcion

function z(params){
    console.log("z: " + params);
    return "fin z";
}

export {z}
//Si nadamas es una funcion la que queremos exportar tendriamos que poner "export" antes de declarar la funcion

function y(params){
    console.log("y: " + params);
    return "fin y";
}

export {y}
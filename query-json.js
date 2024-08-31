/**
 * devuelve la lista de objetos del json que cumplan con la query
 * @param {*} json json de entrada, se asume que es un array de objetos
 * @param {*} query query de búsqueda, es un objeto con los campos a buscar
 */
function queryJson(json, query) {
  const result = [];

  for (let obj of json) {
    let field = obtainField(obj, query.field);
    if (!field) {
      console.warn(
        `El campo ${field} no existe en el objeto ${JSON.stringify(obj)}`
      );
      break;
    }

    const match = applyOperator(field, query.operator, query.value);

    if (match) {
      result.push(obj);
    }
  }
  return result;
}

function applyOperator(field, operator, value) {
  switch (operator) {
    case "EQUALS":
      return field === value;
    case "NOT_EQUALS":
      return field !== value;
    case "IN":
      return value.includes(field);
    case "NOT_IN":
      return !value.includes(field);
    default:
      console.warn(`El operador ${operator} no está soportado`);
      return false;
  }
}

/**
 * Obtiene el campo del objeto que se desea buscar
 * @param {*} obj
 * @param {*} field
 * @returns
 */
function obtainField(obj, field) {
  let fields = field.split(".");
  let result = obj;
  for (let f of fields) {
    result = result[f];
  }
  return result;
}

module.exports = queryJson;

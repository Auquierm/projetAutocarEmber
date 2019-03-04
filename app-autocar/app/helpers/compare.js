import {helper as buildHelper} from '@ember/component/helper'

export function compare(params) {
  if (params[3]) {
    params[0] = params[0].toLowerCase();
    params[2] = params[2].toLowerCase();
  }
  let v1 = params[0];
  let operator = params[1];
  let v2 = params[2];
  switch (operator) {
    case '==':
      return (v1 == v2);
    case '!=':
      return (v1 != v2);
    case '===':
      return (v1 === v2);
    case '<':
      return (v1 < v2);
    case '<=':
      return (v1 <= v2);
    case '>':
      return (v1 > v2);
    case '>=':
      return (v1 >= v2);
    case '&&':
      return !!(v1 && v2);
    case '||':
      return !!(v1 || v2);
    case '===s':
      return (parseInt(v1) === parseInt(v2))
    default:
      return false;
  }
}
export default buildHelper(compare);

import { helper } from '@ember/component/helper';

export function multiply(params/*, hash*/) {
  return params.reduce((a, b) => {
    return a * b;
  });
}

export default helper(multiply);

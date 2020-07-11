

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
	return arr1.length !== arr2.length ? false : arr1.every((el, index) => el === arr2[index]);
}

function memorize(fn, limit) {
	let memory = [];
	return function inner(...args) {
        let findResult = memory.find(elem => compareArrays(elem.args, args));
        let result = findResult ? findResult.result : fn(...args);

        if (!findResult) {
            memory.push({args: args, result: result});        
        }
        if (memory.length > limit) {
            memory.shift();
        }
        return result;
    }
}
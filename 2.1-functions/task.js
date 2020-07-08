//Задача №1.

function getSolutions( a, b, c ) {

	let D = Math.pow(b, 2) - 4 * a * c;
	let roots = [];

  if (D < 0) {
    return { D, roots: [] };
  } else if (D === 0) {
    roots.push(-(b / (2 * a)));
    return { D, roots };
  } else if (D > 0) {
    roots.push((-b + Math.sqrt(D)) / (2 * a));
    roots.push((-b - Math.sqrt(D)) / (2 * a));
    return { D, roots };
  }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots === undefined) {
        console.log(`Уравнение не имеет вещественных корней`)
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else if (result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


//Задача №2.

function getAverageScore(data) {

    let average = [];
    for (let mark in data) {
        data[mark] = getAverageMark(data[mark]);
        average.push(data[mark])
    }
    data['average'] = getAverageMark(average);
    return data;
}

function getAverageMark(marks){
   let reducer = (sumRate, currentRate) => sumRate + currentRate;
    return !marks.length ? 0: marks.reduce(reducer) / marks.length;
}


//Задача №3.

function getPersonData(secretData) {

    let firstName, lastName;

    if (secretData.aaa === 0) {
        firstName = 'Родриго';
    } else if (secretData.aaa === 1) {
        firstName = 'Эмильо';
    }

    if (secretData.bbb === 0) {
        lastName = 'Родриго';
    } else if (secretData.bbb === 1) {
        lastName = 'Эмильо';
    }

    return {
        firstName,
        lastName
    }
}

function getDecodedValue(secret) {
  return secret === 0 ? "Родриго" : "Эмильо";
}





// задание 1

function parseCount(count) {
	let parse = Number.parseInt (count);
	if (parse) {
		return parse;
	} else {
		throw new Error ('Невалидное значение');
	}
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch(e) {
		return e;
	}
}

//задние 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let halfP = this.getPerimeter() / 2;
    let formula = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
    let str = formula.toFixed(3);
    return parseFloat(str);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getPerimeter: () => "Ошибка! Неправильный треугольник",
      getArea: () => "Ошибка! Неправильный треугольник"
    };
  }
}
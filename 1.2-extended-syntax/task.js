'use strict';


function getResult(a,b,c){
    
    let discriminant = b**2 - 4 * a * c;
    let x = [];

    if(discriminant == 0){
        x[0] = -b/(2*a); 
    }
    else if(discriminant > 0){
        x[0] = (-b + Math.sqrt(discriminant))/(2 * a);
        x[1] = (-b - Math.sqrt(discriminant))/(2 * a);
    }

    return x;
}




function getAverageMark(marks){
    let number = 0;
	let averageMark = 0;
    if (marks.length == 0){
        return 0;
    } else if (marks.length > 5){
        marks.splice(5);
    }
    
    for(let i = 0; i < marks.length; i++){
        number += marks[i];
        averageMark = number/marks.length;
    }
    return averageMark;
}



function askDrink(name,dateOfBirthday){
    let nowYear = new Date().getFullYear();
    let age = nowYear - dateOfBirthday.getFullYear() ;
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}
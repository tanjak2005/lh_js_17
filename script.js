//1

// Напишите функцию “Бюджет”. Внешняя функция создаст Бюджет, а вызов
// внутренней добавляет переданную ЗП в бюджет.

// Попробуйте создать несколько бюджетов.

function createBudget() {
    return function (wage) {
        return wage;
    }

}
let budget = createBudget();

console.log(budget(1000));

console.log(budget(2));


//2

// function multiple(a,b) {
//     const stamp = new Date().getTime();
//     while (new Date().getTime() < stamp + 2000) {};
//     return a*b;
// }

// // console.log(multiple(2,3));


// function cachingDecorator(func) {
//     let cache = new Map();
  
//     return function(a, b) {
//       if (cache.has(a*b)) {    
//         return cache.get(a*b); 
//       }
  
//       let result = func(a, b); 
  
//       cache.set(a*b, result); 
//       return result;
//     };
//   }
  
//   multiple = cachingDecorator(multiple);

//   alert( multiple(2, 3) ); 
//   alert( "Again: " + multiple(2, 3) ); 
  
//   alert( multiple(2, 5) ); 
//   alert( "Again: " + multiple(2, 5) ); 





  

   //2.1

   const multiple = (a,b) => {
    const stamp = new Date().getTime();
    while (new Date().getTime() < stamp + 2000) {};
    return a*b;
}

console.log(multiple(2,3));

function decorate() {
  
  const cache = new Map;
  return function(a, b) {
    const key = `${a}-${b}`;
    if (cache.has(key)) {
      return cache.get(key)
    } else { 
      const result = multiple(a, b);
      cache.set(key, result);
      return result;
    }
  }
}

const newMultiple = decorate();

console.log(newMultiple(2, 3));
console.log(newMultiple(2, 4));
console.log(newMultiple(2, 5));
console.log(newMultiple(2, 3));
console.log(newMultiple(2, 4));
console.log(newMultiple(2, 5));


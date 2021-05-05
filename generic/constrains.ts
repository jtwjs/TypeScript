interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full Time!!');
  }
  workFullTime(){

  }
}

class PartTimeEmployee implements Employee{
  pay() {
    console.log(`part time!!`);
  }
  workPartTime(){

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입이므로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee> (employee: T): T {
  employee.pay();
  return employee;  
}

const woong = new FullTimeEmployee();
const tack = new PartTimeEmployee();
woong.workFullTime();
tack.workPartTime();

const woongAfterPay = pay(woong);
const tackAfterPay = pay(tack);

// function getValue<T extends object>(obj: T, key: string) {
//   if (obj[key] == null) {
//     throw new Error('is not valid!!');
//   }
//   return obj[key];
// }

function getValue<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key];
}

const obj2 = {
  animal: '🧛‍♂️',
}

console.log(getValue(obj2, 'animal'));
console.log(getValue(obj2, 'animal'));
console.log(getValue({name: 'woong', old: 27}, 'old'));
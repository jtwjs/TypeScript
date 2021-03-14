{

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 *(가능하면 사용 X)
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 *(가능하면 사용 X)
  let anything: any = 0;
  anything = 'hello';

  // void (함수에서 아무런 값도 리턴하지 않을 때)
  function print(): void {
    console.log('hello');
  }
  let unsable: void = undefined; // 💩 (변수에 선언 X)

  // never (이 함수를 호출하면 리턴할 계획이 없다는것을 알림)
  function throwError()(message: string): never {
    // message -> server (log)
    // throw new Error(message); (에러를 던지는 경우)
    /* while(true) {
     }*/
  }
  let nerverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'woong'});
  acceptSomeObject({animal: 'dog'});
}
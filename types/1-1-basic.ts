{

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π© *(κ°λ₯νλ©΄ μ¬μ© X)
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any π© *(κ°λ₯νλ©΄ μ¬μ© X)
  let anything: any = 0;
  anything = 'hello';

  // void (ν¨μμμ μλ¬΄λ° κ°λ λ¦¬ν΄νμ§ μμ λ)
  function print(): void {
    console.log('hello');
  }
  let unsable: void = undefined; // π© (λ³μμ μ μΈ X)

  // never (μ΄ ν¨μλ₯Ό νΈμΆνλ©΄ λ¦¬ν΄ν  κ³νμ΄ μλ€λκ²μ μλ¦Ό)
  function throwError()(message: string): never {
    // message -> server (log)
    // throw new Error(message); (μλ¬λ₯Ό λμ§λ κ²½μ°)
    /* while(true) {
     }*/
  }
  let nerverEnding: never; // π©

  // object
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'woong'});
  acceptSomeObject({animal: 'dog'});
}
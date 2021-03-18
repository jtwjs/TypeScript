{
  /*
   * Type Inference(타입 추론)
   * 타입추론에 기대지말고 명확하게 타입을 명시하자!!
   */
  //let text:string = 'hello';
  let text = 'hello'; // 선언함과 동시에 문자열을 할당했기 떄문에 자동으로 string 유추
  function print(message = 'hello') {// default 값 넣을시 타입 유추
    console.log(message);
  }
  print('가다');

  function add(x:number, y:number) {
    return x + y;
  };

  const result = add(1,2); //result는 자동으로 number타입으로 추론
}
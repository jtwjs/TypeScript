{

  /*
   * Type Assertions 💩
   * 정말 x3 장담하지 않는 경우에는 사용 X
   */
  function jsStrFunc(): any {
    return 2;
  };

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong:any = 5;
  console.log((wrong as Array<number>).push(1)); // 😓

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  
  const numbers = findNumbers()!;
  numbers.push(2); // !는 절대 확신할떄 붙임 (?랑 반대)

  
}
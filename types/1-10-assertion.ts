{

  /*
   * Type Assertions π©
   * μ λ§ x3 μ₯λ΄νμ§ μλ κ²½μ°μλ μ¬μ© X
   */
  function jsStrFunc(): any {
    return 2;
  };

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong:any = 5;
  console.log((wrong as Array<number>).push(1)); // π

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  
  const numbers = findNumbers()!;
  numbers.push(2); // !λ μ λ νμ ν λ λΆμ (?λ λ°λ)

  
}
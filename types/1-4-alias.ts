{
  /*
   * Type Aliases (원하는 타입을 정의)
   */
 type Text = string;
 const name: Text = 'woong';
 const address: Text = 'korea';
 type Num = number;
 type Student = {
   name: string,
   age: number,
 };
 const student: Student = {
   name: 'woong',
   age: 27,
 };

 /*
  * String Literal Types (정의된 값만 설정 가능)
  */
 type Name = 'name';
 let woongName: Name;
 woongName = 'name';
 type JSON = 'json';
 const json: JSON = 'json';

 type Boal = true;
 const isCat: Boal = true; 
 const isDog: Boal = false; // 정의된 값이 아니라 에러남
}


{
  const obj = {
    name: 'woong',
  }

  obj.name; // woong
  obj['name']; // woong

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hi';

  type Gender = Animal['gender']; // 'male | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

}
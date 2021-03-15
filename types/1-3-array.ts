{

  // Array
  const fruits: string[] = ['🤣','😲'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    fruits.push // readonly 라고 적힌 배열엔 변경 불가(object의 불변성 보장)
    // readonly Array<string>은 아직 안됨
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // 'name'
  student[1]; // '123'
  const [name, age] = student;

  /*Tuple을 잘 사용한 예: react의 useState
  const [text, setText] = useState('');
  */
}
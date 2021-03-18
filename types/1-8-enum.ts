{
  /*
   * Enum (관련있는 상수를 묶음)
   * Typescript에서 enum을 잘사용하지 않는것을 추천
   * Typescript에서 enum의 문제점
      * enum으로 타입 지정시 아무 숫자나 할당가능해지는 문제 (타입 보장 X)
      * enum 외의 Union Type을 활용하여 대체 가능
   * enum을 쓸수밖에 없는 경우 (단 1가지
    *  모바일 클라이언트에서 사용하는 네이티브 프로그래밍언어에서는
       유니온 타입을 표현할수있는 방법이 없기 떄문에 enum 사용
   */
  // JavaScript
  const MAX_NUM = 8;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript 
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wendsday';
  enum Days { //enum은 앞글자만 대문자로
    Monday = 1, // default 0, 문자열도 지정가능 문자열 지정시 나머지도 지정해줘야함
    Tuesday, 
    Wednseday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  };

  console.log(Days.Thursday);
  let day: Days = Days.Satarday;
  day = Days.Tuesday;
  day = 100000; // 아무숫자나 할당가능해짐 (타입 보장X)
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wendsday';
  console.log(dayOfWeek);
  
  
}
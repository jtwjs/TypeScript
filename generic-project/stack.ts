{
  interface Stack<T> {
    readonly size: number; // 외부에서 변경 불가
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    // 데이터를 정의할 때 사용자가 데이터를 넣어서 한단계 감싸는 무언가를 
    // 만든다면 불변성을 유지하는것이 중요 (readonly)
    readonly value: T;
    readonly next?: StackNode<T> //(optional) StackNode | undefined; 와같음 
  }

  class StackImpl<T> implements Stack<T> {
     // 여기에도 readonly를 적으면 내부에서도 변경불가
     // 내부와 외부에 쓰이는 변수이름이 같으면 '_' 활용
    private _size: number = 0; // default value
    private head?: StackNode<T>;

    // 보통 자료구조를 만들때는 사이즈의 제한을 적용함
    constructor(private capacity: number){}
    get size() { // 함수가 아닌 변수임 (get, set)
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full');
      }
      const node: StackNode<T> = {value, next: this.head};
      this.head = node;
      this._size++;
    }
    pop(): T {
      // null == undefiend [O], null === undefined [X]
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push('A');
  stack.push('B');
  stack.push('C');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const objStack = new StackImpl<object>(5);
  objStack.push({name: 'woong'});
  objStack.push({why: 3});
  objStack.push({not: true});
  while (objStack.size !== 0) {
    console.log(objStack.pop());
  }
}
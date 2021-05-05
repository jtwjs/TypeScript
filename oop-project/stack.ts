{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type link = Node | null;
 
  class Node {
    private current: string;
    private before: Node | null;

    private constructor(current: string, before: link) {
      this.current = current;
      this.before = before;
    }

    static makeNode(current: string, before: link) {
      return new Node(current, before);
    }

    getCurrent(): string {
      return this.current;
    }

    setCurrent(value: string): void{
      this.current = value;
    }

    getBefore(): link {
      return this.before;
    }

    setBefore(value: link): void {
      this.before = value;
    }
  }

  class WoongStack implements Stack {
     size: number = 0;
     HEAD: link = null;

     push(value: string): void {
      this.HEAD = Node.makeNode(value, this.HEAD);
    }

     pop(): string {
      if (!this.HEAD) {
        return 'null';
      }
      const value = this.HEAD.getCurrent();
      this.HEAD = this.HEAD.getBefore();
      return value;
    }
  }
  
  const stack = new WoongStack();
  stack.push('a');
  stack.push('b');

   stack.push('c');
  stack.push('d');
  stack.push('e');
  stack.push('f');
  stack.push('g');
  stack.push('h');
  stack.push('i');
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  
}
{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node {
    current: string,
    next: Node | null
  }

  class WoongStack implements Stack {
    public readonly size: number = 5;
    static HEAD: Node | null;
    static push(value: string): void {
      
    }

    static pop(): string {
      
    }
  }
}
{
  /*
   * Union Types: OR
     발생할 수 있는 모든 케이스 중 하나만 할당할 수 있을 때 사용
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('left');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  // function login -> sucess, fail

  type SuccessState = {
    response: {
      body: string;
    };
  };
  
  type FailState = {
    reason: string;
  }

type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  };

  //printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 🤣 resone

  function printLoginState(state: LoginState) {
    if('response' in state) {
      console.log(`🎉 ${state.response}`);
    } else {
      console.log(`🤣 ${state.reason}`);
    };
  };

}
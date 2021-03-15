{
  /*
   * Discriminated Union 
    (유니온 타입에 차별화되는 이름이 동일한 타입을 둠으로써 간편하게 구분할수있는 것)
   */

  // function login -> sucess, fail

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in',
      },
    };
  };

  //printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 🤣 resone

  function printLoginState(state: LoginState) {
    //state.result; success or fail
    if (state.result === 'success') {
      console.log(`🎉 ${state.response}`);
    } else {
      console.log(`🤣 ${state.reason}`);
    };
  };
}
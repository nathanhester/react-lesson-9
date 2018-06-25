// This is the function that is run when the button is clicked
const waitTwoSecondsThenDispatch = () => {
    store.dispatch({ type: 'STARTED' });
    setTimeout(() => store.dispatch({ type: 'COMPLETED' }), 2000);
  }
  
  // This displays the current status along with the button
  let StatusDisplay = (props) => {
    return (
      <div>
        <p>{props.status}</p>
        <button onClick={waitTwoSecondsThenDispatch}>Start dispatch</button>
      </div>
    );
  };
  
  const reducer = (state = 'not started', action) => {
      switch(action.type) {
        case 'STARTED':
          return 'started';
        case 'COMPLETED':
          return 'completed';
      }
      return state;
  }
  
  ReactDOM.render(
    <Provider store={store}>
      <StatusDisplay />
    </Provider>,
    document.getElementById('root')
  );
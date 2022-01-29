import Tictactoe from "./TicTacToe";

function App() {
  return (
    <div className="App">
       <h1 style={styles.title_style}>Tic Tac Toe</h1>
       <Tictactoe/>
    </div>
  );
}

const styles={
  title_style:{
    color:'#61dafb',
    display:'flex',
    justifyContent:'center',
    fontSize:'3em'
  }
}

export default App;

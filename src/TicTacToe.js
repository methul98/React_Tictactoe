import { useEffect, useState } from "react";
import pattern from "./winPattern";

function Tictactoe(){
    const [board,setBoard]=useState([
        '','','',
        '','','',
        '','',''
    ])
    const [player,setPlayer]=useState('X');
    const [lastIndx,setLastindx]=useState(-1);

    const changeTile=(idx)=>{
        //console.log(player,i);
        // const result=board.map((val,i)=>{
        //      if(i===idx)
        //      {
        //          return player;
        //      }else{
        //          return val;
        //      }
        // });

        //if value already there in tiles we cant change it 
        if(board[idx]!=='')
             return;
        //store the last clicked index value when we clicked the tiles
        setLastindx(idx);
        setBoard((board)=>{
            return(
                board.map((val,i)=>{
                         if(i===idx)
                         {
                             return player;
                         }else{
                             return val;
                         }
                    })
            )
        });
        //console.log(result);
        setPlayer(player==='X'?'O':'X');
    }

    const checkWin=()=>{
        if(lastIndx<0) return;

       // console.log(pattern[lastIndx]);
       const checkArr=pattern[lastIndx];
       console.log("Checking Win");
       const prevPlayer=player==="X" ? "O" : "X";
       //check each adjacent tile whether they have same x or O
       checkArr.forEach(arr => {
            if(board[arr[0]]===prevPlayer && 
                board[arr[1]]===prevPlayer && 
                board[arr[2]]===prevPlayer)
            {
                 alert(`${prevPlayer} Won the game`);
                 reset();
            }
       });
    }
    
    //reset the game after one won that game
    const reset=()=>{
        setBoard([
            '','','',
            '','','',
            '','',''
        ]);
        setPlayer("X");
        setLastindx(-1);
    }

    useEffect(()=>{
        checkWin();
    },[board]);

    return(
        <div> 
            <div className="board">
            {
                board.map((sq,i)=>{
                    return <div className="board_tiles" onClick={()=>{changeTile(i)}}>{sq}</div>
                })
            }
            </div>
            <p className="playerDetails">Current Player:&nbsp;&nbsp;{player}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Tictactoe;
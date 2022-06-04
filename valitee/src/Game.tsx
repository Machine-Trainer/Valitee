import React from 'react';
import './App.css';
import {Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Game() {
    const[user_win,setWinUser]=React.useState(0);
    const[machine_win,setWinMachine]=React.useState(0);
    const[user_answer,setValue]=React.useState("");
    const[status,setStatus]=React.useState(false);
    const[next,setNext]=React.useState(false);
    const[machine_answer,setAnswer]=React.useState("");
    let myInterval: string | number | NodeJS.Timer | undefined;
    function nextRound(){
        setNext(false);
        setAnswer("");
        setValue("");
        setStatus(false);
    }
    function fakeAI(){
        setStatus(true);
        let answer=["石头","剪刀",'布'];
        let res: React.SetStateAction<string>;
        myInterval=setInterval(()=>{
            res=answer[Math.floor(Math.random() * 3)];
            setAnswer(res);
        },100);
        setTimeout(() => {
            clearInterval(myInterval);
            if(user_answer===answer[0]){
                if(res===answer[1]){
                    //win
                    setWinUser(user_win+1);
                }else if(res===answer[2]){
                    //lost
                    setWinMachine(machine_win+1);
                }
            }else if(user_answer===answer[1]){
                if(res===answer[2]){
                    //win
                    setWinUser(user_win+1);
                }else if(res===answer[0]){
                    //lost
                    setWinMachine(machine_win+1);
                }
            }else{
                if(res===answer[0]){
                    //win
                    setWinUser(user_win+1);
                }else if(res===answer[1]){
                    //lost
                    setWinMachine(machine_win+1);
                }
            }
            setNext(true);
            },1000);
    }
    return (
        <div className="App">
            <div className="App-header">
                <span>你赢了 {user_win}次</span>
                <span>机器赢了 {machine_win}次</span>
                <Button onClick={()=>nextRound()} variant="primary" size="sm" disabled={!next}>下一轮</Button>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <span>机器选择: {machine_answer}</span>
                <Button onClick={()=>fakeAI()} variant="primary" size="sm" disabled={user_answer===""||status}>点击计算</Button>
                <span>你的选择: {user_answer}

                </span>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <Button onClick={()=>setValue("石头")} variant="primary" size="lg" disabled={status}>石头</Button>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <Button onClick={()=>setValue("剪刀")} variant="secondary" size="lg" disabled={status}>剪刀</Button>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <h1>  </h1>
                <Button onClick={()=>setValue("布")} variant="warning" size="lg" disabled={status}>布 </Button>
            </div>
        </div>
    );
}

export default Game;
import React, {useState} from 'react'

const Board = () => {

    const [playerScore, setPlayerScore] = useState(0);
    const [AIScore, setAIScore] = useState(0);
    const [draw, setDraw] = useState(0);
    const [turnOver, setTurnOver] = useState('Player');
    const [isDraw, setIsDraw] = useState(true);

    const [box, setBox] = useState([
        {   id : 1, value : ''},
        {   id : 2, value : ''},
        {   id : 3, value : ''},
        {   id : 4, value : ''},
        {   id : 5, value : ''},
        {   id : 6, value : ''},
        {   id : 7, value : ''},
        {   id : 8, value : ''},
        {   id : 9, value : ''},
        {   id : 10, value : ''},
        {   id : 11, value : ''},
        {   id : 12, value : ''},
        {   id : 13, value : ''},
        {   id : 14, value : ''},
        {   id : 15, value : ''},
        {   id : 16, value : ''}
        
    ]);

    const handleBoxValue = (e) => {
        
        // HANDLE FIELD VALUE
        if(e.target.disabled === false){
            turnOver === 'Player' ? setTurnOver('AI') : setTurnOver('Player')
            turnOver === 'AI' ? setTurnOver('Player') : setTurnOver('AI')
            setBox([...box].map((val) => {
                if(val.id === parseInt(e.target.id)){
                    val.value = turnOver
                    return val
                }
                return val
            }))
            e.target.disabled = true
            e.target.value = turnOver

            if(turnOver === 'Player'){e.target.style.backgroundColor = '#4ade80'; e.target.style.color = 'white'}
            if(turnOver === 'AI'){e.target.style.backgroundColor = '#f87171';  e.target.style.color = 'white'}
        }

        
        
        // TO DETERMINE IF ROUND IS ENDED AND DECIDE WHO WIN
        let one = box[0].value;let two = box[1].value;let three = box[2].value;let four = box[3].value;
        let five = box[4].value;let six = box[5].value;let seven = box[6].value;let eight = box[7].value;
        let nine = box[8].value;let ten = box[9].value;let eleven = box[10].value;let twelve = box[11].value;
        let thirteen = box[12].value;let fourteen = box[13].value;let fifteen = box[14].value;let sixteen = box[15].value;
        
         // HORIZONTAL RULE
        if((one !== '' && one === two) && (two === three) && (three === four)){ setIsDraw(false); handleScore(one) }
        else if((five !== '' && five === six) && (six === seven) && (seven === eight)){ setIsDraw(false);  handleScore(five) }
        else if((nine !== '' && nine === ten) && (ten === eleven) && (eleven === twelve)){ setIsDraw(false);  handleScore(nine) }
        else if((thirteen !== '' && thirteen === fourteen) && (fourteen === fifteen) && (fifteen === sixteen)){ setIsDraw(false); handleScore(thirteen)}

        //VERTICAL RULE
        else if((one !== '' && one === five) && (five === nine) && (nine === thirteen)){ setIsDraw(false); handleScore(one) }
        else if((two !== '' && two === six) && (six === ten) && (ten === fourteen)){ setIsDraw(false); handleScore(two) }
        else if((three !== '' && three === seven) && (seven === eleven) && (eleven === fifteen)){ setIsDraw(false); handleScore(three) }
        else if((four !== '' && four === eight) && (eight === twelve) && (twelve === sixteen)){ setIsDraw(false); handleScore(four) }

        // DIAGONAL RULE
        else if((one !== '' && one === six) && (six === eleven) && (eleven === sixteen)){ setIsDraw(false); handleScore(one) }
        else if((four !== '' && four === seven) && (seven === ten) && (ten === thirteen)){ setIsDraw(false); handleScore(four)}
    

        //  DETERMINE IF DRAW
        else {
            let hasMoveLeft = box.filter(e => e.value === '')
            if(!hasMoveLeft.length){
                if(isDraw){
                    handleScore(`Draw`)
                }
            }
        }
    }

    const handleScore = (winner) => {
        if(winner === 'Player'){ setPlayerScore(playerScore + 1) }
        if(winner === 'AI'){ setAIScore(AIScore + 1) }
        if(winner === 'Draw'){ setDraw(draw + 1) }
        
    }

    return (
        
    <div className="h-screen bg-slate-600 text-white flex flex-col gap-4 place-items-center justify-center">
            <div className='Scoring flex gap-8 text-2xl font-bold'>
                <div><label>Player : </label><span>{playerScore}</span></div>
                <div><label>AI : </label><span>{AIScore}</span></div>
                <div><label>Draw : </label><span>{draw}</span></div>
            </div>
            <div className='Turns'>
                <div>
                    <span className="text-xl">{`${turnOver}'s Turn`}</span>
                </div>
            </div>
            <div className='w-2/5 board-container gap-4 grid grid-cols-4 bg-black p-4 m-4'>
                    {
                    box.map((e) => {
                        return(
                            <input key={e.id} id={e.id? e.id : ''} className='text-black text-center py-8 cursor-pointer block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' type="text" onClick={handleBoxValue} />
                        )
                    })
                }
            </div>
    </div>
    )
}

export default Board

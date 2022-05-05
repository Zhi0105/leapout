import React, {useState} from 'react'
import Modal from 'react-modal';


const Board = () => {

    const [playerScore, setPlayerScore] = useState(0);
    const [AIScore, setAIScore] = useState(0);
    const [draw, setDraw] = useState(0);
    const [turnOver, setTurnOver] = useState('Player');
    const [isDraw, setIsDraw] = useState(true);
    const [announce, setAnnounce] = useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);

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

    // HANDLE SCORE
    const handleScore = (winner) => {
        if(winner === 'Player'){ setPlayerScore(playerScore + 1);
            setAnnounce('Player win');
            openModal() 
        }
        if(winner === 'AI'){ setAIScore(AIScore + 1);
            setAnnounce('AI win');
            openModal() 
        }
        if(winner === 'Draw'){ setDraw(draw + 1);
            setAnnounce('Draw game');
            openModal() 
        }
        
        
    }

    // HANDLE RESET
    const handleReset = () => {
        setPlayerScore(0)
        setAIScore(0)
        setDraw(0)
        
        setBox([...box].map((val) => {
            val.value = ''
            document.getElementById(val.id).style.backgroundColor = 'white'
            document.getElementById(val.id).disabled = false    
            return val
        }))

    }

    const handleRestart = () => {
        setBox([...box].map((val) => {
            val.value = ''
            document.getElementById(val.id).style.backgroundColor = 'white'
            document.getElementById(val.id).disabled = false    
            return val
        }))
    }
    
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            },
        };

            function openModal() {
                setIsOpen(true);
            }
            
            function closeModal() {
                setIsOpen(false);
                handleRestart()
            }
            

    return (
        
    <div className="min-h-screen p-4 bg-slate-600 text-white flex flex-col gap-4 place-items-center justify-center">
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
            <div className='w-2/5 lg:w-2/5 md:w-1/2 sm:w-full custom:w-full board-container gap-4 grid grid-cols-4 bg-black p-4 m-4'>
                    {
                    box.map((e) => {
                        return(
                            <input key={e.id} id={e.id? e.id : ''} className='text-black text-center py-8 cursor-pointer block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                            onChange={() => setBox([...box].map(i => { return i.value}))}
                            value={e.value}
                            type="text" onClick={handleBoxValue} />
                        )
                    })
                }
            </div>

            <div className='buttons flex gap-4 cursor-pointer'>
                <div className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" onClick={handleRestart}>
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Restart</span>
                </div>

                <div className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" onClick={handleReset}>
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Reset</span>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <div className='container flex flex-col gap-4 place-items-center justify-center'>
                    <h2 className='text-green-600 font-bold text-xl text-center'>{announce}</h2>
                    <div className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" onClick={closeModal}>
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">New game</span>
                    </div>
            </div>

            </Modal>
    </div>
    )
}

export default Board

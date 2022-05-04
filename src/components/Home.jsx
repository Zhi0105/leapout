import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen p-4 bg-slate-600 text-white flex flex-col gap-4 place-items-center justify-center">
      <div className="font-bold flex flex-col place-items-center">
        <div className="text-3xl">
          Welcome to Connect 4 Games
        </div>
        <div className="text-2xl">
          Leapout Developer Exam
        </div>
      </div>
      <h3 className="text-xl font-bold">Specification of the game:</h3>
      <div className="w-4/5 rounded-lg shadow flex flex-col place-items-center justify-center">
          <ul className="divide-y-1 divide-gray-100">
              <li className="p-3">Either player should be able to win by making 4 in a row in a vertical, horizontal, or diagonal (either direction) pattern.</li>
              <li className="p-3">The winner should be immediately announced once there is one, and no moves can be taken
              after.</li>
              <li className="p-3">It should be possible to reach a draw state. A draw state is when there is no possible move left
              for either player.
              </li>
              <li className="p-3">It should not falsely and/or prematurely declare a player as a winner or a draw.</li>
              <li className="p-3">Wins are saved on a scoreboard, per user</li>
              <li className="p-3">
              Make a computer player (AI) to play vs the player. Please note than an AI should not just choose
              a random move.
              </li>
              
          </ul>
      </div>
      <div className='py-5'>
          <a href="/board" className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Game start</span>
          </a>
      </div>
      <div className='py-5'>
        <span className='text-xl pt-5'>By : Argie Barcena</span>
      </div>
      
    </div>
  )
}

export default Home

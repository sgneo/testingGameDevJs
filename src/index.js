import Game from "./game"

window.GAME_DEBUGG = {}




const start = async () => {

  const game = new Game()

  await game.init()
  game.update()

}

start();

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    const list = document.createElement("ul");
    for(let i = 0; i < 3; i++) {
      for(let j =0; j < 3; j++) {
        const ele = list.appendChild(document.createElement("li"));
        ele.dataset.pos = `[${i},${j}]`;
      }
    }
    this.el.append(list);
  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    const thisSquare = e.target;
    // if (thisSquare.nodeName === 'LI') {
    //   this.makeMove(thisSquare);
    // }
    this.makeMove(thisSquare);
  }

  makeMove(square) {
    const pos = square.dataset.pos;
    const parsedPos = JSON.parse(pos);

    const playerMark = this.game.currentPlayer
    console.log(playerMark);


    this.game.playMove(parsedPos);

    square.innerText = playerMark;
    square.classList.add(playerMark);

    if (this.game.isOver()) {
      this.el.removeEventListener('click', this.handleClick);
      const winnerName = this.game.winner();
      const heading = document.querySelector("h1");
      heading.innerText = `Congratulations, ${winnerName}`;
    }
  }

}

module.exports = View;

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const list = document.createElement("ul");
    for(let i = 0; i < 3; i++) {
      for(let j =0; j < 3; j++) {
        const ele = list.appendChild(document.createElement("li"));
        ele.dataset.pos = `[${i},${j}]`;
      }
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;

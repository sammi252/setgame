function Card(number,color,shading,symbol){
    this.number  = number;
    this.color = color;
    this.symbol =  symbol;
    this.shade = shading;
}

function Deck() {
  this.number = [1,2,3]
  this.color  = ["red","purple","green"]
  this.shade = ["solid","stripe","empty"]
  this.symbol = ["diamond","pill","squiggle"]
  this.currentDeck = [];

  this.create_cards = function create_cards() {
    let count = 0;
    for(let i =0 ; i<3;i++){
      for(let j =0 ; j<3; j++){
        for(let k =0 ; k<3; k++){
          for(let l =0 ; l<3; l++){
            this.currentDeck[count]= new Card(this.number[i],this.color[j],this.shade[k],this.symbol[l]);
            count = count +1;
          }
        }
      }
    }
    return this.currentDeck;
  }
}






document.addEventListener("DOMContentLoaded",function(){

  let mydeck = new Deck();
  mydeck.create_cards();
  let pickacard = mydeck.currentDeck[80];

  document.getElementById("header").innerHTML = "Tech with simon !";

/*  let pi = document.getElementById("fob");
   pi.textContent = ' w==orld';*/
   let k = 0;
for(let i = 0; i < 4 ; i++) {
   let para1 = document.createElement('p');
   let para2 = document.createElement('p');
   let para3 = document.createElement('p');
   let para4 = document.createElement('p');
   let randomnum = Math.floor(Math.random() * 80) + 0;
   pickacard = mydeck.currentDeck[randomnum];
   let nod1 = document.createTextNode(`"${pickacard.color}" `);
   let nod2 = document.createTextNode(`"${pickacard.number}" `);
   let nod3 = document.createTextNode(`"${pickacard.shade}" `);
   let nod4 = document.createTextNode(`"${pickacard.symbol}" `);

   para1.appendChild(nod1);
   para2.appendChild(nod2);
   para3.appendChild(nod3);
   para4.appendChild(nod4);
   let element = document.getElementsByClassName("for");
   element[i].appendChild(para1);
   element[i].appendChild(para2);
   element[i].appendChild(para3);
   element[i].appendChild(para4);

}

});
/* console.log(pickacard.color);
 console.log(pickacard.number);
 console.log(pickacard.shade);
console.log(pickacard.symbol);
*/

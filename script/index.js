class Periodicity {
    constructor(text){
        this.text = text;
        this.textLength = 0;
    }

    textInfo (){
     			if(this.text.length < 1){
          return ;
         }
   			 this.textLength = this.text.split(/\s+/).length;
         let r = this.textLength;
    	   const wordArr = this.text.match(/\w+/g);	
         const obj = {};
         wordArr.forEach(function(el){
          let count = 1;
           for(let j = 0; j < r; j++){
            if(el == wordArr[j]) {
              obj[el] = count++;
            }
          }
        })
        return obj;
     }
     
     sumUp(obj){
        const textObj = {
        text: this.text,
        countOfWords: this.textLength
        };
        for(let  el in obj){
       		let freqen = (obj[el] / this.textLength * '100').toFixed(2) + '%';
          textObj[el] = {el};
          textObj[el]= `it appear ${obj[el]} times, which is ${freqen}`;
        }
        return textObj;
     }
}

let btnAnalyze = document.querySelector('.analyze');
btnAnalyze.addEventListener('click', function(){
	let str = document.querySelector('textarea').value;
	const period = new Periodicity(str);
	let result = period.sumUp( period.textInfo ());
  let block = document.querySelector('div');
  
  for(let el in result){
  	 let textnode = document.createElement('p');
     let t = document.createTextNode(`${el}: ${result[el]}`);
     textnode.appendChild(t);
  	 block.appendChild(textnode);
  }
  let btnClear = document.querySelector('.clear');
  btnClear.addEventListener('click', function(){
  	document.querySelector('textarea').value = '';
    block.innerHTML ='';
	})
})



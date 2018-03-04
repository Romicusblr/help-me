module.exports = function count(s, pairs) {

  const nod = (a,b) => {
    if(!a||!b) {
      return 0;
    }
    if (a<b){
      nod(b,a)
    }
    let r = a%b;
    if(r){
      return nod(b,r);
    } else {
      return b;
    };
  };

  let n = pairs.reduce((accum, curr, ind) => {
    return accum * Math.pow(curr[0], curr[1])
  },1);

  let counter = 0; 
  let length = s.length;
  for(let k = 0; k<=n; k++) {
    let mask = '';
    //make mask where 1 means nod === 1 , 0 means nod !== 1;
    for(j=0; j<length;j++){
      if(!k&&!j)break;
      if(nod(n,k+j) === 1){
        mask+="1"
      } else {
        mask+="0"
      }
    }
    if(!(mask^s)){
      counter++;
    }
  }
  return counter;
}
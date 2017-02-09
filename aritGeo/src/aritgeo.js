function aritGeo(arr) { 
if (arr.length == 0){
  return 0;
}
var minus = arr[1] - arr[0], divide = arr[1] / arr[0], arith = true, geo = true;

for(var i = 0; i < arr.length - 1; i++){
    if( arr[i + 1] - arr[i] !== minus ) arith = false;
    if(arr[i + 1] / divide !== arr[i]) geo = false;
}
if(arith === true)return 'Arithmetic';
else if(geo === true)return 'Geometric';
else return -1;
}

module.exports = aritGeo;
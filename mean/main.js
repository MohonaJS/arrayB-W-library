function sum(text){
    let result = 0;
    for(let i =0; i<=text.length; i++){
       result = result + i / text.length;

    }
    return result;
}
console.log(sum([2,2,2]));
function excl(arr,element){
    let result = [];
    for(let ar of arr){
        if(ar != element){
            result.push(ar);

        }
    }
    return result;
}
console.log(excl([2,2,3], 2)); 


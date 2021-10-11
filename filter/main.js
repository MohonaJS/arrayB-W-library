function filte(arr,valu){
    let result = [];
    for(let ar of arr){
        if(ar == valu){
            result.push(ar);

        }
    }
    return result;
}
console.log(filte([2,2,3], 2)); 


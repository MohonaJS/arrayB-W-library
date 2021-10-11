function reverseStri(array){
    let result = array.toString("").split("").reverse(array).join("");
    return result;
}
console.log(reverseStri(["apel","komola","malta"]));

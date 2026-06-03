function removeDuplicateValues(num){
    for(let i=0;i<num.length-1;i++)
        if(num[i]==num[i+1])
            num.splice(i,1);
    return num;
}
// console.log(removeDuplicateValues([1,2,2,3,4,4,5]));

//Q1. Create a function that returns the sum of two numbers.
function add(a = 0, b = 0){
    return a + b;
}
// console.log(add(10,20));

//Q2. Create a function that returns the square of a number.
function square(a = 0){
    return a * a;
}
// console.log(square(5));

//Q3. Create a function that checks whether a number is Even or Odd.
function checkEvenOdd(num){
    if(num % 2 == 0)
        return "Even";
    else
        return "Odd";
}
// console.log(checkEvenOdd(7));

//Q4. Create a function that returns the larger number among two numbers.
function max(a,b){
    if(a>b)
        return a;
    else
        return b;
}
// console.log(max(10,20));

//Q5. Create a function that checks if a person is eligible to vote.
function isEligible(age){
    if(age>=18)
        return "Yes eligible to vote";
    else
        return "Not eligible to vote";
}
// console.log(isEligible(18));

        // Part 2: Loops
//Q6. Print numbers from 1 to 50 using a loop.
// for(let i=0;i<=50;i++)
//     console.log(i);

//Q7. Print all even numbers between 1 and 100.
// for(let i=0;i<=100;i++){
//     if(i%2 == 0)
//         console.log(i);
// }

//Q8. Find the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i=0;i<=100;i++){
//     sum+=i;
// }
// console.log(sum);

//Q9. Print the multiplication table of a number.
// for(let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//Q10. Count how many digits are present in a number.
function countDigits(num){
    let count =0;
    while(num!=0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
// console.log(countDigits(12345));

        //Part 3: Strings
// Q11. Reverse a string.
function reveseString(str){
    let str1 = "";
    for(let i =str.length-1;i>=0;i--)
        str1 = str1 + str[i];
    return str1;
}
// console.log(reveseString("hello"));

//Q12. Count vowels in a string.
function countVowels(str){
    let vowels = "aeiouAEIOU";
    let i = str.length -1;
    let count =0;
    while(i>=0){
        if(vowels.includes(str[i]))
            count++;
        i--;
    }
    return count;
}
// console.log(countVowels("javascript"));

//Q13. Check whether a string is a palindrome.
function isPalindrome(str){
    let rev = "";
    for(let i = str.length-1;i>=0;i--){
        rev = rev + str[i];
    }
    if(str == rev)
        return true;
    else 
        return false;
}
// console.log(isPalindrome("madam"));

//Q14. Convert the first letter of every word to uppercase.
function capitalize(str){
    str = str.trim();
    let rev = "";
    for(let i=0;i<str.length;i++){
        if(i==0)
            rev = rev + str.charAt(0).toUpperCase();
        else if(str[i]== " "){
            rev = rev + " ";
            rev = rev + str.charAt(i+1).toUpperCase();
            i++;
        }
        else
            rev+=str[i];
    }
    return rev;
}
// console.log(capitalize("  hello world   "));

// Q15. Count how many times a character appears in a string.

function  countChar(word , char){
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] == char)
            count++;
    }
    return count;
}
// console.log(countChar("javascript","a"));

    //Part 4: Arrays
//Q16. Find the largest number in an array.
function maxNumber(num){
    let max = num[0];
    for(let i=1;i<num.length;i++)
        if(num[i]>max)
            max=num[i];
    return max;
}
// console.log(maxNumber([10,20,30,40,50]));

//Q17. Find the smallest number in an array.
function minNumber(num){
    let min = num[0];
    for(let i=1;i<num.length;i++)
        if(num[i]<min)
            min=num[i];
    return min;
}
// console.log(minNumber([10,20,30,40,50]));

//Q18. Find the sum of all array elements.
function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    return sum;
}
// console.log(sumOfArray([1,2,3,4,5]));

//Q19. Return only even numbers from an array.
function evenNumberInArray(num){
    let arr = []
    for(let i=0;i<num.length;i++)
        if(num[i]%2 == 0)
          arr.push(num[i]);
    return arr;
}
// console.log(evenNumberInArray([1,2,3,4,5,6]));

//Q20. Remove duplicate values from an array.
function removeDuplicateValues(num){
    for(let i=0;i<num.length-1;i++)
        if(num[i]==num[i+1])
            num.splice(i,1);
    return num;
}
// console.log(removeDuplicateValues([1,2,2,3,4,4,5]));

//🎯 Bonus Task (For Fast Learners)
//Build a Student Marks Calculator.
function marksCalculator(marks){
    let total = 0;
    for(let i=0;i<marks.length;i++){
        total+=marks[i];
    }
    let average = total/marks.length;
      let highest=marks[0];
    for(let i=1;i<marks.length;i++){
        if(marks[i]>highest)
            highest=marks[i];
    }

    let lowest = marks[0];
     for(let i=1;i<marks.length;i++){
        if(marks[i]<lowest)
            lowest=marks[i];
    }
    console.log("Highest Marks :",highest);
    console.log("Lowest Marks :",lowest);
    console.log("Average Marks :",average);
    console.log("Total Marks :",total);

}
marksCalculator([50, 60, 70, 80, 90])








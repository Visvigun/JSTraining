
// print the pramid follows
// n = 5
// 1*
// 2**
// 3***
// 4****
// 5*****

// let b=5
// let cx=""
// for (let i=1; i<=b;i++){
//     cx += i
//     for(let j=0; j<i;j++){
//         cx +=  "*" 
       
//     }
    
//     cx +=  "\n" 
    
// }
// console.log(cx)

// let n=5
// let u=""
// for(let i=1; i<=n;i++){
//     u += i
//     for(let j=1;j<=i;j++){
//         u +="*"
//     }
//     u += n
//     u +="\n"
//     n--
// }

// console.log(u)



//2 246
// let d=4
// let k=""

// for(let i=1;i<=d;i++){
//     //  k +="1"
  
//     for(let j=1;j<i;j++){
//         k += j*2 ;
//     }
//     k +="\n"
    
// }
// console.log(k)




// let g=5
// let u=""
// for(let i=1;i<=g;i++){
//     u += i
//     for(let j=0;j<i;j++){
//         u +="*"
       
//     }
//     u += (g-i+1)
//     u +="\n"
// }
// console.log(u)



console.log("--------------------Q6----------------")
// question 6) iterate the array and print all elements one by one
// let arr = [1, 2, 3, 4, 5]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// console.log("--------------------Q7----------------")
// // question 6) iterate the array and print all elements one by one
// let arr = [1, 2, 3, 4, 5]
// let string=""
// for(let i=0;i<arr.length;i++){
//     string += arr[i]
   
// }
//  console.log(string)


//-------------------------------


// question 3) Return a number which is not the largest or smallest
arr = [1, 1, 2, 3, 4, 5]
let ans=1
let largest=0
let smallest=Number.MAX_VALUE;
for(let i=0;i<arr.length;i++){
    if(arr[i] >largest){
        largest= arr[i]
    }
    if(arr[i] <smallest){
        smallest= arr[i]
    }
}
for(let i=0;i<arr.length;i++){
    if(largest>arr[i]  && arr[i]>smallest ){
        // console.log(i)
        ans = arr[i]
        break
       
    }
}
console.log(ans)

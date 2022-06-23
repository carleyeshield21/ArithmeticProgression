// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

function findMissing(list) {  
  console.log(`In the array [${list}]`)
  arr = []
  for(i=1; i<=list.length-1; i++){
    // console.log(list[i], list[i-1])
    arr.push(list[i] - list[i-1])
  }
  let arruniq = [...new Set(arr)];

  let arr1 = []
  for(i=0; i<=arruniq.length-1; i++){
    let counter = 0
    let j = 0
    while(j<=arr.length-1){
      if(arruniq[i] == arr[j]){
        counter++
        // console.log(arruniq[i], arr[j], counter)
      }
      j++
    }
    arr1.push([arruniq[i],counter])
    // console.log('========')
    // console.log(`${arruniq[i]}, ${counter}`)
  }
  // console.log(arr1)
  if(arr1[0][1] > arr1[1][1]){
    prog = arr1[0][0]
  } else {
    prog = arr1[1][0]
  }
  // console.log(prog)

  for(i=1; i<=list.length-1; i++){
    // console.log(list[i], list[i-1])
    if(list[i] - list[i-1] != prog){
      num = list[i-1] + prog
      // console.log(i)
      break
    }
  }
  console.log(`The missing number in the progression is ${num}`)
  list.splice(i,0,num)
  console.log(`The correct number progression is:\n[${list}]`)

}
findMissing([1, 3, 5, 9, 11])
console.log('========')
findMissing([1, 3, 4])
console.log('========')
findMissing([1, 5, 9, 13, 17, 21, 29, 33])
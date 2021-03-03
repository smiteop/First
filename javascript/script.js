document.write("hellow world")
function test(){
    console.log("this is a function")


}

test()
test()

function greetings(msg){    //fisrt one hello all vannu pine function nu value koukumbam aaa values vernunu
    console.log("hello all",msg)

}
greetings ("have a gudday")
greetings("gudmng")
greetings()// without value js will print undefined  ..there wont be any error


function add(a,b){
    let sum= a + b
    console.log(sum)
    return sum    //used to take values from a function
}
let result=add(23,5)
console.log(result)
console.log(add(3,4))
//console.log(sum)
//add(12,2)
//add(22,8)


//loops

for(let i=1;i<10;i+=2){

    if(i==3){
        continue
    }
    console.log(i)
}


//break to exit from the loop 
//continue used to skip current iteration


//let k=0
//while(k<2){
  //  console.log(k)
//}


function av(a,b,c){
    return (a+b+c)/3
}
console.log("av",av(10,15,25))







//anonymous function - function without name onl ypossible in js
let demo=function(){
    console.log(demo)
}
console.log(demo)
demo()
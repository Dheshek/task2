function a1(){
    return new Promise((resolve,reject)=>{
        let datas =true;
        if(datas){
        resolve("resolve 1");
        }
         else{
            reject("reject 1");
         }
        
    })
}
function a2(){
    return new Promise((resolve,reject)=>{
        let datas =true;
        if(datas){
        resolve("resolve 2");
        }
         else{
            reject("reject 2");
         }
        
    })
}
function a3(){
    return new Promise((resolve,reject)=>{
        let datas =true;
        if(datas){
        resolve("resolve 3");
        }
         else{
            reject("reject 3");
         }
        
    })
}
//a1().then((output)=>{console.log(output); a2()})
  //  .then((output)=>{console.log(output); a3()})
    //.then((output)=>{console.log(output);})
    //.catch((output)=>console.log(output))//catch is used to print the rejected error statement 

async function dog() 
{
    try{
        let [a,b,c]= await Promise.all([a1(),a2(),a3()])
        console.log(a)
        console.log(b)
        console.log(c)
    }
    catch{
        
    }
}

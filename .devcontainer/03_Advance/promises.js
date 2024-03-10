/**const promise1=new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, crypto, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promise3=new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username:"Jeus", email:"zeusking@xyz"})
    }, 1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function (resolve, reject){
    setTimeout(function () {
        let error=true
        if (!error) {
            resolve({username:'Abhi', password:'zxy'})
        }else{
            reject('ERROR')
        }
    }, 1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Something has happened");
})**/

const promise5=new Promise(function(resolve, reject){
    setTimeout(function () {
        let error=true
        if (!error) {
            resolve({username:'Zeus', password:'zxy'})
        }else{
            reject('ERROR')
        }
    }, 1000)
});

async function consumePromise5(){
    try {
        const response=await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()
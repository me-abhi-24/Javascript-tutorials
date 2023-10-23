// Immediately Invoke Function XPathExpression(IIFE)

(function chai() {
    //named IIFE the IIFE function which contain name
    console.log("Hi");
})();
//it is important to write ';' at the end of IIFE statement to write another IIFE function or statement

(()=>{
    //unamed IIFE
    console.log(`hello`);
})();
//way to use IIFE with variables
((name)=>{
    console.log(`hello ${name}`);
})("Abhi")
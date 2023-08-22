const but_req_advice=document.querySelector("#but_req_advice")
const advice_description=document.querySelector(".advice-description")
const URL_api="https://api.adviceslip.com/advice";
const n_advice=document.querySelector(".n_advice")
console.log( advice_description.textContent);
//antes de ECMAScript 6 
const xhr=new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        //0 unset no se ha llamado al metodo open
        //1 opened se ha llamdo al metodo open.
        //2 headers_received s esta llamando al metodo send()
        //3 loading, s4e esta cargando, es decir, esta recibiendo la respuesta.
        //4 done, se ha completado la operaciòn.
        const data=JSON.parse(this.response)
        console.log(data.slip.advice);
        advice_description.textContent=`"${data.slip.advice}"`
        n_advice.textContent=`#${data.slip.id}`
        
    }
}
but_req_advice.addEventListener("click",()=>{
xhr.addEventListener("load",onRequestHandler)
xhr.open("GET",URL_api)
xhr.send()    
})




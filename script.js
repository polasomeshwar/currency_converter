document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#converter").addEventListener("submit",(event)=>{
        event.preventDefault();
        const {target :{from,to,amount}} = event;
        let headers = new Headers();
        headers.append("apikey","DcL793uYNT0ZG7xGj5HVg26928PVbytm");
        let requestOptions = {
            method : "GET",
            headers,
        }
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`,requestOptions)
        .then(response=>response.json())
        .then(data=>{
            let {query,from,result} = data;
            document.querySelector("#resu").textContent = `After Conversion = ${result} ${query.to}`;
        });
    })
});
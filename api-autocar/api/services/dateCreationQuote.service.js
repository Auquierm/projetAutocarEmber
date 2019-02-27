exports.createDateQuote = () =>{
    let day = new Date().getDate();
    let month = (new Date().getMonth())+1;
    if(day <=9){
        day = "0"+day;
    }
    if(month <=9){
        month = "0"+month
    }
    return day+"/"+month+"/"+new Date().getFullYear();
};


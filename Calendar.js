let year=0,days=0,startingday=null;

function Yearinput(){
    year=Number(document.getElementById("YearInput").value);
    StartingDayFinder();
    console.log(startingday);
}

function StartingDayFinder(){

    for(let i=0;i<year;i++){
        if(IsLeap(i)==true){
            days=days+366;
        }
        else{
            days=days+365;
        }
    }
    startingday=days%7;

}

function IsLeap(yearrr){
    if((yearrr%100)==0){
        if((yearrr%400)==0){
            return true;
        }
        else{
            return false;
        }
    }
    else if((yearrr%4)==0){
        return true;
    }
    return false;
}
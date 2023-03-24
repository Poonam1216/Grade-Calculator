const calculator = ()=>{

    let english = document.getElementById('english').value;
    let maths = document.getElementById('maths').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let computer = document.getElementById('computer').value;
    // console.log(english);
    let grades = "";
    


    let totalgrades = parseFloat(english)+ parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer);

    document.getElementById("total").innerHTML = "Total Marks:" + totalgrades;

    let average = (totalgrades/500)*100;
    document.querySelector("#average").innerHTML = `Your Average marks are: ${average}`
    if(average <= 100 && average >= 90 ){
        grades = "A";   
    }
    else if(average<=89 && average>= 80){
        grades = "B";   
    }
    else if(average<=79 && average>= 70){
        grades = "C";   
    }
    else if(average<=69 && average>= 60){
        grades = "D";
    }else{
        grades = "F";
    }

    if(english == ""|| maths == "" || physics == "" || chemistry == "" || computer == ""){
        document.getElementById("showdata").innerHTML = "Please enter all the fields!";
    } else if(english > 100 || maths > 100 || physics > 100 || chemistry > 100 || computer > 100){
        document.getElementById("showdata").innerHTML = "Please enter marks in range of 100";
    }
    else{
        if(average >= 60){
            document.getElementById("grade").innerHTML = `You Got ${grades} Grade`;
        }
    }
};
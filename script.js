function getAverage(x){
    var y = x.split(",");
    for(var i =0; i<y.length; i++){
        y[i]= parseFloat(y[i])
    }
    var sum = 0;
    for(var z = 0; z<y.length; z++){
        sum += y[z]
    }
    sum= sum/y.length;
    return sum
}
function getColor(x){
   if(x>=90){
        return "green"
   }else if(x>=80){
       return "yellow"
   }else if(x>=70){
       return "orange"
   }else if(x>=60){
       return "red"
   }else{
       return"blue"
   }
}

function onSubmit(){
    document.getElementById("t").style.backgroundColor = "mediumaquamarine";
    document.getElementById("q").style.backgroundColor = "mediumaquamarine";
    document.getElementById("p").style.backgroundColor = "mediumaquamarine";
    document.getElementById("c").style.backgroundColor = "mediumaquamarine";
    document.getElementById("h").style.backgroundColor = "mediumaquamarine";
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("finalGrade").innerHTML = "";
    var testWeight= getAverage(document.getElementById("testWeight").value);
    var quizWeight = getAverage(document.getElementById("quizWeight").value);
    var proWeight = getAverage(document.getElementById("projectWeight").value);
    var classWeight = getAverage(document.getElementById("classworkWeight").value);
    var homeWeight = getAverage(document.getElementById("homeworkWeight").value);
    var finalWeight= getAverage(document.getElementById("finalWeight").value);
    var desiredGrade= getAverage(document.getElementById("desiredGrade").value);
    var weightSum = testWeight+quizWeight+classWeight+proWeight+finalWeight+homeWeight;

    var testC = getAverage(document.getElementById("testScores").value);
    var quizC = getAverage(document.getElementById("quizScores").value);
    var proC = getAverage(document.getElementById("projectScores").value);
    var classC = getAverage(document.getElementById("classworkScores").value);
    var homeC = getAverage(document.getElementById("homeworkScores").value);

    var testUn = getAverage(document.getElementById("testScores").value) * (testWeight/100);
    var quizUn = getAverage(document.getElementById("quizScores").value) * (quizWeight/100);
    var proUn = getAverage(document.getElementById("projectScores").value) * (proWeight/100);
    var classUn = getAverage(document.getElementById("classworkScores").value) * (classWeight/100);
    var homeUn = getAverage(document.getElementById("homeworkScores").value) * (homeWeight/100);
    var un= testUn + quizUn + proUn + classUn + homeUn;
    var finalGrade = ((desiredGrade-un)/finalWeight*100);

    var testW = testUn/((100-finalWeight)/100);
    var quizW = quizUn/((100-finalWeight)/100);
    var proW = proUn/((100-finalWeight)/100);
    var classW = classUn/((100-finalWeight)/100);
    var homeW = homeUn/((100-finalWeight)/100);
    var currentGrade = (testW + quizW + proW + classW + homeW);



    if (isNaN(weightSum)){
        document.getElementById("currentGrade").innerHTML = "Please make sure your weights are entered correctly/as numbers only."
    }else if (isNaN(un)){
        document.getElementById("currentGrade").innerHTML = "Please make sure your grades are entered correctly, refer to top of page for instructions."
    }else if (isNaN(desiredGrade)){
        document.getElementById("currentGrade").innerHTML = "Please make sure your desired grade is entered correctly, as a number with no spaces "
    }else if (testWeight+quizWeight+proWeight+classWeight+homeWeight+finalWeight!= 100) {
        document.getElementById("currentGrade").innerHTML = "Please make sure your weights add up to 100";


    //}else if (){

    }else{
        document.getElementById("t").style.backgroundColor = getColor(testC);
        document.getElementById("q").style.backgroundColor = getColor(quizC);
        document.getElementById("p").style.backgroundColor = getColor(proC);
        document.getElementById("c").style.backgroundColor = getColor(classC);
        document.getElementById("h").style.backgroundColor = getColor(homeC);
        document.getElementById("currentGrade").innerHTML = "Your Current Grade is: " + currentGrade.toFixed(2) + "%";
        document.getElementById("finalGrade").innerHTML = "You need a " + finalGrade.toFixed(2) + "%";
    }
}



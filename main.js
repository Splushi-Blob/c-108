dog=0;
cat=0;
cow=0
lion=0

img_source="ear image.png"
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true})
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OQm3whA2Z/model.json',modelReady )
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){
console.log("Got Result")
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) +1;
    random_number_g = Math.floor(Math.random() * 255) +1;
    random_number_b = Math.floor(Math.random() * 255) +1;


    document.getElementById("number_audio").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("name_audio").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("number_audio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("name_audio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    if (results[0].label == "barking") {
        img_source="dog.jpg"
    } else if(results[0].label == "meowing"){
        img_source="cat.jpg"
    } else if (results[0].label == "mooing"){
        img_source="cow.jpg"
    } else {
        img_source="lion.jpg"
    }
}
}
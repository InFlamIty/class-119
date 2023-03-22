function setup()
{
    canvas = createCanvas(300 , 300)
    canvas.center()
    background("white")
    canvas.mouseReleased(realesed)
    synth = window.speechSynthesis

}
function clearCanvas()
{
    background("white")
}
function draw()
{
    stroke("black")
    strokeWeight(2)
    if (mouseIsPressed) {
        line(pmouseX , pmouseY , mouseX , mouseY)
    }
}
function preload()
{
    classifier = ml5.imageClassifier("DoodleNet")
}
function realesed()
{
    classifier.classify(canvas , gotResult)
}
function gotResult(error , results)
{
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("label").innerHTML = "label : " + results[0].label
        document.getElementById("confidence").innerHTML = "confidence : " + Math.round(results[0].confidence * 100) + "%"
        speech = new SpeechSynthesisUtterance(results[0].label)
        synth.speak(speech)
    }
}
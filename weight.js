//document.getElementById('Output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input',function(e){
    //document.getElemetById('Output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ounOutput').innerHTML = lbs*16;
    });
    
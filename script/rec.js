function recArea(){
    const recWeidth = document.getElementById('rec-weidth');
    const weidthText = recWeidth.value;
    const width = parseFloat(weidthText); 
    
    const recHeight = document.getElementById('rec-height');
    const heightText = recHeight.value;
    const height = parseFloat(heightText);
    
    const area = width * height;

    document.getElementById('rec-area').innerText = area;
    console.log(height);
}
$(document).ready(function(){
    const container = document.getElementById('container');
    const squares = 500;
    const colors = ['#f03434', "#f1828d", "#9a12b3", "#22a7f0", "#00e640", "#f5e51b", "#ffcb05", "#67809f"];

    for (var i = 0; i < squares; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        $(square).mouseover(function(){
            setColorToEl(square);
        });

        $(square).mouseout(function(){
            removeColorFromEl(square);
        });
        //JS
        // square.addEventListener("mouseover", () =>{
        //     setColorToEl(square);
        // });

        //JS
        // square.addEventListener("mouseout", () =>{
        //     removeColorFromEl(square);
        // });

        container.appendChild(square);
    }

    function setColorToEl(element) {
        const color = getRandomColor();

        $(element).css('background', color);
        $(element).css('box-shadow', `0 0 2px ${color}, 0 0 50px ${color}`);

        //JS
        // element.style.background = color;
        // element.style.boxShadow = `0 0 2px ${color}, 0 0 50px ${color}`;
    }

    function removeColorFromEl(element){
        $(element).css('background', '#1d1d1d');
        $(element).css('box-shadow', `0 0 2px #000`);

        //JS
        // element.style.background = "#1d1d1d";
        // element.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
function calculator(e){

    const result = document.getElementById('equal');
    const reset = document.getElementById('reset');
    const display = document.getElementById('display');
    const del = document.getElementById('del')
    const buttons = document.querySelectorAll('.button')
    const togB = document.getElementById('tog-b')
    const calculato = document.querySelector('.calculator')
    

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            //console.log(value);
            display.innerHTML += value
        })
    });


    result.addEventListener('click',function(e){
        if(display.innerHTML === ''){
            display.innerHTML = ''
        }else{
            let answer = eval(display.innerHTML)
            const string = answer.toString()
            if(string.length > 12){
                display.innerHTML = Number(string).toFixed(12)
            }else{
                display.innerHTML = string
            }
        }
    })

    reset.addEventListener('click',function(e){
        display.innerHTML = ''
    })

    del.addEventListener('click',function(e){
        display.innerHTML = display.innerHTML.slice(0,-1)
    
    })

    let count = 0;
    togB.addEventListener('click',function(e){
     if(count === 0){
        document.body.style.backgroundColor = 'hsl(224, 28%, 35%)'
        togB.style.transform = 'translateX(0px)'
        calculato.classList.remove('purple-bg')
        count ++;
     }else if(count === 1){
        document.body.style.backgroundColor = 'hsl(0, 0%, 93%)'
        calculato.classList.toggle('white-bg')
        togB.style.transform = 'translateX(20px)';
        count ++;
        /*calc.style.color = '#000'
        themeText.style.color = '#000'
        themeNum.forEach(function(e){
            e.style.color = '#000'
        })
        display.style.backgroundColor = 'hsl(0, 0%, 100%)'
        display.style.color = 'hsl(224, 36%, 15%)'
        togB.style.transform = 'translateX(20px)';
        togB.style.backgroundColor = 'hsl(25, 98%, 40%)'
        togB.style.boxShadow = '1px 2px 4px hsl(25, 99%, 27%)'
        value.style.backgroundColor = 'hsl(45, 7%, 89%)'
        buttons.forEach(function(button){
            button.style.backgroundColor = 'hsl(0, 5%, 81%)'
        })
        del.style.backgroundColor = 'hsl(185, 42%, 37%)'
        del.style.boxShadow = '1px 2px 4px hsl(185, 58%, 25%)'
        reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
        reset.style.boxShadow = '1px 2px 4px hsl(185, 58%, 25%)'
        result.style.backgroundColor = 'hsl(25, 98%, 40%)'
        result.style.boxShadow = '1px 2px 4px hsl(25, 99%, 27%)'
        count ++;*/
     } else if(count === 2){
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
        togB.style.transform = 'translateX(40px)';
        calculato.classList.remove('white-bg')
        calculato.classList.add('purple-bg')
        count = 0;
     }
})

}

calculator();


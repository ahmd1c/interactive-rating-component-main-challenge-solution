let linums = document.getElementsByTagName('li');
let listnums = document.getElementById('numbers');
let btn = document.getElementById('submit');
let second = document.getElementById('second');
let first = document.getElementById('first');
let rating = document.getElementById('rating');


let linumsarr = [...listnums.children]

listnums.addEventListener('click',(e)=>{
    
    e.preventDefault();

    if(e.target.tagName==='LI'){

        linumsarr.forEach((el)=>{

            el.classList.remove('active')
        })
        e.target.classList.add('active');

        btn.value = e.target.innerText

    }    
})

btn.addEventListener('click',(e)=>{

    e.preventDefault();

    if(btn.value!=''){

        second.style.display='flex';

        first.style.display='none';

        rating.innerText=`You selected ${btn.value} out of 5`
    }else{

        alert('please choose a number');
    }
    
})
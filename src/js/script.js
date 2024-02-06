// dark mode toggle

const toastToggle = document.querySelector('#toastToggle'); 

toastToggle.addEventListener('click', function (){
    alert('Success');
});

// 

const darkToggle = document.querySelector('#checkbox');
const html = document.querySelector('.boks');
const luar = document.querySelector('.luar');
darkToggle.addEventListener('click', function () {
    if ( darkToggle.checked) {
        html.classList.add('dark');
        luar.classList.add('darkT');
    }else{
        html.classList.remove('dark');
        luar.classList.remove('darkT');
    }
});
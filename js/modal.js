function toggleModal(modal){
    console.log(modal.style.height);
    if(modal.style.height == '0px' || modal.style.height == ''){
        modal.style.height = '100vh';
        document.querySelector('main').style.filter = 'brightness(50%)';
        document.querySelector('body').style.backgroundColor = 'rgb(115, 115, 115)';
    }
    else{
        modal.style.height = '0px';
        document.querySelector('main').style.filter = 'brightness(100%)';
        document.querySelector('body').style.backgroundColor = 'rgb(231, 231, 231)';
    }
}
function toggleCollapse(){
    const collapse = document.querySelector('.collapse');
    if(collapse.style.height == '100vh'){
        collapse.style.height = '0';
    }else{
        collapse.style.height = '100vh';
    }
}
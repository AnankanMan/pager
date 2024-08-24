const init = () => {
    const list = document.querySelectorAll('#detail');
    console.log(list);
    for(const el of list){
        el.classList.add('close');
    }
}

const toggle = (div) => {
    const _div = document.querySelector(`#${div}`);
    const el = _div.querySelector('#detail');
    el.classList.toggle("close");
}
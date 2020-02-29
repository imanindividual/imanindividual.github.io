let startX = 0;
let latestX = 0;
let page = 0;
let max = 2;
let min = 0;
window.onload = () => {
    window.addEventListener('touchend', (e) => {
        const coordinates = e.changedTouches[0];
        latestX = coordinates.clientX;
        isRightMove(startX, latestX);
        isLeftMove(startX,latestX);
    });
    window.addEventListener('touchstart', (e) => {
        const coordinates = e.changedTouches[0];
        startX = coordinates.clientX;
    });
}

const isRightMove = (start, next) => {
    if(start - next > 10 && start - next > 0){
        if(max !== page){
            page++;
        }
        const view = document.getElementById(page+1);
        view.scrollIntoView();
    }
}

const isLeftMove = (start, next) => {
    if(start - next < 10 && start - next < 0){
        if(min !== page){
            page--;
        }
        const view = document.getElementById(page+1);
        view.scrollIntoView();
    }
}
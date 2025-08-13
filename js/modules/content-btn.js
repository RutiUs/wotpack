const contentBtn = document.querySelector('.content__btn');

if(contentBtn) {
    contentBtn.addEventListener('click', hideBtnContent);
}

function hideBtnContent() {
    const content = document.querySelector('.content__inner');
    content.classList.toggle('content__inner-close');
    contentBtn.classList.toggle('content__btn-static');

    if(content.classList.contains('content__inner-close')) {
        contentBtn.textContent = 'Открыть';
    } else {
        contentBtn.textContent = '[ Скрыть ]';
    }
};

export default contentBtn;
let search = [
    'Герои',
    'Гайды',
    'Что-нового',
    'Донат',
    'Другое',
    'Программирование',
    'Герой по имени Хан',
    'Html за 5 часов',
    'Css без воды',
    'Javascript'
];

const resultBoxes = document.querySelectorAll('.result-box');
const searchBox = document.querySelectorAll('.search');
const searchBtn = document.querySelector('.header__form-btn');
const searchContent = document.querySelector('.header__form-search');
const closeSearch = document.querySelector('.close__icon');


searchBox.forEach(inputBox => {
    inputBox.onkeyup = function() {
        let result = [];
        let input = inputBox.value;

        if (input.length) {
            result = search.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
            
            console.log(result);
        }

        display(result);

        if (!result.length) {
            resultBoxes.forEach(resultBox => {
                resultBox.textContent = '';
            })
        }
    }
});

function display(result) {
    const ul = document.createElement('ul');

    result.forEach(list => {
           const li = document.createElement('li');
           li.className = 'result__item';
           li.textContent = list;
           li.onclick = () => selectInput(li);
           ul.appendChild(li);
       });

       resultBoxes.forEach(resultBox => {
            resultBox.innerHTML = "";
            resultBox.appendChild(ul)
       })
}

function selectInput(list) {
    searchBox.forEach(inputBox => {
        inputBox.value = list.textContent;
        resultBoxes.forEach(resultBox => {
            resultBox.textContent = '';
        })
    })
};

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    searchContent.classList.add('header__form-search--active');
});

closeSearch.addEventListener('click', (e) => {
    e.preventDefault();
    searchContent.classList.remove('header__form-search--active');
})


export default search
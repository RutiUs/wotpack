const moduleTabs = (tabItem, content, parent, activeClass, titleSelector = '.games__title') => {
    const tabs = document.querySelectorAll(tabItem);
    const tabsContent = document.querySelectorAll(content);
    const tabParent = document.querySelector(parent);
    const titleEl = document.querySelector(titleSelector);

    function hideTabContent() {
        tabsContent.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function getTitleForIndex(i) {
        if (tabs[i].dataset && tabs[i].dataset.title) {
            return tabs[i].dataset.title.trim();
        }
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabsContent[i].style.display = 'grid';

        if (titleEl) {
            const newTitle = getTitleForIndex(i);
            if (newTitle) {
                titleEl.textContent = newTitle;
            }
        }
    }

    hideTabContent();
    showTabContent();

    if (tabParent) {
        tabParent.addEventListener('click', (event) => {
            // безопасно ищем ближайший элемент, соответствующий селектору tabItem
            const clickedTab = event.target.closest(tabItem);
            if (!clickedTab) return;
            event.preventDefault();

            tabs.forEach((item, i) => {
                if (item === clickedTab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        });
    }
};


try {
    // Здесь можно вызвать moduleTabs с нужными параметрами, если необходимо
} catch (error) {
    alert("Какая-то ошибка: " + error.message);
}

export default moduleTabs;
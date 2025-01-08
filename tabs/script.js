// select all tabs and contents
const tabs = document.querySelectorAll('.tab_button');
const contents = document.querySelectorAll('.content');

// loop through each tab
tabs.forEach((tab, index) => {
    // add an event listener to each tab
    tab.addEventListener('click', () => {
        // remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // remove active class from all contents
        contents.forEach(c => c.classList.remove('active'));

        // add active class to the clicked tab
        tab.classList.add('active');
        // add active class to the corresponding content
        contents[index].classList.add('active');
    });
});

// add active class to the first tab
tabs[0].classList.add('active');
// add active class to the first content
contents[0].classList.add('active');

const grid = [
    {
        id: 1,
        img: "./assets/img/imgProjects/01 - ColorFlipper.png",
        title: "Color Flipper",
        github: "",
        live: "./projects/01 - ColorFlipper/index.html"
    },
    {
        id: 2,
        img: "./assets/img/imgProjects/02 - Counter.png",
        title: "Counter",
        github: "",
        live: "./projects/02 - Counter/index.html"
    },
    {
        id: 3,
        img: "./assets/img/imgProjects/03 - Reviews.png",
        title: "Reviews",
        github: "",
        live: "./projects/03 - Reviews/index.html"
    },
    {
        id: 4,
        img: "./assets/img/imgProjects/04 - Navbar.png",
        title: "Navbar",
        github: "",
        live: "./projects/04 - Navbar/index.html"
    },
    {
        id: 5,
        img: "./assets/img/imgProjects/05 - Sidebar.png",
        title: "Sidebar",
        github: "",
        live: "./projects/05 - Sidebar/index.html"
    },
    {
        id: 6,
        img: "./assets/img/imgProjects/06 - Modal.png",
        title: "Modal",
        github: "",
        live: "./projects/06 - Modal/index.html"
    },
    {
        id: 7,
        img: "./assets/img/imgProjects/07 - Questions.png",
        title: "Questions",
        github: "",
        live: "./projects/07 - Questions/index.html"
    },
    {
        id: 8,
        img: "./assets/img/imgProjects/08 - Menu.png",
        title: "Menu",
        github: "",
        live: "./projects/08 - Menu/index.html"
    },
    {
        id: 9,
        img: "./assets/img/imgProjects/09 - Video.png",
        title: "Video",
        github: "",
        live: "./projects/09 - Video/index.html"
    },
    {
        id: 10,
        img: "./assets/img/imgProjects/10 - Scroll.png",
        title: "Scroll",
        github: "",
        live: "./projects/10 - Scroll/index.html"
    },
    {
        id: 11,
        img: "./assets/img/imgProjects/11 - Tabs.png",
        title: "Tabs",
        github: "",
        live: "./projects/11 - Tabs/index.html"
    },
    {
        id: 12,
        img: "./assets/img/imgProjects/12 - Slider.png",
        title: "Slider",
        github: "",
        live: "./projects/12 - Slider/index.html"
    }
];

// Dom content load
window.addEventListener('DOMContentLoaded', function () {
    displayGridItems(grid);
});

// Criar grid menu
const project__grid = document.querySelector('.project__grid');

function displayGridItems(gridItems) {
    let displayGrid = gridItems.map(function (item) {
        // console.log(item);

        return `<div class="project__item">
            <div class="project__image" style="background-image: url('${item.img}')"></div>
            <div class="project__text">
                <h3>${item.title}</h3>
                <div class="project__buttons">
                    <a href="${item.github}" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACJklEQVRIS+WW3TUFQRCE60aACBABIkAGRIAIEAEiQASIgAwQASJABIiA8+3Z3tPb5md3PdwH/XLP3Z2Z6uquqd6Z5hSzOeFqCvCWpAVJ623Sz5I+JT2OITEUeEXSiaQdSYsZAMDvJF1KIpli1IABOZe0XzsovL+WdNxWIrm1BEwpr1xJR2LrTdJujn0OGND7QlmHJkH5t1PgKWDKC6iJ511qst8ciPbSrltrf9m7EcueAqY/ew6EjB8kITDekRji4UCC5yQJO7TAc/4/uTNuok4iMIe8BmarDmQg6WbZd1gM607tEfhC0mHYYIzHgEbG7O2xjsCUadkh0F8r4xhga4c/i1Ys2SEeOJXlQdvXMaC2ln5zHX101fPAWCFq9tHry0h0WH+EPdxr3K3n1UetS/m1NWer5RIFdibpdAjwFGFZMqkbkgROlfovPWag3IaSdOf5UqYyxDhgPSWiEXFGp5nYQyTPrPUxhXVK0V/e+0sGwh22e4ggmLMkVgqUjAE1AgpRNBBfbqRvw92qQOlJoLkSLvAA5jY6yUXRMtlEtnxtEPSXZLwRpLw7dWd9AiTLde0iNxZhxlgzccEIlWLyka0dltIH7xiTVKLXppxBwBIQSow6EVgtSDLObAQF6K9vsJIzAQ47G+hspqSUOhWRMUxRd/LDr2aJANEb6zmAuT3eHukpWsneghqwMYM9CfBLr1NBSwBiptvXSbY9Q4Fr/R39/v8B/wD5i3If2PXuZAAAAABJRU5ErkJggg=="/></a>
                    <a href="${item.live}" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABr0lEQVRIS8WW3TVFMRBGv1sBKkAHOkAHVIAKUAEqoAQqoANUgA6UQAfWtpK7cnKSzCT34czLfbhzsucvX2alhWy1EFcj4CNJW5IOQtCfkn4kvfck4QUDuZR0Imm7AgD+IulO0rcVhAUGci/p3Doo+/9R0nWoRPHTFpgsnyXtdUKjOy24kMTvzGpgoK+NsnpjofzHJXgJTHk/Nsg0D4qMgRPE2kpg+nPmTOk3TLjl/pTPSQ6mxGTrsdi/Nyd8P532HOzNFii+GMF64JOsczB9QBxalkKjnwfO2TvxgxSMIjHJvdAeOENGdSaSiSpxb2tWyjT3tTI/Deo2Ad9KuqlQPVBP5sgpHDc4j4cHgdZglO7Qcw2Cjs/AVqnTs0fBxVJ7hivCR8HF4eJQz3XCbwSMyq2f1FEBGQE3BcQrmSPgpmRSRo9s0pL4zhJsbSuJM2E+EjhyCIfuOq+I5fYVrp75LHKQpUAWLP7PQHFbZluItfqwvI1mTqbsal2rT4yYsj90LAZpT69Gl720nCx8SB3qVns2KSsVwm/j9bbUS3pGJfKF/v+585q1V3vP6fZbDPwHnSVdH9Ye6FYAAAAASUVORK5CYII="/></a>
                </div>
            </div>
        </div>`;
    });
    displayGrid = displayGrid.join('');
    // console.log(displayMenu);
    project__grid.innerHTML = displayGrid;
};

// Data atualizada
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
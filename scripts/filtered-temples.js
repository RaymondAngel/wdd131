const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/480x270/Los-Angeles-California-Temple2.jpg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 17",
        area: 80157,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/528057ed061346d859957d68d0c43079bc738045/full/400%2C/0/default"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 58005,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/f383155a1a0b99998c397c2dbd2849cf4c95e8f1/full/400%2C/0/default"
    },
    {
        templeName: "Feather River California",
        location: "Yuba City, California, United States",
        dedicated: "2023, October, 8",
        area: 41665,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/480x270/Feather-River---Exterior.jpg"
    }
];

const templeCards = document.querySelector("#temple-cards");
const albumTitle = document.querySelector("#album-title");
const filterStatus = document.querySelector("#filter-status");
const filterButtons = document.querySelectorAll(".filter-button");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const filterSettings = {
    home: {
        title: "All Temples",
        test: () => true
    },
    old: {
        title: "Old Temples",
        test: (temple) => getDedicationYear(temple) < 1900
    },
    new: {
        title: "New Temples",
        test: (temple) => getDedicationYear(temple) > 2000
    },
    large: {
        title: "Large Temples",
        test: (temple) => temple.area > 90000
    },
    small: {
        title: "Small Temples",
        test: (temple) => temple.area < 10000
    }
};

function getDedicationYear(temple) {
    return Number.parseInt(temple.dedicated.split(",")[0], 10);
}

function createDetail(term, description) {
    const detailTerm = document.createElement("dt");
    const detailDescription = document.createElement("dd");

    detailTerm.textContent = term;
    detailDescription.textContent = description;

    return [detailTerm, detailDescription];
}

function createTempleCard(temple) {
    const card = document.createElement("article");
    const heading = document.createElement("h2");
    const details = document.createElement("dl");
    const image = document.createElement("img");

    card.className = "temple-card";
    heading.textContent = temple.templeName;

    details.append(
        ...createDetail("Location:", temple.location),
        ...createDetail("Dedicated:", temple.dedicated),
        ...createDetail("Area:", `${temple.area.toLocaleString()} sq. ft.`)
    );

    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.append(heading, details, image);
    return card;
}

function displayTemples(templeList, title) {
    const cards = document.createDocumentFragment();

    templeList.forEach((temple) => {
        cards.appendChild(createTempleCard(temple));
    });

    templeCards.replaceChildren(cards);
    albumTitle.textContent = title;
    filterStatus.textContent =
        `${title}: ${templeList.length} ${templeList.length === 1 ? "temple" : "temples"} displayed.`;
}

function applyFilter(filterName) {
    const selectedFilter = filterSettings[filterName] ?? filterSettings.home;
    const filteredTemples = temples.filter(selectedFilter.test);

    displayTemples(filteredTemples, selectedFilter.title);

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === filterName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });
}

function closeNavigation() {
    navigation.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
}

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyFilter(button.dataset.filter);
        closeNavigation();
    });
});

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;

displayTemples(temples, filterSettings.home.title);

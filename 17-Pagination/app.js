const itemsPerPage = 10;
let currentPage = 1;

const container = $('#content-container');
const paginationContainer = $('#pagination-container');

function generateContent(page) {
    container.html('');
    for (let i = (page - 1) * itemsPerPage + 1; i <= page * itemsPerPage; i++) {
        const box = $('<div class="box"></div>').text(i);
        container.append(box);
    }
}

function generatePagination() {
    paginationContainer.html('');

    for (let i = 1; i <= 9; i++) {
        const pageLink = document.createElement("span");
        pageLink.textContent = i;
        pageLink.classList.add("page-link");
        if (i === currentPage) {
            pageLink.classList.add("active");
        }
        pageLink.addEventListener("click", function () {
            currentPage = i;
            generateContent(currentPage);
            generatePagination();
        });

        paginationContainer.append(pageLink);
    }
}

generateContent(currentPage);
generatePagination();

paginationContainer.on("click", ".page-link", function () {
    paginationContainer.find(".page-link").removeClass("active");

    $(this).addClass("active");
});

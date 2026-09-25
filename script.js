// Mobile menu

let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show");
});


// Search users

let search = document.getElementById("search");
let rows = document.querySelectorAll("#userTable tr");

search.addEventListener("input", function () {

    let value = search.value.toLowerCase();

    rows.forEach(function (row) {

        let name = row.children[0].textContent.toLowerCase();

        if (name.includes(value)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});
let menuLinks = document.querySelectorAll(".menu-link");
let pages = document.querySelectorAll(".page");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        // Sab pages hide
        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        // Sab menu se active remove
        menuLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Clicked menu active
        link.classList.add("active");

        // Kis page ko show karna hai
        let pageName = link.dataset.page;

        document.getElementById(pageName).classList.add("active");

    });

});
// Variables Declaration

const requestURL = `https://iloveronilo.github.io/wdd230/lesson-9/data/data.json`;
const datas = document.querySelector(".datas");

// Fetch API
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
    })

function displayCompanies(company) {
    // Create an elements to add to the directory page
    let comp_section = document.createElement('section');
    let comp_img = document.createElement("img");
    let comp_name = document.createElement("h2");
    let address = document.createElement("h3");
    let phone = document.createElement("h3");
    let web = document.createElement("p");

    comp_img.setAttribute('src', company.imageUrl);
    comp_img.setAttribute('alt', `Company logo of ${company.name}`);
    comp_img.setAttribute('loading', 'lazy');

    comp_name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    web.textContent = `${company.website}`;

    comp_section.appendChild(comp_img);
    comp_section.appendChild(address);
    comp_section.appendChild(phone);
    comp_section.appendChild(web);

    cards.appendChild(card);
}

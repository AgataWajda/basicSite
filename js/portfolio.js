const portfolio = document.querySelector(".portfolio-content__products");

const allCategory = document.querySelector("#all");
const pagesCategory = document.querySelector("#pages");
const aplicationCategory = document.querySelector("#aplication");
const designCategory = document.querySelector("#design");
const marketingCategory = document.querySelector("#marketing");

const fetchCompany = async () => {
	const response = await fetch(
		"https://65b6ca5ada3a3c16ab01315a.mockapi.io/projects"
	);
	const companyArray = await response.json();
	return companyArray;
};

const createAllCategories = async (category) => {
	let portfolioItemsFilter;

	const company = await fetchCompany();

	switch (category) {
		case "all":
			portfolioItemsFilter = company;
			break;
		case "pages":
			portfolioItemsFilter = company.filter(
				(item) => item.type === "Strona internetowa"
			);

			break;
		case "aplication":
			portfolioItemsFilter = company.filter(
				(item) => item.type === "Aplikacja"
			);
			break;
		case "design":
			portfolioItemsFilter = company.filter((item) => item.type === "Design");
			break;
		case "marketing":
			portfolioItemsFilter = company.filter(
				(item) => item.type === "Marketing"
			);
			break;
		default:
			portfolioItemsFilter = company;
			break;
	}

	const markup = `
	  ${portfolioItemsFilter
			.map((item) => {
				return `
	      <li class="portfolio-content__product product">
								<figure class="product__box">
									<div class="product__overlay-box">
										<img
											class="product__image"
											src="${item.image}"
											alt="${item.imageDescription}"
											width="370"
											height="294"
										/>
										<p class="product__overlay">
											${item.description}
										</p>
									</div>
									<figcaption class="product__description">
										<h3 class="product__company">${item.company}</h3>
										<p class="product__type">${item.type}</p>
									</figcaption>
								</figure>
							</li>`;
			})
			.join("")}
	`;

	portfolio.innerHTML = markup;
};

createAllCategories();

allCategory.addEventListener("click", () => createAllCategories("all"));

pagesCategory.addEventListener("click", () => createAllCategories("pages"));

aplicationCategory.addEventListener("click", () =>
	createAllCategories("aplication")
);

designCategory.addEventListener("click", () => createAllCategories("design"));
marketingCategory.addEventListener("click", () =>
	createAllCategories("marketing")
);

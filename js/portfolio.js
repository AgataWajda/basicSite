import { portfolioItems } from "./portfolioData";

const portfolio = document.querySelector(".portfolio-content__products");

const allCategory = document.querySelector("#all");
const pagesCategory = document.querySelector("#pages");
const aplicationCategory = document.querySelector("#aplication");
const designCategory = document.querySelector("#design");
const marketingCategory = document.querySelector("#marketing");

const createAllCategories = (portfolioItems, category) => {
	let portfolioItemsFilter;

	switch (category) {
		case "all":
			portfolioItemsFilter = portfolioItems;
			break;
		case "pages":
			portfolioItemsFilter = portfolioItems.filter(
				(item) => item.type === "Strona internetowa"
			);
			break;
		case "aplication":
			portfolioItemsFilter = portfolioItems.filter(
				(item) => item.type === "Aplikacja"
			);
			break;
		case "design":
			portfolioItemsFilter = portfolioItems.filter(
				(item) => item.type === "Design"
			);
			break;
		case "marketing":
			portfolioItemsFilter = portfolioItems.filter(
				(item) => item.type === "Marketing"
			);
			break;
		default:
			portfolioItemsFilter = portfolioItems;
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

createAllCategories(portfolioItems);

allCategory.addEventListener("click", () =>
	createAllCategories(portfolioItems, "all")
);

pagesCategory.addEventListener("click", () =>
	createAllCategories(portfolioItems, "pages")
);

aplicationCategory.addEventListener("click", () =>
	createAllCategories(portfolioItems, "aplication")
);

designCategory.addEventListener("click", () =>
	createAllCategories(portfolioItems, "design")
);
marketingCategory.addEventListener("click", () =>
	createAllCategories(portfolioItems, "marketing")
);

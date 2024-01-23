import { portfolioItems } from "./portfolioData";

const portfolio = document.querySelector(".portfolio-content__products");

const allCategory = document.querySelector("#all");
const pagesCategory = document.querySelector("#pages");
const aplicationCategory = document.querySelector("#aplication");
const deisgnCategory = document.querySelector("#deisgn");
const marketingCategory = document.querySelector("#marketing");

const createAllCategories = (portfolioItems) => {
	const markup = `
      ${portfolioItems
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

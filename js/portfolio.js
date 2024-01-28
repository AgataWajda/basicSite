const portfolio = document.querySelector(".portfolio-content__products");

const allCategory = document.querySelector("#all");
const pagesCategory = document.querySelector("#pages");
const aplicationCategory = document.querySelector("#aplication");
const designCategory = document.querySelector("#design");
const marketingCategory = document.querySelector("#marketing");

const portfolioItems = [
	{
		company: "Technocrack",
		image: "images/technocrack.jpg",
		imageDescription:
			"Laptop otwarty na stronie internetowej ze zdjęciami ludzi i opisami.",
		description:
			"Technocrack jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Strona internetowa",
	},
	{
		company: "Grafika New Orlean vs Golden Star",
		image: "images/grafika-new-orlean-vs-golden-star.jpg",
		imageDescription: "Grafika grających dwóch koszykarzy i piłki.",
		description:
			"Grafika New Orlean vs Golden Star jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Design",
	},
	{
		company: "Restauracja Seafood",
		image: "images/restauracja-seafood.jpg",
		imageDescription:
			"Logo restauracji Seafood z jej nazwą igraficzną rybą w tle.",
		description:
			"Restauracja Seafood jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Aplikacja",
	},

	{
		company: "Projekt Prime",
		image: "images/projekt-prime.jpg",
		imageDescription: "Zdjęcie czarnych słuchawek nausznych.",
		description:
			"Projekt Prime jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Marketing",
	},
	{
		company: "Projekt Boxes",
		image: "images/projekt-boxes.jpg",
		imageDescription:
			"Dwa pudełka: jedno większe i białe, drugie mniejsze, brązowe.",
		description:
			"Projekt Boxes jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Aplikacja",
	},
	{
		company: "Inspiration has no Borders",
		image: "images/inspiration-has-no-borders.jpg",
		imageDescription:
			"Monitor otwarty na stronie internetowej z mapą świata i napisami.",
		description:
			"Inspiration has no Borders jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Strona internetowa",
	},
	{
		company: "Magazyn Limited Edition",
		image: "images/magazyn-limited-edition.jpg",
		imageDescription:
			"Magazyn otwarty na przykładowej stronie ze zdjęciami i artykułem.",
		description:
			"Magazyn Limited Edition jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Design",
	},
	{
		company: "Projekt LAB",
		image: "images/projekt-lab-marketing.jpg",
		imageDescription: "Biała metka z sznurkiem i hasłem reklamowym firmy.",
		description:
			"Projekt LAB jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Marketing",
	},
	{
		company: "Growing Business",
		image: "images/growing-business.jpg",
		imageDescription:
			"Laptop w biurze podczasu używania. Przeglądarka otwarta na stronie firmy.",
		description:
			"Growing Business jest popularną platformą wykorzystywaną do rozpowszechniania koronawirusa. Firmy wykorzystują tę platformę do celów szpiegowskich i ataków na niezabezpieczone serwery konkurencji",
		type: "Aplikacja",
	},
];

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

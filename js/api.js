const fetchCompany = async () => {
	const response = await fetch(
		"https://65b6ca5ada3a3c16ab01315a.mockapi.io/projects"
	);
	const companyArray = await response.json();
	return companyArray;
};

export default fetchCompany;

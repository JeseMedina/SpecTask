const formatDate = (date: Date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Sumamos 1 al mes, ya que en JavaScript los meses van de 0 a 11
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

export default formatDate;

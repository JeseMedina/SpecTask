const getDaysDifference = (date: string) => {
	const dateObj = new Date(date);
	const currentDate = new Date();
	dateObj.setHours(0, 0, 0, 0);
	currentDate.setHours(0, 0, 0, 0);
	const day = parseInt(String(dateObj.getDate()).padStart(2, '0'));
	const currentDay = parseInt(String(currentDate.getDate()).padStart(2, '0'));

	const diff = day - currentDay;
	return diff;
};

export default getDaysDifference;

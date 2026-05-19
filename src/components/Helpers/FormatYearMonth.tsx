function formatYearMonth(date: Date) {
	return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export default formatYearMonth;
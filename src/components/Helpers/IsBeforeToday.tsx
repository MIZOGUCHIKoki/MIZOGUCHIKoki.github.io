
function isBeforeToday(date: Date): boolean {
	const today = new Date();
	return date < today;
}
export default isBeforeToday;
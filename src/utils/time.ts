

//获取标准时间
export function getLastTime(time = 1661420741, type = 'time') {
	var date = new Date(time * 1000);
	var Y = date.getFullYear() + "-";
	var M =
		(date.getMonth() + 1 < 10
			? "0" + (date.getMonth() + 1)
			: date.getMonth() + 1) + "-";
	var D =
		(date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
	var h =
		(date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
	var m =
		(date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
		":";
	var s =
		date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();


	if (type == 'time') {
		return Y + M + D + h + m + s;


	}
	if (type == 'day') {
		return Y + M + D;


	}

}

//获取当前时间戳
export function getTimestamp(timeType = 'day', digits = 1, dayNum = 0) {

	if (timeType == 'day') {
		var timestamp = 
		parseInt((new Date(new Date().toLocaleDateString()).getTime() + (86400000 * dayNum)) 
		/ (Math.pow(digits, 3)))
	}
	else {
		var timestamp = parseInt((new Date()) / (Math.pow(digits, 3)))
	}
	return timestamp
}

export default { getLastTime, getTimestamp }
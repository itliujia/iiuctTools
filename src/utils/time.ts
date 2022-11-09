/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-11-07 00:38:56
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-10 00:18:50
 */


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


export function formatDuring(mss = 0) {
	var days: number = Math.floor(mss / (1000 * 60 * 60 * 24)),
		hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60)),
		seconds = Math.floor((mss % (1000 * 60)) / 1000),
		day = '', hour = '', minute = '', second = ''
	if (days >= 1) {
		day = days + "天"
	}
	if (hours >= 1) {
		hour = hours + "小时"
	}
	if (minutes >= 1) {
		minute = minutes + "分钟"
	}
	if (seconds >= 1) {
		second = seconds + "秒"
	}

	return day + hour + minute + second
}



export function getNowTime() {
	var date = new Date(); // 当前日期时间
	var year = date.getFullYear(); // 年份
	var month = ("0" + (date.getMonth() + 1)).slice(-2); // 月份+1
	var day = ("0" + date.getDate()).slice(-2); // 日
	var hour = ("0" + date.getHours()).slice(-2); // 小时
	var minute = ("0" + date.getMinutes()).slice(-2); // 分钟
	var second = ("0" + date.getSeconds()).slice(-2); // 秒数
	var millisecond = ("000" + date.getMilliseconds()).slice(-3); // 毫秒数0-999

	var wekday = date.getDay();

	var wekdate = [
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六",
	];

	let time =
		year +
		"年" +
		month +
		"月" +
		day +
		"日 " +
		hour +
		":" +
		minute +
		":" +
		second +
		" " +
		wekdate[wekday];
	return time
};



export default { getLastTime, formatDuring, getNowTime }
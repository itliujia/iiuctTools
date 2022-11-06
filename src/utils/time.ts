/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-11-07 00:38:56
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-07 00:49:59
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



export default { getLastTime }
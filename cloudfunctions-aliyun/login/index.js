'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user')
	let secret = 'e863c9d2be8ee53066d7d52e2eff4311'
	let appid = 'wx2b49ffa772699ad8'
	let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + event.code +
		'&grant_type=authorization_code';
	//event为客户端上传的参数
	// console.log('event : ', event)
	const res = await uniCloud.httpclient.request(url, {
		method: 'GET',
		dataType: 'json'
	})
	const user = await collection.where({
		openid: res.data.openid
	}).get()
	// 如果不存在用户 则注册
	if (user.affectedDocs === 0) {
		const re = await collection.add({
			openid: res.data.openid,
			user: event.user
		})
		//返回数据给客户端
		return {
			code: 200,
			response: re,
			msg: '注册成功!'
		}
	} else {
		//返回数据给客户端
		return {
			code: 200,
			response: user,
			msg: '请求成功!'
		}
	}


};

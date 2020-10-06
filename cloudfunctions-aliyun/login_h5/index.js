'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user')
	//event为客户端上传的参数
	// console.log('event : ', event)
	const res = await collection.where({
		username: event.username,
		password: event.password
	}).get()
	if (res.affectedDocs === 0) {
		return {
			code: 200,
			success: false,
			msg: '该账户未注册!'
		}
	} else {
		return {
			code: 200,
			response: res,
			msg: '登录成功!',
			success: true
		}
	}
};

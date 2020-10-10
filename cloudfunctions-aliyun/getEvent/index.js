'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('node')
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = {}
	if (event.category === '全部') {
		res = await collection.get()
	} else {
		res = await collection.where({
			category: event.category
		}).get()
	}

	//返回数据给客户端
	return {
		code: 200,
		msg: '查询成功!',
		success: true,
		response: res
	}
};

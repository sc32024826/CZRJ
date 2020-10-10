'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('node')
	let res = await collection.aggregate().group({
			_id: '$category'
		})
		.end()

	//返回数据给客户端
	return {
		response: res,
		code: 200,
		msg: '查询成功!'
	}
};

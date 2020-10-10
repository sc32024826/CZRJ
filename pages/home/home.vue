<template>
	<view class="home">
		<!-- 标签切换 -->
		<tab :list="tabList" @on-tab="switchTab" :tabIndex="swiperIndex"></tab>
		<!-- 内容主体 -->
		<list :list="tabList" @on-swiper-change="swiperChange" :current="activedIndex"></list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [],
			tabName: '全部', // 默认全部
			tabContent: [],
			swiperIndex: 0 ,//swiper 当前页面序号,
			activedIndex:0
		}
	},
	methods: {
		swiperChange(value) {
			console.log('swiper', value)
			this.swiperIndex = value
		},
		switchTab({data,index}) {
			console.log('tab', index)
			this.activedIndex = index
		},
		// 获取分类信息
		getCategorys() {
			let _this = this
			uniCloud.callFunction({
				name: 'getcategorys',
				success(res) {
					let list = res.result.response.data
					list.unshift({
						_id: '全部'
					})
					_this.tabList = list
				}
			})
		},
		// 获取记录日志信息
		getNodeData() {
			let _this = this
			uniCloud.callFunction({
				name: 'getEvent',
				data: {
					category: this.tabName
				},
				success(res) {
					console.log(res)
					_this.tabContent = res.result.response.data
				}
			})
		}
	},
	mounted() {
		this.getCategorys()
		this.getNodeData()
	}
}
</script>

<style lang="scss">
page {
	height: 100%;
	display: flex;
}
.home {
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	box-sizing: border-box;
}
</style>

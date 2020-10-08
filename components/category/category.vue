<template>
	<view class="content row">
		<block v-for="(item,index) in categorys" :key="index">
			<view class="item">{{item}}</view>
		</block>
	</view>
</template>

<script>
export default {
	props: {
		categorys: []
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.content {
	height: 400rpx;
	width: 100%;
}
</style>

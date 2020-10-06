<template>
	<view class="content">
		<view class="head row ">
			<image :src="avator" class="avator" ></image>
			<view class="name">{{ nickName }}</view>
		</view>
		<view class="body">
			<view></view>
		</view>
		<view class="footer"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avator: '../../static/default.jpeg',
			nickName: '有个很长很长很长很长的昵称'
		}
	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: 100%;
	// background-image: linear-gradient(to right, white, grey);
	.head{
		// border-bottom: 1rpx #808080 solid;
		padding: 50rpx;
		align-items: center;
		.avator {
			width: 180rpx;
			height: 180rpx;
			border-radius: 50rpx;
		}
		.name{
			flex: 1;
			margin-left: 50rpx;
			text-align: center;
			text-overflow: hidden;
		}
		
	}
	
}
</style>

<template>
	<view class="container">
		<scroll-view scroll-y class="scroller">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	padding: 10rpx;
	box-sizing: border-box;
	overflow: hidden;
	.scroller{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
}
</style>

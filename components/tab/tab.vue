<template>
	<view class="content row">
		<scroll-view scroll-x class="scroller">
			<view class="row item-border">
				<block v-for="(item, index) in list" :key="index">
					<view :class="{ item: true, actived: activedIndex === index }" @click="clickTab(item, index)">{{ item._id }}</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return {}
			}
		},
		tabIndex: {
			type: Number,
			default: 0
		}
	},
	watch:{
		tabIndex(newVal){
			this.activedIndex = newVal
		}
	},
	data() {
		return {
			activedIndex: 0
		}
	},
	methods: {
		clickTab(item, index) {
			// console.log(item, index)
			this.activedIndex = index
			this.$emit('on-tab', {
				data: item,
				index: index
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	color: #808080;
	.scroller {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
	}
	.item-border {
		white-space: nowrap;
		padding: 10rpx 0;
		height: 34px;
		box-sizing: border-box;
		border-bottom: 1rpx #808080 solid;
		flex-wrap: nowrap;
		.item {
			margin: 0 10rpx;
			// border-radius: 10rpx;
			// border: 1rpx red solid;
			box-sizing: border-box;
			text-align: center;
			padding: 0 20rpx;
			&.actived {
				color: #ff5500;
			}
		}
	}
}
</style>

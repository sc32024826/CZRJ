<template>
	<view class="card">
		<view v-if="type === 'default'">
			<view class="default">
				<view class="column items full">
					<view class=" row">
						<image src="../../static/default.jpeg" mode="aspectFill" class="logo"></image>
						<view class="column full content">
							<view class="title">
								标题
								<!-- {{ item.event }} -->
							</view>
							<view class="des">描述</view>
						</view>
					</view>
					<view class="row jc-b footer">
						<view class="label">
							分类标签
							<!-- {{ item.category }} -->
						</view>
						<view class="time">
							日期
							<!-- {{ item.date }} -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="type === 'single'"></view>
		<view v-if="type === 'mult'"></view>
	</view>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'default'
		},
		item: {
			type: Object,
			default() {
				return {
					event: '',
					category: '',
					date: ''
				}
			}
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	.default {
		.items {
			background-image: linear-gradient(to right, #00aaff, #00ffff);
			box-sizing: border-box;
			padding: 20rpx;
			.content {
				margin-left: 20rpx;
				.title {
					color: white;
				}
				.des {
					font-size: 14rpx;
					color: #808080;
				}
			}
			.logo {
				flex-shrink: 0;
				width: 120rpx;
				height: 120rpx;
				border-radius: 20rpx;
			}
		}

		.footer {
			margin-top: 10rpx;
			.label {
				border-radius: 10rpx;
				border: 1rpx #ff5500 solid;
				padding: 0 10rpx;
				color: #ff5500;
			}
			.time {
				color: white;
			}
		}
	}
}
</style>

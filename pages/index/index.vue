<template>
	<view class="content column">
		<!-- #ifdef MP-WEIXIN -->
		<image :src="img" class="avatar"></image>
		<view class="nickName">{{ name }}</view>
		<button class="sys_btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="appLoginWx">登录授权</button>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="form column jc-b">
			<text class="title">LOGIN</text>
			<view><input type="text" placeholder="用户名" v-model="username" /></view>
			<view><input type="password" placeholder="密码" v-model="password" /></view>
			<view>
				<button type="default" class="submit" @click="submit">{{ btnName }}</button>
			</view>
			<text class="forget" @click="forgetPass">忘记密码?</text>
			<view class="row third-login">
				<svg class="icon" aria-hidden="true" @click="loginByQQ"><use xlink:href="#icon-QQ"></use></svg>
				<svg class="icon" aria-hidden="true" @click="loginByWx"><use xlink:href="#icon-weixin"></use></svg>
				<svg class="icon" aria-hidden="true" @click="loginByGit"><use xlink:href="#icon-github"></use></svg>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			img: '/static/default.jpeg',
			name: '',
			username: '',
			password: '',
			btnName: '登录'
		}
	},
	methods: {
		// 微信授权登录
		appLoginWx() {
			// #ifdef MP-WEIXIN
			let _this = this
			uni.getProvider({
				service: 'oauth',
				success(res) {
					if (res.provider.indexOf('weixin') > -1) {
						// console.log(res);
						uni.login({
							provider: 'weixin',
							success(re) {
								// console.log(re)
								uni.getUserInfo({
									provider: 'weixin',
									success(result) {
										// console.log(result)
										let data = JSON.parse(result.rawData)
										_this.name = data.nickName
										_this.img = data.avatarUrl

										_this.$store.dispatch('setUser', {
											avatar: data.avatarUrl,
											nickName: data.nickName
										})
										uni.setStorage({
											key: 'user',
											data: data
										})
										// console.log(_this.$store);
										uniCloud.callFunction({
											name: 'login',
											data: {
												code: re.code,
												user: data
											},
											success(ponose) {
												//成功之后跳转页面
												// console.log('跳转页面')
												uni.switchTab({
													url: '/pages/home/home'
												})
											}
										})
									},
									fail() {
										uni.showToast({
											icon: 'none',
											title: '微信登录授权失败'
										})
									}
								})
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '微信登录授权失败'
								})
							}
						})
					} else {
						uni.showToast({
							title: '请先安装微信或升级版本',
							icon: 'none'
						})
					}
				}
			})
			// #endif
		},
		// 忘记密码
		forgetPass() {},
		loginByQQ() {},
		loginByWx() {},
		loginByGit() {},
		submit() {
			this.btnName = '请稍等...'
			// #ifdef H5
			let _this = this
			// console.log('用户名: ', this.username)
			// console.log('密码: ', this.password)
			uniCloud.callFunction({
				name: 'login_h5',
				data: {
					username: this.username,
					password: this.password
				},
				success(res) {
					console.log('success: ', res)
					if (res.result.success === false) {
						uni.showModal({
							content: res.result.msg,
							showCancel: false
						})
						_this.btnName = '登录'
					} else {
						let user = res.result.response.data
						let data = {
							avatar: user[0].avatar || '',
							nickName: user[0].nickName || ''
						}
						_this.$store.dispatch('setUser', data)
						uni.setStorage({
							key: 'user',
							data: data
						})
						uni.switchTab({
							url: '../home/home'
						})
					}
				},
				fail(err) {
					console.log('failed: ', err)
					_this.btnName = '登录'
				}
			})
			// #endif
		}
	}
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(to right, #17f6f9, #55aaff);
	width: 100%;
	height: 100%;
	.avatar {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 20rpx;
	}
	.nickName {
		margin-bottom: 100rpx;
	}
	.form {
		width: 500rpx;
		// height: 500rpx;
		background-image: linear-gradient(to right, #55aaff, #17f6f9);
		border-radius: 30rpx;
		box-sizing: border-box;
		padding: 30rpx;
		.title {
			font-weight: bold;
			font-size: 80rpx;
			// color: white;
			text-align: center;
			margin-bottom: 30rpx;
		}
		input {
			text-align: center;
			border-bottom: 1rpx #808080 solid;
			margin-bottom: 20rpx;
			font-size: 16rpx;
			padding: 10rpx 0;
		}
		.third-login {
			justify-content: center;
			svg {
				margin: 20rpx;
				font-size: 50rpx;
			}
		}
		.submit {
			background-image: linear-gradient(to right, #17f6f9, #fff);
			font-weight: bold;
			font-size: 16rpx;
		}
		.forget {
			font-size: 14rpx;
			text-align: right;
			margin-top: 20rpx;
		}
	}
}
</style>

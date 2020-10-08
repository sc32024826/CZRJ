<script>
export default {
	onLaunch: function() {
		// console.log('App Launch')
	},
	onShow: function() {
		// console.log('App Show')
	},
	onHide: function() {
		// console.log('App Hide')
	}
}
</script>

<style>
/*每个页面公共css */
@import url('./common.scss');

@font-face {
	font-family: 'iconfont'; /* project id 2113488 */
	src: url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.eot');
	src: url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.woff') format('woff'), url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_2113488_9f9c7h5ysv.svg#iconfont') format('svg');
}
page {
	width: 100%;
	height: 100%;
}
.icon{
	font-family: 'iconfont';
	font-size: 14px;
}
</style>

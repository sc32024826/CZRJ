<template>
	<swiper class="home-swpier" @change="swiperChange" :current="current">
		<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
			<list-scroll>
				<list-card></list-card>
			</list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return []
			}
		},
		current: {
			type: Number,
			default: 0
		}
	}, 
	data() {
		return {}
	},
	methods: {
		swiperChange(e) {
			this.$emit('on-swiper-change', e.detail.current)
		}
	}
}
</script>

<style lang="scss" scoped>
.home-swpier {
	height: 100%;
}
</style>

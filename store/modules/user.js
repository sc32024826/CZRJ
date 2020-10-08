export default {
	state: {
		user: {}
	},
	mutations: {
		SETUSER(state, data) {
			console.log(data);
			state.user = data
		}
	},
	actions: {
		setUser({
			commit
		}, user) {
			commit('SETUSER', user)
		}
	},
	getters: {
		getAvatar: state => {
			return state.user.avatar
		},
		getNickName: state => {
			return state.user.nickName
		}
	}
}

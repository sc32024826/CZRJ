export default {
	state: {
		user: {}
	},
	mutations: {
		SETUSER(state, data) {
			state.user = data
		}
	},
	actions:{
		setUser({commit},user){
			commit('SETUSER',user)
		}
	}
}

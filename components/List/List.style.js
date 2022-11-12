import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	title_container: {
		flex: 0.2,
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-around',
	},
	title: {
		fontWeight: '600',
		marginBottom: 10,
		marginLeft: 10,
		color: 'white',
		fontSize: 24,
	},
	list_container: {
		marginTop: 10,
		flex: 2,
	},
})

import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8e9eff',
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 20,
	},
	inner_container: {
		flex: 1,
		flexDirection: 'row',
	},
	bottom_container: {
		backgroundColor: '#98a8ff',
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20,
	},
	clock: {
		flex: 4,
		margin: 15,
		color: 'white',
		fontSize: 35,
	},
	switch: {
		flex: 1,
		margin: 20,
	},
	days: {
		color: 'white',
		margin: 10,
	},
})

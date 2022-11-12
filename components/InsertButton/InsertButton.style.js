import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		backgroundColor: '#38ddf0',
		borderRadius: 80,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'white',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 12.35,
	},
	text: {
		color: 'white',
		fontWeight: '400',
		fontSize: 30,
		marginTop: -5,
	},
})

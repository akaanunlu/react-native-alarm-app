import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		flex: 2,
		backgroundColor: 'white',
		borderRadius: 30,
		zIndex: 2,
		position: 'relative',
		flexDirection: 'row',
	},
	shadow: {
		zIndex: 1,
		flex: 1,
		backgroundColor: '#c7cfff',
		marginTop: -65,
		borderRadius: 100,
		width: Dimensions.get('screen').width / 1.4,

		alignSelf: 'center',
	},
	text: {
		color: 'white',
		fontWeight: '200',
		margin: 10,
		fontSize: 50,
	},
	left: {
		padding: 10,
		flex: 1,
		margin: 10,
	},
	right: {
		flex: 1,
		margin: 10,
		borderRadius: 30,
		borderColor: '#efeef1',
		borderWidth: 3,
		padding: 10,
	},
	title: {
		color: '#a6a2be',
		fontSize: 22,
	},
	time: {
		flexDirection: 'row',
	},
	hour: {
		marginTop: 10,
		fontSize: 30,
		color: '#1d0a63',
		fontWeight: 'bold',
	},
	button: {
		shadowColor: '#9beef8',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.5,
		shadowRadius: 12.35,
		backgroundColor: '#38ddf0',
		borderRadius: 20,
		marginTop: 20,
		padding: 12,
	},
	button_text: {
		color: 'white',
		fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: 18,
	},
	goal_container: {
		flexDirection: 'row',
		flex: 1,
	},
	message_container: {
		flex: 1,
	},
	icon: {
		shadowColor: '#ffecb0',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.5,
		shadowRadius: 12.35,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	percent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	percent_text: { alignSelf: 'center', fontSize: 26, color: '#1d0a63' },
})

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './InsertButton.style'

const Button = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={styles.text}>+</Text>
		</TouchableOpacity>
	)
}

export default Button

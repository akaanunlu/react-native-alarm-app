import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Card.style'
import { AntDesign } from '@expo/vector-icons'

const Button = () => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.left}>
						<Text style={styles.title}>Sleep Time</Text>
						<View style={styles.time}>
							<Text style={styles.hour}>4hr </Text>
							<Text style={styles.hour}>30min</Text>
						</View>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.button_text}>Set time</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.right}>
						<View style={styles.goal_container}>
							<View style={styles.icon}>
								<AntDesign name='exclamationcircle' size={50} color='#ffd756' />
							</View>
							<View style={styles.percent}>
								<Text style={styles.percent_text}>56%</Text>
								<Text style={{ fontSize: 11, color: '#a6a2be' }}>of your goal</Text>
							</View>
						</View>
						<View style={styles.message_container}>
							<Text style={{ color: '#1d0a63', fontWeight: 'bold', marginTop: 5 }}>Sleep goal</Text>
							<Text style={{ fontSize: 14, color: '#a6a2be', marginTop: 5 }}>This set under your sleep goal</Text>
						</View>
					</View>
				</View>
				<View style={styles.shadow}></View>
			</View>
		</>
	)
}

export default Button

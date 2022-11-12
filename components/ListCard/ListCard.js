import React, { useState } from 'react'
import { TouchableOpacity, Text, View, ScrollView, TouchableWithoutFeedback, Switch } from 'react-native'
import styles from './ListCard.style'

const ListCard = ({ alarms }) => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<View style={styles.inner_container}>
					<Text style={styles.clock}>{alarms.clock}</Text>
					<Switch style={styles.switch} value={isEnabled} onValueChange={toggleSwitch} trackColor={{ false: '#7889eb', true: '#ffb2dc' }} />
				</View>

				<View style={styles.bottom_container}>
					<Text style={styles.days}>{alarms.days}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ListCard

import React from 'react'
import { TouchableOpacity, Text, View, FlatList } from 'react-native'
import styles from './List.style'
import { AntDesign } from '@expo/vector-icons'
import ListCard from '../ListCard'
import InsertButton from '../InsertButton/InsertButton'

const List = () => {
	const ALARM = [
		{
			clock: '09:05',
			days: 'Pzt,Salı',
		},
		{
			clock: '09:15',
			days: 'Pzt,Salı',
		},
		{
			clock: '09:20',
			days: 'Pzt,Salı',
		},
	]
	const renderItem = ({ item }) => <ListCard alarms={item} />
	return (
		<>
			<View style={styles.container}>
				<View style={styles.title_container}>
					<View style={{ flex: 4 }}>
						<Text style={styles.title}>Alarms</Text>
					</View>
					<View style={{ flex: 1 }}>
						<InsertButton />
					</View>
				</View>
				<View style={styles.list_container}>
					<FlatList data={ALARM} renderItem={renderItem} showsVerticalScrollIndicator={false} />
				</View>
			</View>
		</>
	)
}

export default List

import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import style from './Home.style'
import Card from '../../components/Card'
import InsertButton from '../../components/InsertButton'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={style.container}>
			<StatusBar barStyle={'default'} />
			<View style={style.cart_container}>
				<Card />
			</View>
			<View style={style.list_container}>
				<Text>List</Text>
			</View>
			<View style={style.insert_container}>
				<InsertButton />
			</View>
		</SafeAreaView>
	)
}
export default Home

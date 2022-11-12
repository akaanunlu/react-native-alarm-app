import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import style from './Home.style'
import Card from '../../components/Card'
import InsertButton from '../../components/InsertButton'
import List from '../../components/List'

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={style.container}>
			<StatusBar barStyle={'default'} />
			<View style={style.cart_container}>
				<Card />
			</View>
			<View style={style.list_container}>
				<List />
			</View>
		</SafeAreaView>
	)
}
export default Home

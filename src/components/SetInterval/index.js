import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

const SetInterval = ({ 
	delayTimer = 1000, 
	action, 
	editor, 
	startDelayTimer = 0
}) => {
	useEffect(() => {
		if (!editor && action && delayTimer) {
			let timer;
			setTimeout(() => {
				timer = setInterval(() => action(), delayTimer)
			}, startDelayTimer)
			return () => {
				clearInterval(timer)
			}
		}
	}, [])
	return(
		<View style={{ height: editor ? 100 : 0, width: editor ? 100 : 0}}>
		</View>
	)
}

export default SetInterval

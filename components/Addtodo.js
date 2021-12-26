import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Addtodo({ submitHandler }){
    const [ text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View >
            <Text style={styles.item}>Enter your today's activity:</Text>
            <TextInput 
            style={styles.input}
            placeholder='type new activity ....'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} color= 'coral' title='Add'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    },
    item: {
        fontSize: 16
    }
})
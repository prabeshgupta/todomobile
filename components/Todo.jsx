import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons, Feather } from '@expo/vector-icons';

const Todo = ({ item, setTodos, setModal, getData }) => {

    const removeTodo = () => {
        setTodos((prev) => prev.filter((todo) => todo.data != item.data));
    }

    const openModal = () => {
        setModal(true)
        getData(item)

    }

    return (
        <View style={styles.todo}>
            <Text style={{ color: "#fff" }}>{item.data}</Text>
            <View style={styles.icons}>
                <EvilIcons onPress={removeTodo} style={styles.trash} name="trash" size={28} color="red" />
                <Feather onPress={openModal} style={styles.feather} name="edit" size={20} color="white" />
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    todo: {
        marginVertical: 5,
        backgroundColor: "rgba(255,255,255,0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 13,
        borderRadius: 5
    },
    icons: {
        flexDirection: "row-reverse",
        gap: 12,
        alignItems: "center",
    }
})
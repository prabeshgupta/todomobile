import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Feather } from '@expo/vector-icons';

const Todo = ({ item, setTodos, setModal, getData, isEnabled }) => {

    const removeTodo = () => {
        setTodos((prev) => prev.filter((todo) => todo.data != item.data));
    }

    const openModal = () => {
        setModal(true)
        getData(item)

    }

    return (
        <View style={isEnabled ? styles.todoLight : styles.todo}>
            <Text style={{ color: isEnabled ? "#000" : "#fff" }}>{item.data}</Text>
            <View style={styles.icons}>
                <EvilIcons onPress={removeTodo} style={styles.trash} name="trash" size={28} color="red" />
                <Feather onPress={openModal} style={styles.feather} name="edit" size={20} color={isEnabled ? "black" : "white"} />
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
    todoLight: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 13,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.25)"
    },
    icons: {
        flexDirection: "row-reverse",
        gap: 12,
        alignItems: "center",
    }
})
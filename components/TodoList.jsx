import { View, Text, TextInput, Button, StatusBar, StyleSheet, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import Todo from './Todo'
import { AntDesign } from '@expo/vector-icons';


const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [data, setData] = useState("")
    const [modal, setModal] = useState(false)
    const [editTodo, setEditTodo] = useState("")
    const [editInput, setEditInput] = useState("")

    const addTodo = () => {
        setTodos((prev) => [...prev, { id: Math.random() * 10000, data }])
        setData("");
    }

    const getData = (item) => {
        if (item) {
            setEditTodo(item)
            setEditInput(item.data)
        }
    }

    const editTodoList = () => {
        const newTodo = todos.map((item) => {
            if (item.id === editTodo.id) {
                return {
                    ...item,
                    data: editInput,
                };
            } else {
                return item;
            }
        });
        setTodos(newTodo);
        setModal(false);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='default' />
            <Text style={styles.title}>ToDo App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Things to do'
                    style={styles.input}
                    placeholderTextColor="#fff"
                    value={data}
                    onChangeText={setData}
                />
                <Button
                    title='Add'
                    style={styles.btn}
                    onPress={addTodo}
                />
            </View>

            <View style={{ marginTop: 15 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) =>
                        <Todo
                            item={item}
                            setTodos={setTodos}
                            setModal={setModal}
                            getData={getData}
                        />}
                    keyExtractor={(item) => item.id}
                />
            </View>

            {/* Edit */}
            <Modal visible={modal} animationType='slide'>
                <View style={styles.container}>
                    <StatusBar barStyle='default' />
                    <Text style={styles.title}>Edit List</Text>
                    <AntDesign onPress={() => setModal(false)} style={styles.closeBtn} name="closecircle" size={24} color="white" />
                    <TextInput
                        placeholder='Edit to do'
                        style={[styles.input, { marginBottom: 15 }]}
                        placeholderTextColor="#fff"
                        value={editInput}
                        onChangeText={setEditInput}
                    />
                    <Button
                        title='Add'
                        style={styles.btn}
                        onPress={editTodoList}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 20,
        flex: 1,
    },
    title: {
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 15,
        paddingBottom: 40,
        fontSize: 23,
        fontWeight: "bold"
    },
    inputContainer: {
        gap: 15,
    },
    btn: {
        borderRadius: 5,
        fontWeight: "500",
        fontSize: 16
    },
    input: {
        color: "#fff",
        borderWidth: 1.2,
        borderColor: "#fff",
        padding: 14,
        borderRadius: 5,
    },
    closeBtn: {
        position: "absolute",
        top: 25,
        left: 20
    }
})
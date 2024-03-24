import { View, Text, TextInput, Button, StatusBar, StyleSheet, FlatList, Modal, Switch } from 'react-native'
import React, { useState } from 'react'
import Todo from './Todo'
import { AntDesign } from '@expo/vector-icons';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [data, setData] = useState("")
    const [modal, setModal] = useState(false)
    const [editTodo, setEditTodo] = useState("")
    const [editInput, setEditInput] = useState("")
    const [isEnabled, setIsEnabled] = useState(false)

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
        <View style={[styles.container, { backgroundColor: isEnabled ? '#fff' : '#000' }]}>
            <StatusBar barStyle={isEnabled ? 'default' : 'light-content'} />
            <View style={styles.mode}>
                <Text style={[styles.title, { color: isEnabled ? '#000' : '#fff' }]}>ToDo App</Text>
                <Switch
                    trackColor={{ true: 'green', false: 'rgba(255,255,255,0.4)' }}
                    thumbColor="#fff"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Things to do'
                    style={[styles.input, { color: isEnabled ? '#000' : '#fff', borderColor: isEnabled ? '#000' : '#fff' }]}
                    placeholderTextColor={isEnabled ? '#000' : '#fff'}
                    value={data}
                    onChangeText={setData}
                />
                <Button
                    title='Add'
                    onPress={addTodo}
                    color={isEnabled ? "#000" : null}
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
                            isEnabled={isEnabled}
                        />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

            {/* Edit */}
            <Modal visible={modal} animationType='slide'>
                <View style={[styles.container, { backgroundColor: isEnabled ? '#fff' : '#000' }]}>
                    <StatusBar barStyle={isEnabled ? 'dark-content' : 'light-content'} />
                    <View style={styles.mode}>
                        <Text style={[styles.title, { color: isEnabled ? '#000' : '#fff' }]}>Edit List</Text>
                        <AntDesign onPress={() => setModal(false)} style={styles.closeBtn} name="closecircle" size={23} color={isEnabled ? '#000' : '#fff'} />
                    </View>
                    <TextInput
                        placeholder='Edit to do'
                        style={[styles.input, { color: isEnabled ? '#000' : '#fff', borderColor: isEnabled ? '#000' : '#fff', marginBottom: 15 }]}
                        placeholderTextColor={isEnabled ? '#000' : '#fff'}
                        value={editInput}
                        onChangeText={setEditInput}
                    />
                    <Button
                        title='Edit'
                        onPress={editTodoList}
                        color={isEnabled ? '#000' : null}
                    />
                </View>
            </Modal>
        </View >
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    mode: {
        display: "flex",
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 5
    },
    inputContainer: {
        gap: 17,
    },
    input: {
        borderWidth: 1.2,
        padding: 14,
        borderRadius: 5,
    },
    closeBtn: {
        marginTop: 8
    }
})

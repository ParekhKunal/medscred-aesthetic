import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../src/contexts/AuthContext';
export default function Dashboard() {

    const { signOut, user } = useContext(AuthContext);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true); // Open the modal
    };

    const handleCloseModal = () => {
        setModalVisible(false); // Close the modal
    };

    const logout = () => {
        signOut()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Text style={styles.text}>{user.first_name}</Text>

            {/* Button to open the Modal */}
            <TouchableOpacity onPress={handleOpenModal} style={styles.openButton}>
                <Text style={styles.buttonText}>Open Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout} style={styles.openButton}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            {/* Simple Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>This is a simple modal</Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    openButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for modal
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
});

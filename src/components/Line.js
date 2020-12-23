import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Line({label = "", content = ""}) {

    /* Declaração do método ({label = "", content = ""}) é o mesmo que fazer:
    const { label, content } = props; */

    return (
        <View style={styles.line}>

            <Text style={[
                styles.cell, 
                styles.cellLabel,
                label.length > 8 ? styles.cellLongLabel : null
            ]}> {label}  </Text>

            <Text style={[styles.cell, styles.cellContent]}> {content}  </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    line: {
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },

    cell: {
        fontSize: 18,
        paddingLeft: 5,
    },

    cellLabel: {
        fontWeight: 'bold',
        flex: 2
    },

    cellLongLabel: {
        fontSize: 12,
    }, 

    cellContent: {
        flex: 4
    }
});
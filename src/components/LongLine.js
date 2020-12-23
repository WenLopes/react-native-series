import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager
} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
/*
    Código acima equivale a:
    if(UIManager.setLayoutAnimationEnabledExperimental){
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
*/

export default function LongLine({label = "", content = ""}) {

    const [isExpanded, setIsExpanded] = React.useState(true);

    return (
        <View style={styles.line}>

            <Text style={[
                styles.cell, 
                styles.cellLabel
            ]}> {label}  </Text>

            <TouchableWithoutFeedback
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    setIsExpanded(!isExpanded)
                }}
            >
                <View>
                    <Text style={[
                        styles.cell, 
                        styles.cellContent,
                        isExpanded ? styles.expanded : styles.collapsed
                    ]}>
                        {content}  
                    </Text>
                </View>

            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({

    collapsed: {
        maxHeight: 65
    },
    expanded: {
        flex: 1
    },

    line: {
        paddingBottom: 3,
        paddingTop: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },

    cell: {
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
    },

    cellLabel: {
        fontWeight: 'bold',
        flex: 1,
        textDecorationLine: 'underline',
        paddingBottom: 8
    },

    cellContent: {
        flex: 4,
        textAlign: 'justify'
    }
});
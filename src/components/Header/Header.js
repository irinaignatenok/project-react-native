import { View, Text } from 'react-native';
import styles from './styles';
import { formBackground } from './../../includes/variables';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TATISTYLES</Text>

        </View>
    )
}
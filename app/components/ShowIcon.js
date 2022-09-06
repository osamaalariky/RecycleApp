import React from 'react';
import { Switch, View, StyleSheet  } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import FixedScreen from './FixedScreen';
import ListingItem from './ListingItem';
function ShowIcon(props) {
    const[newshow, setnewshow] = useState(false);
    return (
        <FixedScreen>

            <ListingItem
            value={newshow}
            onValueChange={(newvalue) => setnewshow(newvalue)}
            
            />
            {isNew === true ?  <View style={styles.close}>
             <MaterialCommunityIcons name='chevron-right' color={colors.dark} size={30}/>
             </View> : null }

        </FixedScreen>
    );
}

export default ShowIcon;
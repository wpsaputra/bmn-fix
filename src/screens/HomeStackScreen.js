import { StyleSheet, Text, View } from 'react-native'
import React, {useRef} from 'react'
import HomeScreen from './HomeScreen';
import LinearGradient from 'react-native-linear-gradient';
import AppIcon, { Icons } from '../components/AppIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContext from '../components/AppContext';
import ShopScreen from './ShopScreen';
import FavoriteScreen from './FavoriteScreen';
import Colors from '../constants/Colors';

const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
    const icon = index == 0 ? 'home' : 'apps';
    const gradient = index == 1;
    return (
        <View>
            {gradient ? (
                <LinearGradient
                    colors={[Colors.light, Colors.dark]}
                    start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}
                    style={styles.middleIcon}>
                    <AppIcon name={'plus'} type={type} size={size} color={'white'} />
                </LinearGradient>
            ) : (
                <View style={styles.icon}>
                    <AppIcon name={icon} type={type} size={size} color={color} />
                </View>
            )}
        </View>
    )
}

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={styles.bottomBar}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    })
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }

                const color = isFocused ? Colors.dark : Colors.gray;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        testID={options.tabBarTestID}
                        accessibilityRole="button"
                    >
                        <BottomTab
                            // type={index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5}
                            type={index !== 1 ? Icons.Ionicons : Icons.FontAwesome5}
                            index={index}
                            isFocused={isFocused}
                            size={24}
                            color={color}
                            style={styles.bottomBar}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const Tab = createBottomTabNavigator();
// const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    const modalRef = React.useContext(AppContext);
    // const modalRef = useRef(null);
    // const globalStateContext = React.createContext(modalRef);
    // const [openModal, setOpenModal] = useState(false);
    const TabNavigator = () => {
        return (
            // <Host>
                <Tab.Navigator
                    tabBar={(props) => <MyTabBar {...props} />}>
                    <Tab.Screen name="Home" component={HomeScreen}
                        // options={({ route }) => ({
                        //     tabBarVisible: false,
                        // })}

                    />
                    <Tab.Screen name="Shop" component={ShopScreen}
                        listeners={({ navigation, route }) => ({
                            tabPress: (e) => {
                                e.defaultPrevented = true;
                                console.log("show modal");
                                modalRef.current?.open();

                            },
                        })}

                    />
                    <Tab.Screen name="Favorite" component={FavoriteScreen} />
                </Tab.Navigator>

            // </Host>
        )
    }
    return (
        // <HomeStack.Navigator>
        //     <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        // </HomeStack.Navigator>
        // <AppContext.Provider value={modalRef}>
            <TabNavigator/>
        // </AppContext.Provider>
    )
}

export default HomeStackScreen

const styles = StyleSheet.create({
    bottomBar: {
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: "absolute"
      },
      middleIcon: {
        bottom: 18,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        elevation: 8,
      },
      container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
      },



})
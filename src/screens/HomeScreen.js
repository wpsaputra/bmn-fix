import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import AppContext from '../components/AppContext';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AppIcon, { Icons } from '../components/AppIcon';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = ({navigation}) => {
    // const modalRef = useRef(null);
    const modalRef = React.useContext(AppContext);

    const onOpen = () => {
      modalRef.current?.open();
    };
  
    return (
      <>
        <LinearGradient useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5}} colors={['#d8303d', '#e97007']} style={styles.linearGradient}>
          <View>
            <Text style={styles.header}>Welcome to</Text>
            <Text style={styles.subheader}>BMN</Text>
          </View>
          <View style={styles.header_right_layout}>
            <TouchableOpacity>
              <AppIcon name={"notifications-outline"} type={Icons.Ionicons} size={24} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
              <AppIcon name={"person-outline"} type={Icons.Ionicons} size={24} color={"white"} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
  
        <Portal>
          <Modalize modalStyle={styles.modal} modalHeight={220} ref={modalRef} snapPoint={220}>
              <Text style={styles.modal_font}>BMN</Text>
              <View style={styles.modal_content}>
                <TouchableOpacity style={styles.modal_action} onPress={onOpen}>
                    <AppIcon name={"send"} type={Icons.Ionicons} size={20} color={"#ffad27"} />
                    <Text style={styles.modal_action_font}>Kirim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modal_action} onPress={onOpen}>
                  <AppIcon name={"cube"} type={Icons.Ionicons} size={20} color={"#d73a05"} />
                  <Text style={styles.modal_action_font}>Terima</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modal_action} onPress={onOpen}>
                  <AppIcon name={"newspaper"} type={Icons.Ionicons} size={20} color={"#28a2f5"} />
                  <Text style={styles.modal_action_font}>Status</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={styles.modal_font}>Rapat</Text>
              <View style={styles.modal_content2}>
                <TouchableOpacity style={styles.modal_action2} onPress={onOpen}>
                    <AppIcon name={"calendar-plus-o"} type={Icons.FontAwesome} size={20} color={"#2257b5"} />
                    <Text style={styles.modal_action_font}>Buat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modal_action2} onPress={onOpen}>
                  <AppIcon name={"user-check"} type={Icons.FontAwesome5} size={20} color={"#127d45"} />
                  <Text style={styles.modal_action_font}>Absen</Text>
                </TouchableOpacity>
              </View>
            </Modalize>
        </Portal>
        
      </>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    modal: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
    },
    modal_font: {
        fontWeight: "bold"
    },
    modal_content: {
      display: "flex",
      width: "100%",
      // backgroundColor: "red",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 10,
    },
    modal_content2: {
      display: "flex",
      width: "100%",
      // backgroundColor: "red",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 10,
      marginBottom: 10,

    },
    modal_action: {
      width : "30%",
      height: 60,
      backgroundColor: "#f8f8f8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    modal_action2: {
      width : 80,
      height: 60,
      // backgroundColor: "#f8f8f8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    modal_action_font: {
      fontSize: 12
    },
    linearGradient: {
      padding: 15,
      height: 70,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    header:{
      fontFamily: "Ubuntu-Regular",
      color: "white"
  
    },
    subheader:{
      fontFamily: "Ubuntu-Bold",
      color: "white"
    },
    header_right_layout: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 70
      // padding: 10
    }



    
})
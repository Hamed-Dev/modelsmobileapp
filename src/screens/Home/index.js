import React, { useEffect } from "react";
import { View } from "react-native";
import icons from "../../assets/icons";
import AppHeader from "../../components/AppHeader";
import colors from "../../utils/colors";
import { hp, wp } from "../../utils/dimensions";
import MainButton from "./component/MainButton";

const Home = ({ navigation }) => {

    useEffect(()=>{
       
    },[])

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.screenBackground }}>
            <AppHeader title={'Picture'} proccess />
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '75%', height: wp(50), marginTop: hp(4.5) }}>
                <MainButton icon={icons.assetInventoryIcon} title={'Asset Inventory'} iconWidth={wp(7)} />
                <MainButton icon={icons.vendorsIconGray} title={'Model'} iconWidth={wp(6)} iconHeight={wp(6)} onPress={() => navigation.navigate('ModelsList')} />
                <MainButton icon={icons.vendorsIconGray} title={'Person'} iconWidth={wp(6)} iconHeight={wp(6)} />
            </View>


        </View>
    )
}

export default Home
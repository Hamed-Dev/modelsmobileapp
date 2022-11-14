import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import icons from "../../../assets/icons";
import colors from "../../../utils/colors";
import { hp, wp } from '../../../utils/dimensions'
import fonts from "../../../utils/fonts";
import FontsSizes from "../../../constants/FontsSizes";
import imgs from "../../../assets/imgs";


const ModelItemList = (props) => {

    const { title, iconWidth, iconHeight } = props
    const { image } = props.item
    var img = props.item.image == 'colors-img' ? require('../../../assets/imgs/colors-img.png') :
        image == 'laptop-img' ? require('../../../assets/imgs/laptop-img.png') :
            image == 'printer-img' ? require('../../../assets/imgs/printer-img.png') :
                require('../../../assets/imgs/pc-img.png')
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(4), width: wp(40), height: wp(40), borderRadius: wp(8), marginHorizontal: wp(2.5), marginTop: hp(1) }}
            onPress={props.onPress}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: wp(40), height: wp(35), borderRadius: wp(5), }}>
                <FastImage source={img} style={{ width: wp(25), height: wp(25), }} resizeMode='contain' />

            </View>
            <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font12 - 1 }}>{props.item.model_name}</Text>
        </TouchableOpacity>
    )
}

export default ModelItemList
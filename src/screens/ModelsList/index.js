import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FastImage from "react-native-fast-image";
import icons from "../../assets/icons";
import AppHeader from "../../components/AppHeader";
import FontsSizes from "../../constants/FontsSizes";
import { deleteFromModelsById, getAllModelsSql, getModelBySearchSql, insertIntoModelsTable } from "../../ModelsLocalDB/ModelsTableScript";
import colors from "../../utils/colors";
import { hp, wp } from "../../utils/dimensions";
import fonts from "../../utils/fonts";
import ModelItemList from "./component/ModelItemList";
import { dropModelsTable } from "../../ModelsLocalDB/DBConnection";
import AppOverlayLoading from "../../components/AppOverlayLoading";


const ModelsList = ({ navigation }) => {
  
    const dispatch = useDispatch()
    const [models, setModels] = useState([])
    const [txtSearch, setTxtSearch] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getModels()
        //dropModelsTable()

    }, [])

    const getModels = async () => {
        await getAllModelsSql((val) => {
            setModels(val)
            setLoading(false)
        })
    }

    const getModelsBySearch = () => {
        setLoading(true)
        console.log('ser')
        getModelBySearchSql(txtSearch, (val) => {
            setModels(val)
            setLoading(false)
        })
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.screenBackground }}>
            <AppHeader title={'Model'} navigation={navigation} />

            <View style={styles.searchCon}>
                <TextInput
                    placeholder="Type to Search..."
                    style={styles.textInput}
                    returnKeyType='search'
                    onChangeText={(val) => setTxtSearch(val)}
                    onSubmitEditing={() => getModelsBySearch()}
                // onKeyPress={() => getModelsBySearch()}
                />
                <FastImage source={icons.barcodeIcon} style={{ width: wp(8.5), height: wp(5) }} />
            </View>
            <View style={{ flex: 1 }}>
                {models.length > 0 &&
                    <FlatList style={{ alignSelf: 'center', width: wp(90) }}
                        contentContainerStyle={{ justifyContent: 'space-between', }}
                        data={models}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item, index }) =>
                            <ModelItemList navigation={navigation} item={item} index={index} onPress={() => navigation.navigate('ModelDetails', { item: item })} />
                        }
                  
                    />
                }
            </View>
{loading && <AppOverlayLoading/>}
        </View>
    )
}

const styles = StyleSheet.create({
    searchCon: {
        flexDirection: 'row', alignItems: 'center', width: wp(90), borderRadius: wp(10), height: hp(6),
        marginTop: hp(2),
        paddingHorizontal: wp(5),
        backgroundColor: colors.textInputBackground,
        elevation: 12,
        shadowColor: '#00000029',
        borderWidth: .1,
        borderColor: '#00000029'
    },
    textInput: {
        width: wp(75), height: hp(5), alignSelf: 'center',
        fontSize: FontsSizes.font18,
        fontFamily: fonts.openSansItalic,

    }
})

export default ModelsList
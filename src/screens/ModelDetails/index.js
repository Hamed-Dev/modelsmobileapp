import React, { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FastImage from "react-native-fast-image";
import icons from "../../assets/icons";
import AppHeader from "../../components/AppHeader";
import FontsSizes from "../../constants/FontsSizes";
import colors from "../../utils/colors";
import { hp, wp } from "../../utils/dimensions";
import fonts from "../../utils/fonts";
import { dropModelsTable } from "../../ModelsLocalDB/DBConnection";
import { insertIntoNotesTable, getAllNotesByModelIdSql, deleteNotesSql } from "../../ModelsLocalDB/NotesTableScript";
import Button from "../../components/ui/Button";
import Accordion from 'react-native-collapsible/Accordion';
import AppOverlayLoading from "../../components/AppOverlayLoading";
import moment from 'moment'


const ModelDetails = ({ navigation, route }) => {
    // const models = useSelector(state => state.category.categories)
    const dispatch = useDispatch()
    const [models, setModels] = useState([])
    const [txtSearch, setTxtSearch] = useState('')
    const { item } = route.params
    const [sections, setSection] = useState([1, 2])
    const [activeSections, setActiveSections] = useState([0,1])
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllNotes()
       
    }, [])

    const addNote = async () => {
        setLoading(true)
        if (newNote != '') {
            insertIntoNotesTable('Mahmoud', new Date(), newNote, item.id)
            await getAllNotesByModelIdSql(item.id, (val) => {
                setNotes(val)
                setLoading(false)
            })
        }
        else {
            setLoading(false)
        }
    }

    const getAllNotes = async () => {
        await getAllNotesByModelIdSql(item.id, (val) => {
            setNotes(val)
            setLoading(false)
        })
    }

    const deleteFromNotes= async()=>{
       await deleteNotesSql()
    }

    var img = route.params.item.image == 'colors-img' ? require('../../assets/imgs/colors-img.png') :
        route.params.item.image == 'laptop-img' ? require('../../assets/imgs/laptop-img.png') :
            route.params.item.image == 'printer-img' ? require('../../assets/imgs/printer-img.png') :
                require('../../assets/imgs/pc-img.png')


    const imageInfoHeader = (isActive) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: isActive ? 0 : .6, borderBottomColor: colors.headerBackground , paddingBottom:hp(2)}}>
                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16, marginTop: hp(2) }}>Image info</Text>
                <FastImage source={isActive ? icons.collapseUp : icons.collapseDown} style={{ width: wp(2.6), height: wp(1.6) }} resizeMode='contain' />
            </View>
        )
    }
    const imageInfoContent = () => {
        return (
            <View style={{ width: wp(80), alignSelf: 'center',  }}>


                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>Model</Text>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 - 1 }}>{item.model_code}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>Model Name</Text>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 - 1 }}>{item.model_name}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>Model Type</Text>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 - 1 }}>{item.model_type}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>Cost</Text>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 }}>{item.cost}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>Category</Text>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 - 1 }}></Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1) }}>
                    <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1 }}>{item.Additional}</Text>

                </View>
            </View>
        )
    }

    const imageNotesHeader = (isActive) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1), borderBottomColor: colors.headerBackground, borderBottomWidth: isActive ? 0 : .6, paddingBottom: hp(2),  }}>
                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansBold, fontSize: FontsSizes.font16 }}>Notes</Text>
                <FastImage source={isActive ? icons.collapseUp : icons.collapseDown} style={{ width: wp(2.6), height: wp(1.6) }} resizeMode='contain' />
            </View>
        )
    }
    const imageNotesContent = () => {
        return (
            <View style={{ width: wp(80), alignSelf: 'center', marginBottom: hp(2) }}>
                <Button title={'Save'} btnStyle={{ borderWidth: 0, alignSelf: 'flex-end' }} txtStyle={{ color: colors.buttonTitle, fontSize: FontsSizes.font12 }} img={icons.saveIcon} imgTintColor={colors.buttonTitle} imgStyle={{ width: wp(3.2), height: wp(3.2), color: colors.buttonTitle, marginEnd: '1%' }}
                    onPress={() => addNote()} />

                <TextInput
                    placeholder="Add a Note"
                    style={styles.textInput}
                    onChangeText={(val) => setNewNote(val)}
                />
                <View style={{ marginTop: hp(1) }}>
                    <Text style={{ textAlign: 'left', color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font16 - 1, marginTop: hp(1) }}>History Notes</Text>
                    <View style={{ width: '100%', backgroundColor: 'white', borderRadius: wp(3), marginTop: hp(1) }}>
                        {notes.length > 0 ?
                        notes.map((itm) => (
                            <View style={{ paddingVertical: hp(2), paddingHorizontal: wp(3), borderBottomColor: colors.headerBackground, borderBottomWidth: .7 }}>
                                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansSemiBold, fontSize: FontsSizes.font12 }}>{itm.note_by}</Text>
                                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansItalic, fontSize: FontsSizes.font12 - 4 }}>{moment(itm.note_date).format('DD.MM.yyyy hh:mm A')}</Text>
                                <Text style={{ color: colors.buttonTitle, fontFamily: fonts.openSansRegular, fontSize: FontsSizes.font12 }}>{itm.note_details}</Text>
                            </View>
                        ))
                    :
                    <Text style={{textAlign:'center',lineHeight:hp(10), fontFamily:fonts.openSansSemiBold}}>No Notes for this Model</Text>
                    }
                    </View>
                </View>
            </View>
        )
    }


    const _renderHeader = (section, index, isActive) => {

        return (
            section == 1 ? imageInfoHeader(isActive) : imageNotesHeader(isActive)
        );
    };

    const _renderContent = (section) => {
        return (
            section == 1 ? imageInfoContent() : imageNotesContent()
        );
    };

    const _updateSections = (activeSections) => {

        setActiveSections(activeSections);
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.screenBackground }}>
            <AppHeader title={'Model Details'} navigation={navigation} />

            <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={{ width: wp(90), alignItems: 'center', marginVertical: hp(2), backgroundColor: colors.buttonBackground, borderRadius: wp(5), paddingVertical:hp(3) }}>
                        {/* start Main image */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: wp(60), height: wp(35), borderRadius: wp(5), }}>
                            <FastImage source={img} style={{ width: wp(40), height: wp(30), }} resizeMode='contain' />
                        </View>
                        {/* end Main image */}

                        <Accordion
                            expandMultiple
                            sections={sections}
                            activeSections={activeSections}
                            //renderSectionTitle={_renderSectionTitle}
                            renderHeader={_renderHeader}
                            renderContent={_renderContent}
                            onChange={_updateSections}
                            touchableComponent={TouchableOpacity}
                        />




                    </View>

                </ScrollView>
            </View>
            {loading && <AppOverlayLoading />}
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
        width: '100%', height: hp(5), backgroundColor: 'white', borderRadius: wp(5), alignSelf: 'center', paddingHorizontal: wp(3),
        fontSize: FontsSizes.font16 - 1,
        fontFamily: fonts.openSansItalic,

    }
})

export default ModelDetails
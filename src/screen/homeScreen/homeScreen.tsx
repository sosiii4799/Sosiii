import React, {useRef, useState, useEffect} from 'react';
import {
StyleSheet,
Text,
View,
Image,
TouchableOpacity,
Dimensions,
StatusBar,
ScrollView,
ImageBackground,
} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';

import infoComic from './infoComicScreen'
import {list_home} from '../../models/interface'
import * as global from '../../models/global'


const Home = () => {
    const navigation = useNavigation();
    const [background, setBackground] = useState(
    {
        uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    });

    const [gallery] = useState([
    {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
        title: 'Avengers: End Game',
        released: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
        key: '1',
        desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    },
    {
        image: 'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg',
        title: 'Frozen II',
        released: '2019 ‧ Animation/Musical ‧ 1h 43m',
        key: '2',
        desc: 'Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.',
    },
    {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P',
        title: 'Alita: Battle Angel',
        released: '2019 ‧ Action/Sci-fi ‧ 2h 2m',
        key: '3',
        desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.',
    },
    {
        image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
        title: 'The Irish Man',
        released: '2019 ‧ Crime/Drama ‧ 3h 30m',
        key: '4',
        desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.',
    },
    {
        image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg',
        title: 'John Wick Chapter 3',
        released: '2019 ‧ Action/Thriller ‧ 2h 10m',
        key: '5',
        desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.',
    },
    ]);




    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<list_home[]>([]);
    useEffect(() => {

        fetch(global.domainListHome, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(
                {            
                    "hash": global.hashListHome,
                    "time": global.time,
                    "type": global.typeListHome,
                }
            )
        })
        .then((response) => response.json())
        .then((json) => setData(json.data.article))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [])






    const carouselRef = useRef<any>();

    const {width} = Dimensions.get('window');

    const renderItem = ({item, index}: any) => {
        const pushAction = StackActions.push('Comic', item);
        return (
        <View style={{paddingTop:50, paddingBottom:20}}>
            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate('Comic')
                    navigation.dispatch(pushAction);
                }}
            >
                <View style={styles.imgCarousel}>
                    <Image source={{uri: global.imgDriver + item.id_google}} style={styles.carouselImage} />
                    <View style={{marginTop: 20}}>
                        <Text style={{ marginBottom: 15, color:'#fff', fontSize: 18, fontStyle: 'italic', fontWeight:'bold'}}>Demo tên truyện</Text>
                        <Text style={{ marginBottom: 5, color:'#fff' }}>Tác giả: </Text>
                        <Text style={{ color:'#fff' }}>Thể loại: </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        );
    };

    const renderItemBody = ({item, index}: any) => {
        return (
        <View>
            <TouchableOpacity
                onPress={() => {
                }}
            >
                <Image source={{uri: item.image}} style={styles.bodyImage} />
            </TouchableOpacity>
        </View>
        );
    };

    return (
        <ScrollView style={{backgroundColor: '#000'}}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            {/* <StatusBar hidden={true}/> */}
            <View style={styles.carouselContentContainer}>
                <ImageBackground
                    source={{uri: background.uri}}
                    style={styles.ImageBg}
                    blurRadius={30}>
                    <View style={styles.carouselContainerView}>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={data}
                            sliderWidth={width}
                            itemWidth={Math.floor(width/1.16)}
                            renderItem={renderItem}
                            autoplay={true}
                            autoplayInterval={3000}
                            autoplayDelay={1000}
                            loop={true}
                            inactiveSlideOpacity={0.5}
                            onSnapToItem={(index: number) => {
                                setBackground({
                                    uri: global.imgDriver + data[index].id_google,
                                });
                            }}
                        />
                    </View>
                </ImageBackground>
            </View>

            <View>
                <Text style={{backgroundColor:'#fff'}}>cc</Text>
                <Text style={{backgroundColor:'#fff'}}>cc</Text>
                <Text style={{backgroundColor:'#fff'}}>cc</Text>
                <Text style={{backgroundColor:'#fff'}}>cc</Text>
            </View>


            <View style={{backgroundColor:'#fff'}}>
                <Text>
                    Truyện gì
                </Text>
                <View style={styles.bodyContentContainer}>
                    <View style={styles.bodyContainerView}>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={gallery}
                            sliderWidth={width}
                            itemWidth={Math.floor(width/3.5)}
                            renderItem={renderItemBody}
                            autoplay={true}
                            autoplayInterval={3000}
                            autoplayDelay={1000}
                            loop={true}
                        />
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'#fff'}}>
                <Text>
                    Truyện gì đấy
                </Text>
                <View style={styles.bodyContentContainer}>
                    <View style={styles.bodyContainerView}>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={gallery}
                            sliderWidth={width}
                            itemWidth={Math.floor(width/3.5)}
                            renderItem={renderItemBody}
                            autoplay={true}
                            autoplayInterval={3000}
                            autoplayDelay={1000}
                            loop={true}
                        />
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'#fff'}}>
                <Text>
                    Truyện gì đấy
                </Text>
                <View style={styles.bodyContentContainer}>
                    <View style={styles.bodyContainerView}>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={gallery}
                            sliderWidth={width}
                            itemWidth={Math.floor(width/3.5)}
                            renderItem={renderItemBody}
                            autoplay={true}
                            autoplayInterval={3000}
                            autoplayDelay={1000}
                            loop={true}
                        />
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'#fff'}}>
                <Text>
                    Truyện gì đấy
                </Text>
                <View style={styles.bodyContentContainer}>
                    <View style={styles.bodyContainerView}>
                        <Carousel
                            layout={"default"}
                            ref={carouselRef}
                            data={gallery}
                            sliderWidth={width}
                            itemWidth={Math.floor(width/3.5)}
                            renderItem={renderItemBody}
                            autoplay={true}
                            autoplayInterval={3000}
                            autoplayDelay={1000}
                            loop={true}
                        />
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

export default Home;




const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    // carousel
    imgCarousel: {
        flexDirection : 'row', 
        width: width - 50, 
        height: height*2/5-50-20, 
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 10,
    },
    textCarousel: {
    },
    carouselImage: {
        width: width/3,
        height: height*2/5-110,
        borderRadius: 10,
        margin: 20
    },
    carouselContentContainer: {
        backgroundColor: '#000',
        height: height*(2/5),
    },
    ImageBg: {
        opacity: 1,
        justifyContent: 'flex-start',
    },
    carouselContainerView: {
        width: '100%',
        height: height*(2/5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    // body
    bodyImage: {
        width: width/3.5,
        height: height*1/5,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    bodyContentContainer: {
        backgroundColor: '#fff',
        height: height*(1/3),
    },
    bodyContainerView: {
        width: '100%',
        height: height*(1/5),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

const images = [
    'https://upload.wikimedia.org/wikipedia/en/f/f3/Mumfordsonssighnomore.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/ae/The_felice_brothers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/c/c7/Pure_Comedy.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg',
    'https://upload.wikimedia.org/wikipedia/en/1/18/Weezer_Teal_Album.jpg'
];

class AlbumCarousel extends Component {

    renderItem = ({ item }:{[key:string]:any}) => {  //this is where the cards are created from the array above.
        return (
            <Image source={{ uri: item }} style={styles.logoStyle} />
        );
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <View style={{flex:1
                    
/*                     transform: [{
                        rotate: '0deg'
                    }] */
                }}>
                    <Carousel
                      inactiveSlideOpacity={0.8}
                      activeSlideAlignment='start'
                      inactiveSlideScale={0.9}
                      firstItem={1}
                      sliderWidth={width}
                      itemWidth={width / 2}
                      enableMomentum={true}
                      data={images}
                      renderItem={this.renderItem}
                      containerCustomStyle={{ overflow: 'visible' }}
                      contentContainerCustomStyle={{ overflow: 'visible' }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        /* transform: [{
            rotate: '0deg'
        }], */
        width: width / 2,
        height: width / 2
    }
});

export default AlbumCarousel;

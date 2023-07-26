import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';
import { LazyLoadImage } from 'react-lazyload';
import { getImageDownloadURL } from './firebaseStorageHelper';

const Block = ({ blockCaption, imageSource }) => {
	const [selected, setSelected] = useState(false);
	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		const updatedSelected = !selected;
		setSelected(updatedSelected);

		if (updatedSelected) {
			dispatch(addToFavorites({ caption: blockCaption, image: imageSource }));
		} else {
			dispatch(removeFromFavorites({ caption: blockCaption }));
		}
	};

	const scaleValue = useRef(new Animated.Value(1)).current;

	const handlePressIn = () => {
		Animated.spring(scaleValue, {
			toValue: 0.93,
			useNativeDriver: false,
		}).start();
	};

	const handlePressOut = () => {
		Animated.spring(scaleValue, {
			toValue: 1,
			friction: 3,
			tension: 40,
			useNativeDriver: false,
		}).start();
	};

	return (
		<TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Animated.View
				style={[
					styles.block,
					{
						transform: [{ scale: scaleValue }],
					},
				]}
			>
				<TouchableOpacity
					style={[
						styles.favoriteButton,
						selected && styles.favoriteButtonSelected,
					]}
					onPress={handleToggleFavorite}
				>
					<Ionicons
						name={selected ? 'heart' : 'heart-outline'}
						size={30}
						color={selected ? 'red' : 'black'}
					/>
				</TouchableOpacity>
				<Image source={imageSource} style={styles.image} />

				<View style={styles.captionContainer}>
					<Text style={styles.caption}>{blockCaption}</Text>
				</View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

const GridContainers = () => {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = ['i7 12th, RTX 4070, 32GB, 2TB, 750W.png', 'pc2.jpg', 'pc3.jpg', 'pc4.jpg', 'pc5.jpg', 'pc6.png', 'pc7.jpg', 'pc8.jpg'];

      const urls = await Promise.all(
        images.map(async (imageName) => {
          const url = await getImageDownloadURL(imageName);
          return { imageName, url };
        })
      );

      setImageURLs(urls);
    };

    fetchImageURLs();
  }, []);

  return (
    <View>
      <View style={styles.row}>
        {imageURLs.slice(0, 2).map(({ imageName, url }) => (
					<LazyLoadImage offset = {100}>
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
					</LazyLoadImage>
        ))}
      </View>

      <View style={styles.row}>
        {imageURLs.slice(2, 4).map(({ imageName, url }) => (
					<LazyLoadImage offset = {100}>
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
					</LazyLoadImage>
        ))}
      </View>
      <View style={styles.row}>
        {imageURLs.slice(4, 6).map(({ imageName, url }) => (
					<LazyLoadImage offset = {100}>
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
					</LazyLoadImage>
        ))}
      </View>
      <View style={styles.row}>
        {imageURLs.slice(6, 8).map(({ imageName, url }) => (
					<LazyLoadImage offset = {100}>
          <Block 
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
					</LazyLoadImage>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		width: '100%',
	},
	captionContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#111112',
		paddingVertical: 5,
	},
	block: {
		position: 'relative',
		width: '48%',
		padding: 5,
		backgroundColor: '#dadada',
		borderRadius: 10,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		marginBottom: 55,
	},
	caption: {
		fontSize: 16,
		width: '100%',
		backgroundColor: '#111112',
		paddingTop: 5,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	favoriteButton: {
		position: 'absolute',
		right: 3,
		zIndex: 2,
	},
});

export default GridContainers;

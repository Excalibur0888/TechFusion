import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';
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
				<Image source={imageSource} style={styles.image} lazy/>

				<View style={styles.captionContainer}>
					<Text style={styles.caption} numberOfLines={2}>{blockCaption}</Text>
				</View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

const GridContainers = () => {
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = ['i7 12700KF, RTX 4070ti, 32GB, 2TB.png', 
			'i5 12600K, RTX 3060ti, 16GB, 1,5TB.png', 
			'i3 12100F, GTX 1660S, 16GB, 1,5TB.png', 
			'i3 10100F, GTX 1650, 8GB, 1TB.png',
			 'pc5.jpg', 'pc6.png', 'pc7.jpg', 'pc8.jpg'];

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
			<Text style={styles.inteltitle}>Intel™</Text>
			<View style={styles.intel}>
      <View style={styles.row}>
        {imageURLs.slice(0, 2).map(({ imageName, url }) => (
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
        ))}
      </View>
      <View style={styles.row}>
        {imageURLs.slice(2, 4).map(({ imageName, url }) => (
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
        ))}
      </View>
			</View>
			<Text style={styles.amdtitle}>AMD™</Text>
			<View style={styles.amd}>
      <View style={styles.row}>
        {imageURLs.slice(4, 6).map(({ imageName, url }) => (
          <Block
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
        ))}
      </View>
      <View style={styles.row}>
        {imageURLs.slice(6, 8).map(({ imageName, url }) => (
          <Block 
            key={imageName}
            blockCaption={`${imageName.split('.')[0]}`}
            imageSource={{ uri: url }}
          />
        ))}
      </View>
			</View>
    </View>
  );
};

const getContainerStyles = (borderColor) => {
	return {
		borderWidth: 3,
		borderColor,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		padding: 2,
		marginBottom: 20,
	};
};

const getTitleStyles = (color, backgroundColor) => {
	return {
		color: '#fff',
		width: '20%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		textAlign: 'center',
		fontFamily: 'mt-text',
		fontSize: 20,
		backgroundColor,
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		width: '100%',
	},
	intel: getContainerStyles('#2292dc', '#2292dc'),
  inteltitle: getTitleStyles('#fff', '#2292dc'),

  amd: getContainerStyles('#9e1111', '#9e1111'),
  amdtitle: getTitleStyles('#fff', '#9e1111'),
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
		height: 190,
		borderRadius: 10,
		marginBottom: 55,
	},
	caption: {
		fontSize: 16,
		width: '100%',
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

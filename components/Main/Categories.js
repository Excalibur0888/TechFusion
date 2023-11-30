import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Animated, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { gStyle } from "../../styles/style";
import { getImageDownloadURL } from "./firebaseStorageHelper";

const Block = ({ imageSource, text }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
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
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
          >
            <Text style={gStyle.caption}>{text}</Text>
          </ImageBackground>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Categories = () => {
	const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = ['gaming.jpg', 'office.jpg', 'budget.jpg'];

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
		<View style={styles.row}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Block imageSource={{ uri: imageURLs[0]?.url }} text='Игровые'/>
				<Block imageSource={{ uri: imageURLs[1]?.url }} text='Офисные'/>
				<Block imageSource={{ uri: imageURLs[2]?.url }} text='Бюджетные'/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  block: {
    position: "relative",
    width: 240,
    height: 120,
    padding: 5,
    marginBottom: 15,
    marginRight: 20,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Categories;
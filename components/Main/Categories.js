import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Animated, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { gStyle } from "../../styles/style";

const imageMap = {
  gaming: require("../../assets/bg/gaming.jpg"),
  office: require("../../assets/bg/office.jpg"),
	budget: require("../../assets/bg/budget.jpg")
};

const Block = ({ imageUrl, text }) => {
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
            source={imageMap[imageUrl]}
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
	return (
		<View style={styles.row}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Block imageUrl="gaming" text='Игровые'/>
				<Block imageUrl="office" text='Офисные'/>
				<Block imageUrl="budget" text='Бюджетные'/>
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
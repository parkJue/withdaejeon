import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Image } from "../components";
import { images } from "../utils/images";

// const Container = styled.View`
//   // flex: 1;
//   // justify-content: center;
//   align-items: flex-start;
//   // background-color: ${({ theme }) => theme.background};
// `;

const styles = StyleSheet.create({
  backg: {
    height: "60%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
  },
  container: {
    // justifyContent : "center",
    // flex: 1,
    alignItems: "flex-start",
  },
});

const Detail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image url={images.logo} style={styles.ig} />
      <View style={styles.backg}> 
        <Text>안녕하쎄용</Text>
      </View>
    </SafeAreaView>
  );
};
export default Detail;

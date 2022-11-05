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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Exam = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Exam" onPress={() => navigation.navigate("Detail")} />
    </SafeAreaView>
  );
};
export default Exam;

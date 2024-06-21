import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";

import InputField from "@/components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router, Redirect, Link } from "expo-router";

export default function HomeScreen() {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar style="light" />
      <ScrollView style={styles.bg}>
        <View style={styles.box}>
          <Text style={styles.header}>Sign In</Text>
          <InputField
            textStyle={styles.inputText}
            text="Email"
            fieldStyle={styles.inputStyle}
            value={input.email}
            handleChangeText={(e: any) => setinput({ ...input, email: e })}
          />
          <InputField
            textStyle={styles.inputText}
            text="Password"
            fieldStyle={styles.inputStyle}
            value={input.password}
            handleChangeText={(e: any) => setinput({ ...input, password: e })}
          />
          <View
            style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
          >
            <Text style={styles.text}>Forgot your password?</Text>
            <Link
              href="/explore"
              style={{
                ...styles.text,
                color: "#00adff",
                textDecorationLine: "underline",
              }}
            >
              Reset
            </Link>
          </View>
          <CustomButton
            buttonText="LOG IN"
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonText}
            handlePress={() => router.push("../explore")}
          />
          <View
            style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
          >
            <Text style={styles.text}>Don't have an account?</Text>
            <Link
              href="/explore"
              style={{
                ...styles.text,
                color: "#00adff",
                textDecorationLine: "underline",
              }}
            >
              Registration
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const sizes = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
  boxHeight: Dimensions.get("window").height * 0.9,
  boxWidth: Dimensions.get("window").width * 0.9,
  defaultTextSize: Dimensions.get("window").height * 0.025,
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#00adff",
    marginTop: sizes.height * 0.05,
    height: "10%",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: sizes.boxHeight * 0.025,
    flexDirection: "row",
  },
  submitButtonText: {
    fontSize: sizes.defaultTextSize * 1.2,
    color: "black",
    paddingLeft: "7%",
    flex: 1,
  },

  inputText: {
    fontSize: sizes.defaultTextSize * 1.2,
    color: "lightgray",
    paddingLeft: "7%",
    flex: 1,
  },
  inputStyle: {
    backgroundColor: "#090a22",
    marginTop: sizes.height * 0.05,
    height: "10%",
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: sizes.boxHeight * 0.025,
    flexDirection: "row",
  },

  header: {
    color: "white",
    textAlign: "center",
    // marginTop: sizes.boxHeight * 0.05,
    fontSize: sizes.defaultTextSize * 2,
  },
  text: {
    color: "white",
    textAlign: "left",
    marginTop: sizes.boxHeight * 0.05,
    fontSize: sizes.defaultTextSize * 0.8,
  },
  bg: {
    flex: 1,
    height: "100%",
    backgroundColor: "#0a011b",
  },
  box: {
    width: sizes.boxWidth,
    height: sizes.boxHeight,
    alignSelf: "center",
    marginTop: sizes.boxHeight * 0.025,
    borderRadius: sizes.boxHeight * 0.05,
    backgroundColor: "#111627",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

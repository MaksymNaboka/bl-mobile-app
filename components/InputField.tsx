import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function InputField({
  textStyle,
  text,
  fieldStyle,
  placeholder,
  handleChangeText,
}: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={fieldStyle}>
      <TextInput
        style={textStyle}
        placeholder={text}
        placeholderTextColor={"white"}
        onChangeText={handleChangeText}
        secureTextEntry={text === "Password" && !passwordVisible}
      ></TextInput>
      {text === "Password" && (
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={!passwordVisible ? "eye" : "eye-off"}
            color={"white"}
            size={textStyle.fontSize}
            style={{ paddingRight: "10%" }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomButton({
  buttonText,
  buttonStyle,
  textStyle,
  handlePress,
}: any) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={textStyle}>{buttonText}</Text>
      {buttonText === "LOG IN" && (
        <Ionicons
          name={"arrow-forward"}
          color={"black"}
          size={textStyle.fontSize * 1.5}
          style={{ paddingRight: "10%" }}
        />
      )}
    </TouchableOpacity>
  );
}

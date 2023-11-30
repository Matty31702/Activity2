import { View, Text, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: "center", // Center the content vertically
      }}
      colors={[COLORS.orange, COLORS.primary]}
    >
      {/* content */}
      <View
        style={{
          paddingHorizontal: 22,
          width: "100%",
          alignItems: "center", // Center the content horizontally
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: 800,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Let's Get
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: 800,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Started
        </Text>

        <View>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              textAlign: "justify",
              marginTop: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <Button
          title="Join Now"
          onPress={() => navigation.navigate("Register")}
          style={{
            marginTop: 70,
            width: "100%",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Already have an Account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.secondary,
                fontWeight: "bold",
                marginLeft: 4,
              }}
            >
              Login Here!
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

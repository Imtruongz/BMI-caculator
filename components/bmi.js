import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

const bmi = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
//   const inputRef = useRef();

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = parseFloat(heightValue / 100);
      const weightInKilogram = parseFloat(weightValue);
      const bmi = (
        weightInKilogram /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "Nghiện vc";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "Ngon luôn";
      } else if (bmi >= 25 && bmi < 30) {
        message = "Như lợn";
      } else {
        message = "Béo phì man";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
    // inputRef.current.focus();
  };

//   useEffect(() => {
//     if (bmi !== "") {
//       setHeightValue("");
//       setWeightValue("");
//     }
//   }, [bmiValue]);
  return (
    <View style={{ paddingTop: 50 }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Tính xem thằng nào Lợn hay Nghiện
      </Text>
      <TextInput
        // ref={inputRef}
        placeholder="Chieu cao"
        placeholderTextColor={"#979593"}
        inputMode="numeric"
        style={styles.inputTitle}
        onChangeText={(text) => setHeightValue(text)}
        value={heightValue}
      />
      <TextInput
        placeholder="Can nang"
        placeholderTextColor={"#979593"}
        inputMode="numeric"
        style={styles.inputTitle}
        onChangeText={(text) => setWeightValue(text)}
        value={weightValue}
      />
      {/* Cach tinh BMI: Can nang / Chieu cao ^2 */}
      <TouchableOpacity onPress={calculateBmi} style={styles.inputTitle}>
        <Text>Check</Text>
      </TouchableOpacity>

      {bmiValue && bmiMessage && (
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          KẾT QUẢ:{bmiValue}
          {bmiMessage}
        </Text>
      )}
    </View>
  );
};

export default bmi;

const styles = StyleSheet.create({
  inputTitle: {
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },
});

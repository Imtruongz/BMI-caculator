import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    flex: 2,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 80,
    paddingLeft: 30,
    color: "blue",
  },

  main: {
    flex: 9,
    flexDirection: "column",
  },
  
});

export default styles;

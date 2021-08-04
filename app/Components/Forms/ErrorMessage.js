import React from "react";
import { StyleSheet,Text } from "react-native";


function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {       color: "red",
  marginTop:5,
  textAlign: "center",
  fontSize: 14,
  fontWeight:"bold", },
});

export default ErrorMessage;
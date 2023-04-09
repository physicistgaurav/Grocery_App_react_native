import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "react-native-vector-icons";

const CardWidget = ({
  imageSource,
  label,
  description,
  quantity,
  price,
  onCancel,
}) => {
  const handleCancel = () => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.quantity}>{quantity}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleCancel}>
        <FontAwesome
          name="close"
          size={24}
          color="red"
          style={styles.cancelIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardWidget;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 90,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    color: "#666",
    marginRight: 10,
  },
  price: {
    fontSize: 18,
    // fontWeight: "bold",
    fontWeight: "400",
  },
  cancelIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

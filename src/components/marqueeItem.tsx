import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GlassView } from 'expo-glass-effect';

type MarqueeItemProps = {
  title: string;
  imageUri: string;
};

export default function MarqueeItem({ title, imageUri }: MarqueeItemProps) {
  return (
    <GlassView 
      glassEffectStyle="clear"
      style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image source={{ uri: imageUri }} style={styles.avatar} />
        </View>

        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    </GlassView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 64,
    borderRadius: 14,
    paddingHorizontal: 12,

    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  left: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderCurve: "continuous" as const,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  content: {
    flexGrow: 0,
    flexShrink: 1,
  },
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "700",
  },
});

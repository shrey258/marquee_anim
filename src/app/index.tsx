import { Text, View } from "react-native";

import MarqueeItem from "../components/marqueeItem";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Marquee Animation</Text>

      <View style={{ height: 100 }}></View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          backgroundColor: "grey",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <MarqueeItem title="Linear" imageUri="https://linear.app/favicon.ico" />
        <MarqueeItem
          title="Vercel"
          imageUri="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
        />
        <MarqueeItem
          title="Motion"
          imageUri="https://www.framer.com/motion/favicon.ico"
        />
      </View>
    </View>
  );
}

import { Text, View } from "react-native";

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
      <View style={{height:100}}></View>

      <View style={{width: '100%', alignItems: "center", height: 100, backgroundColor: 'grey'}}>
        
      </View>
    </View>
  );
}

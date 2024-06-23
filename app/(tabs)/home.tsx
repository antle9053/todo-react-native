import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { AppContext, AppContextType } from "@/context";
import { useContext } from "react";
import { Image, StyleSheet, Pressable, Text } from "react-native";
import { styled } from "nativewind";

const TWButton = styled(Pressable);
const TWText = styled(Text);

export default function HomeScreen() {
  const { count, increase } = useContext(AppContext) as AppContextType;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView>
        <TWButton
          className="bg-red-500 px-3 py-1 rounded-full"
          onPress={increase}
          accessibilityLabel="Learn more about this purple button"
        >
          <TWText className="text-white font-bold">{count}</TWText>
        </TWButton>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

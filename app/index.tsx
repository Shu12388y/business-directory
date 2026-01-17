import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { Image, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Box className="relative">
      <Box className="">
        <Image
          className="h-full w-full opacity-70 blur-md"
          source={require("@/assets/images/background.jpg")}
        />
      </Box>
      <View className="flex flex-col w-full items-center justify-center mt-10 absolute bottom-20">
        <Box>
          <Text className="text-4xl text-center font-bold mb-10 text-white shadow-slate-600 shadow-lg">
            Welcome to Business Directory
          </Text>
        </Box>
        <Pressable className="bg-white px-16 py-3 rounded-2xl border-2 ">
          <Box className=" flex flex-row items-center justify-between gap-2">
            <Image
              className="w-12 h-12"
              source={require("@/assets/images/google.png")}
            />
            <Text className="text-center text-2xl">Signin with Google</Text>
          </Box>
        </Pressable>
      </View>
    </Box>
  );
}

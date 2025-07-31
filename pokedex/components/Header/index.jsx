import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSource = require("@/assets/images/header.jpg");

export default function Header({ title, back = false }) {
    const router = useRouter();

}

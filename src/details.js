import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function DetailsPage({ route, navigation }) {
    const { song } = route.params

    useEffect(() => {

    }, []);

    const detialsBody = () => {
        return (
            <View>
                <View style={{ margin: 35, alignItems: "center" }}>
                    <Avatar
                        source={{
                            uri: song.artworkUrl100,
                        }}
                        size="xlarge" />
                    <View style={{ marginTop: 30, alignItems: "center" }}>
                        <Text style={{ overflow: "visible", fontSize: 20, fontWeight: "bold" }} numberOfLines={2}>{song.artistName} - {song.trackName}</Text>
                        <Text numberOfLines={1} style={{ marginTop: 10, fontSize: 15 }}>{song.collectionName}</Text>
                    </View>

                </View>
                <View style={{ marginTop: 10, justifyContent: "space-evenly", flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}> Track Price  </Text>
                    <Text>-</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{song.trackPrice} {song.currency}</Text>
                </View>
                <View style={{ marginTop: 30, justifyContent: "space-evenly", flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}> collection Price  </Text>
                    <Text>-</Text>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{song.collectionPrice} {song.currency}</Text>
                </View>
                <View style={{ marginTop: 30, justifyContent: "space-evenly", flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", borderWidth: 1, padding: 10, paddingHorizontal: 20, borderRadius: 15 }}>
                        Links
                    </Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Artist View Url  </Text>
                    <Text style={{ fontSize: 16, color: "blue" }}>{song.artistViewUrl}</Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Track View Url  </Text>
                    <Text style={{ fontSize: 16, color: "blue" }}>{song.trackViewUrl}</Text>
                </View>
                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Preview Url  </Text>
                    <Text style={{ fontSize: 16, color: "blue" }}>{song.previewUrl}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerComponent}>
                <Icons
                    name={"keyboard-backspace"}
                    size={27}
                    style={{ flex: 0.2 }}
                    onPress={() => navigation.goBack()}
                />
                <View style={{
                    alignItems: 'center',
                    justifyContent: "center",
                    flex: 0.6
                }}>
                    <Text style={styles.headerTitle}>Song Details</Text>
                </View>
            </View>
            {detialsBody()}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    headerTitle: {
        fontSize: 20,
        letterSpacing: 1,
        fontFamily: "sans-serif",
    },
    headerComponent: {
        flexDirection: "row",
        height: 30,
        alignItems: 'center',
        justifyContent: "center"
    },
});

import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ActivityIndicator, Colors } from 'react-native-paper';


export default function HomePage({ navigation }) {
    const [loading, setLoading] = React.useState(false);
    const [songsList, setSongsList] = React.useState([]);

    useEffect(() => {
        getSongs()
    }, []);

    const getSongs = () => {
        setLoading(true);
        fetch('https://itunes.apple.com/search?term=Michael+jackson', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                setSongsList(responseJson)
                setLoading(false);
            }).catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }

    const loadingComponent = () => {
        return (
            <View style={styles.loadingBar}>
                <ActivityIndicator size={35} animating={true} color={Colors.black} />
            </View>
        )
    }

    const songClicked = (item) => {
        navigation.navigate("DetailsPage", { song: item })
    }


    const SongsCard = (params) => {
        return (
            <TouchableOpacity
                onPress={params.songClicked}
            >
                <View style={{ height: 100, borderColor: "#c1c1c1", borderWidth: 1, marginBottom: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", paddingLeft: 10 }}>
                            <Avatar
                                rounded
                                source={{
                                    uri: params.song.artworkUrl100,
                                }}
                                size="large" />
                        </View>
                        <View style={{ paddingLeft: 10, width: "70%", justifyContent: "center" }}>
                            <Text style={{ overflow: "visible", fontSize: 15, fontWeight: "bold" }} numberOfLines={2}>{params.song.artistName} - {params.song.trackName}</Text>
                            <Text numberOfLines={1}>{params.song.collectionName}</Text>
                            <Text numberOfLines={1}>{params.song.trackPrice} {params.song.currency}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    const SongsListComponent = () => {
        console.log(songsList.results)
        return (
            <View style={styles.songsListComponent}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={songsList.results}
                    keyExtractor={item => item.trackId}
                    renderItem={({ item }) => <SongsCard song={item} songClicked={() => songClicked(item)} />}
                    style={{ marginBottom: 80 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={getSongs}
                        />
                    }
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerComponent}>
                <Text style={styles.headerTitle}>Songs App</Text>
                {songsList.resultCount && <Text >{songsList.resultCount} Songs </Text>}

            </View>
            {loading && loadingComponent()}
            {!loading && SongsListComponent()}
        </View>

    );
}

const styles = StyleSheet.create({
    songsListComponent: {
        paddingTop: 15,
        // marginBottom: 80
    },
    loadingBar: {
        marginTop: 40
    },
    container: {
        margin: 20,
        marginTop: 50
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        fontFamily: "sans-serif",
    },
    headerComponent: {
        flexDirection: "row",
        height: 30,
        alignItems: 'center',
        borderBottomColor: "#c1c1c1",
        justifyContent: "space-around"
    },
});

import React, { Component } from "react";
import { Alert, Image, Dimensions } from "react-native";
import { Container, Content, Button, Text } from "native-base";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = () => {
    const success = response => {
      const {
        coords: { latitude, longitude }
      } = response;
      this.props.navigation.navigate("Results", {
        longitude,
        latitude
      });
    };
    const failure = error => {
      Alert.alert(
        `Impossible de récupérer la position géographique : ${error.message}`
      );
    };
    navigator.geolocation.getCurrentPosition(success, failure);
  };

  render() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get(
      "screen"
    );

    return (
      <Container>
        <Content padder>
          <Button primary block onPress={this.handleSearch}>
            <Text>Rechercher les pandas autour de moi</Text>
          </Button>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://media.giphy.com/media/wT71Ce9oKBQGc/giphy.gif"
            }}
            style={{
              width: screenWidth - 30,
              height: screenHeight / 1.8
            }}
          />
        </Content>
      </Container>
    );
  }
}

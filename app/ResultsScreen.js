import React, { Component } from "react";
import { Alert, FlatList } from "react-native";
import {
  Body,
  Container,
  Content,
  ListItem,
  Text,
  Right,
  Icon,
  View
} from "native-base";

import data from "./pandas.json";

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = item => {
    this.props.navigation.navigate("Details", { item });
  };

  renderItem = ({ item }) => {
    return (
      <ListItem key={item.key} onPress={() => this.handlePress(item)}>
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.distance}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  };

  render() {
    const { latitude, longitude } = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <View>
            <Text>Les pandas autour de vous :</Text>
            <Text note>Latitude : {latitude}</Text>
            <Text note>Longitude : {longitude}</Text>
          </View>
          <FlatList data={data} renderItem={this.renderItem} />
        </Content>
      </Container>
    );
  }
}

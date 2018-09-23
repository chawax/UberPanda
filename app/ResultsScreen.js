import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  coord: {
    marginLeft: 10
  }
});

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
          <View style={{ margin: 10 }}>
            <Text>Les pandas autour de vous :</Text>
            <Text style={styles.coord} note>
              Latitude : {latitude}
            </Text>
            <Text style={styles.coord} note>
              Longitude : {longitude}
            </Text>
          </View>
          <FlatList data={data} renderItem={this.renderItem} />
        </Content>
      </Container>
    );
  }
}

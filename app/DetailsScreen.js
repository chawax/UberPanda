import React, { Component } from "react";
import { Image } from "react-native";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Text,
  Badge
} from "native-base";

export default class DetailScreen extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>{item.name}</Text>
                <Text note>À {item.distance} de vous</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Image
                source={{
                  uri: item.image
                }}
                style={{
                  width: null,
                  height: 200,
                  flex: 1
                }}
              />
            </CardItem>
            {item.interests && (
              <CardItem>
                <Left>
                  {item.interests.map((interest, index) => (
                    <Badge primary key={index} style={{ marginRight: 5 }}>
                      <Text>{interest}</Text>
                    </Badge>
                  ))}
                </Left>
              </CardItem>
            )}
          </Card>
        </Content>
      </Container>
    );
  }
}

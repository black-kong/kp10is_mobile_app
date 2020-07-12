import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";

import S1 from "../screens/screen1";
import S2 from "../screens/screen2";
import S3 from "../screens/screen3";
import S4 from "../screens/screen4";
import S5 from "../screens/screen5";
import S6 from "../screens/screen6";

export default class P1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading="Acceuil"
            tabStyle={{ backgroundColor: "#3498db" }}
            activeTabStyle={{ backgroundColor: "#3498db" }}
          >
            <S1 />
          </Tab>
          <Tab
            heading="Services"
            tabStyle={{ backgroundColor: "#3498db" }}
            activeTabStyle={{ backgroundColor: "#3498db" }}
          >
            <S2 />
          </Tab>

          <Tab
            heading=" Offres"
            tabStyle={{ backgroundColor: "#3498db" }}
            activeTabStyle={{ backgroundColor: "#3498db" }}
          >
            <S3 />
          </Tab>

          <Tab
            heading="Relation"
            tabStyle={{ backgroundColor: "#3498db" }}
            activeTabStyle={{ backgroundColor: "#3498db" }}
          >
            <S4 />
          </Tab>

          <Tab
            heading="Login"
            tabStyle={{ backgroundColor: "#3498db" }}
            activeTabStyle={{ backgroundColor: "#3498db" }}
          >
            <S5 navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

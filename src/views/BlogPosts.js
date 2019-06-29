/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Emoji Url present in t content-management folder
      emojiBackgroundImage: require("../images/content-management/smiling_face.png")
    };
  }

  //Straight Face Image path  - "../images/content-management/straight_face.png"
  //Sad Face Image path  - "../images/content-management/sad_face.png"

  render() {
    return (
      <Container fluid>
        <Row>
          {
            <Card>
              <img src={this.state.emojiBackgroundImage} style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "45.3%",
                padding: "135.2px 0px"
              }}/>
            </Card>
          }
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;

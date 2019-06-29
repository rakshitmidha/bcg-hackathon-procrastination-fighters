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
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/smiling_face.png")
        }
      ]
    };
  }

  render() {
    const {PostsListOne} = this.state;

    return (
      <Container fluid>
        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post) => (
            <Card>
              <img src={post.backgroundImage} style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "45.3%",
                padding: "135.2px 0px"
              }}/>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;

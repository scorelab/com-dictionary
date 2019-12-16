import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <h3>Community Dictionary</h3>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;

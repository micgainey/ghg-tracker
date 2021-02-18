import React from 'react';
import { Grid, Header, Image, Container, Segment } from 'semantic-ui-react';
import { Pie } from 'react-chartjs-2';

class UsersCumulativePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        labels: ['Telework', 'Other', 'Carpool', 'Electric Vehicle'],
        datasets: [{ data: [84, 4, 4, 7], backgroundColor: ['#4f7fa0', '#4b8796', '#6872a0', '#846391'],
        }],
      };
    }

    render() {
      return (
        <div className='background-all'>
          <div style={{ paddingBottom: '80px' }}>
            <Container>
              <Grid.Column>
                <div>
                  <Header as='h1' textAlign='center'> Cumulative Data Of Users</Header>
                  <br/>
                </div>
                <Grid>
                  <Grid.Column width={9}>
                    {/*<Image src="/images/cumulative-page/graph.png"/>*/}
                    <Pie data={{ labels: this.state.labels, datasets: this.state.datasets }} height='200px'/>
                  </Grid.Column>
                  <Grid.Column textAlign='right' width={7}>
                    <Header as='h1' color='blue'> MODES OF TRAVEL COUNT </Header>
                    <Header as='h2'>84% OF USERS TELEWORK</Header>
                    <Header as='h2'>7% OF USERS USE ELECTRIC VEHICLES</Header>
                    <Header as='h2'>4% OF USERS CARPOOL</Header>
                    <Header as='h2'>4% OF USERS USE PUBLIC TRANSPORTATION</Header>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <div style={{ paddingTop: '20px'}}></div>
              <Header as='h1' textAlign='center'>
                ENVIRONMENTAL IMPACT
                <br/>
              </Header>
              <Grid relaxed columns={4}>
                <Grid.Column>
                  <Segment>
                    <Image src="/images/cumulative-page/car.png"/>
                    <Header as='h1' dividing textAlign='center'>
                      Vehicle Miles Travel Reduced
                    </Header>
                    <Header as='h2' textAlign='center' block>
                      4,298 MILES
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Image src="/images/cumulative-page/C.png"/>
                    <Header as='h1' dividing textAlign='center'>
                      Green House Gas (GHG) Reduced
                    </Header>
                    <Header as='h2' textAlign='center' block>
                      2,176 POUNDS
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Image src="/images/cumulative-page/gas.png"/>
                    <Header as='h1' dividing textAlign='center'>
                      Gallons of Gas Saved
                    </Header>
                    <Header as='h2' textAlign='center' block>
                      121 GALLONS
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Image src="/images/cumulative-page/bike.png"/>
                    <Header as='h1' dividing textAlign='center'>
                      Days Biked to Work
                    </Header>
                    <Header as='h2' textAlign='center' block>
                      10 DAYS
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        </div>
      );
  }
}

export default UsersCumulativePage;

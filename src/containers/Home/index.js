import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import CenterBlock from 'components/CenterBlock';
import withRoot from 'withRoot';
import beer from 'shared/imgs/two-pints-beer-main.jpg';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <CenterBlock className="col-xs-12 col-md-6">
              <div className="form-group">
                <Typography variant="display1" noWrap gutterBottom>
                          New way to buy beer
                </Typography>
              </div>

              <img src={beer} alt="beer" width="100%" />
            </CenterBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Home));

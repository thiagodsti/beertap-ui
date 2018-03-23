import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import CenterBlock from 'components/CenterBlock';
import withRoot from 'withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <CenterBlock className="col-xs-12 col-md-6">
              <div className="form-group">
                <Typography variant="display1" noWrap gutterBottom>
                          About
                </Typography>
              </div>
              <div>
                Beer is good
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a gravida ipsum.
                Vivamus vestibulum neque eu interdum eleifend. Maecenas dapibus semper dignissim.
                Ut purus odio, commodo eget malesuada convallis, aliquet hendrerit nibh.
                Morbi euismod lacinia volutpat.
                Sed vel ante quis nibh hendrerit eleifend eget id est.
                Proin mollis diam eu libero laoreet, nec scelerisque enim egestas.
                Praesent vel lectus vitae elit volutpat eleifend eu id enim.
                Aenean placerat turpis quis tempor facilisis.
              </div>
            </CenterBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(About));

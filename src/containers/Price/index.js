import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import 'react-select/dist/react-select.css';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RightButtons from 'components/RightButtons';
import CenterBlock from 'components/CenterBlock';
import withRoot from 'withRoot';
import { InsuranceAPI } from 'api/InsuranceAPI';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Price extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <CenterBlock className="col-xs-12 col-md-6">
              <div className="form-group">
                <Typography variant="display1" noWrap gutterBottom>
                          Price
                </Typography>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a gravida ipsum.
                Vivamus vestibulum neque eu interdum eleifend. Maecenas dapibus semper dignissim.
                Ut purus odio, commodo eget malesuada convallis, aliquet hendrerit nibh.
                Morbi euismod lacinia volutpat.
                Sed vel ante quis nibh hendrerit eleifend eget id est.
                Proin mollis diam eu libero laoreet, nec scelerisque enim egestas.
                Praesent vel lectus vitae elit volutpat eleifend eu id enim.
                Aenean placerat turpis quis tempor facilisis.
                </div>


              </div>
            </CenterBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Price));

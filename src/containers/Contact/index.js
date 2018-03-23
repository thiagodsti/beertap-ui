import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import 'react-select/dist/react-select.css';
import Snackbar from 'material-ui/Snackbar';
import { CircularProgress } from 'material-ui/Progress';
import RightButtons from 'components/RightButtons';
import CenterBlock from 'components/CenterBlock';
import withRoot from 'withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    openNotification: false,
    message: '',
    loading: new Set(),
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.addLoading('saving');

    const user = {
      name: this.state.name,
      email: this.state.email,
    };

    window.trackAPI.then((track) => {
      track.createContact(user)
        .then((response) => {
          this.showNotification('Contact saved with success');
          this.clearForm(null);
        })
        .catch((err) => {
          this.showNotification(`Error to save Contact: ${err}`);
        });
    }).finally(() => {
      this.removeLoading('saving');
    });
  }

  clearForm = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      name: '',
      email: '',
    });
  }

  handleRequestClose = () => {
    this.setState({
      openNotification: false,
    });
  };


  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  showNotification = (message) => {
    this.setState({
      openNotification: true,
      message,
    });
  }

  removeLoading = (...components) => {
    const { loading } = this.state;
    components.forEach((component) => {
      loading.delete(component);
    });
    this.setState(loading);
  }

  addLoading = (...components) => {
    const { loading } = this.state;
    components.forEach((component) => {
      loading.add(component);
    });
    this.setState(loading);
  }

  render() {
    const {
      openNotification, message, name, loading, email,
    } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <CenterBlock className="col-xs-12 col-md-6">
              <form className="form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <Typography variant="display1" noWrap gutterBottom>
                          Contact
                  </Typography>
                </div>

                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input className="form-control" type="email" name="email" value={email} onChange={this.handleChange} />
                </div>

                { loading.has('saving') ?
                  <div className="row justify-content-center">
                    <CircularProgress size={30} />
                  </div> : ''
                }

                <RightButtons>
                  <button
                    className="btn btn-secondary"
                    style={{ marginRight: '20px' }}
                    onClick={this.clearForm}
                    disabled={loading.has('saving')}
                  >
                          Clear
                  </button>
                  <button className="btn btn-success" disabled={loading.has('saving')} >
                          Save
                  </button>
                </RightButtons>
              </form>
            </CenterBlock>
          </div>
        </div>


        <Snackbar
          open={openNotification}
          message={message}
          autoHideDuration={4000}
          onClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Contact));

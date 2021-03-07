import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getContacts, setLoading} from '../../redux/Actions';
import {Text, Button} from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  getContacts = async () => {
    this.props.setLoading();
    this.props.getContacts();
    this.props.navigation.navigate('Contacts');
  };

  render() {
    return (
      <View>
        <Button title="Get Contacts" onPress={this.getContacts} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
  setLoading: () => dispatch(setLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

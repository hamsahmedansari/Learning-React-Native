import React, { Component } from "react";
import { SearchBar } from "react-native-elements";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  _onSearchBarChange = parm => {
    this.setState({ search: parm });
    // this.props.onSearch(parm);
  };
  render() {
    const { search } = this.state;
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme={true}
        value={search}
        onChangeText={this._onSearchBarChange}
        round
      />
    );
  }
}

export default header;

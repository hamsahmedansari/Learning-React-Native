import React, { Component } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";

import separator from "./seprator";
import Header from "./header";

class task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      filterData: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          filterData:
            page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  onSearch = search => {
    const data = [...this.state.data];
    if (!search.length) {
      return this.setState({
        filterData: data
      });
    }
    const filterData = data.filter(
      d =>
        String(d.name.first).includes(search) ||
        String(d.name.last).includes(search)
    );
    this.setState({
      filterData
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }
  render() {
    const { error, loading, filterData: data } = this.state;
    if (loading)
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    // if (!data.length) return <Text>Not Found</Text>;
    if (error) return <Text>Error Found</Text>;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={separator}
          ListHeaderComponent={Header}
          ListEmptyComponent={() => <ListItem title={`List is Empty`} />}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              //   avatar={{ uri: item.picture.thumbnail }}
            />
          )}
        />
      </View>
    );
  }
}

export default task5;

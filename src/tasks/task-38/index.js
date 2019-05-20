import React, { Component } from "react";
import { View, ImageEditor, Image, Button } from "react-native";

class task38 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://lovethynerd.com/wp-content/uploads/2019/04/Stark0.jpg",
      newImage: false
    };
  }
  _handelCropImage = () => {
    ImageEditor.cropImage(
      this.state.image,
      {
        offset: { x: 50, y: 50 },
        size: { width: 200, height: 200 }
      },
      success => {
        this.setState({
          newImage: success
        });
        alert(success);
        console.log(success);
      },
      err => {
        alert("Error");
        console.log(err);
      }
    );
  };
  render() {
    return (
      <View>
        <Image
          source={{
            uri: this.state.image
          }}
          style={{ margin: 5, width: 300, height: 200 }}
        />
        <Button title="Crop this image" onPress={this._handelCropImage} />
        {this.state.newImage && (
          <Image
            source={{
              uri: this.state.newImage
            }}
            style={{ margin: 5, width: 300, height: 200 }}
          />
        )}
      </View>
    );
  }
}

export default task38;

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  FlatList,
  List,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Modal,
  StyleSheet
} from "react-native";

import { Button } from "react-native-elements";
import I18n from "react-native-i18n";
import Icon from "react-native-vector-icons/FontAwesome"; 
 

/*

componant to get autocomplete on a input field
inital state : display a row with "icone"+ input + "clear button"
when you clik on the input it open a modal with the same previous row, and will display autocompleted item bottom it.
when you clik on item, set it with onSelectCallback function and close modal 


usage  :
    <Autocomplete
        title={"Localité"}
        value={this.state.localite}
        iconname={"location-arrow"}
        placeholder={"Localité inconnue"} 
        autocompleteCallback={value => }           
        onSelectCallback={localite => this.setState({ localite })}
        onClearCallback={values=>{
            this.setState({ localite: null })
        }}
    />
*/
export default class Autocomplete extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
      autocompletedfields: []
    };
  }

  toggleModalVisible() {
    this.setState({ showmodal: !this.state.showmodal, autocompletedfields: [] });
  }
  renderNormal() {
    return (
      <View style={thisstyles.searchSection}>
        <Icon style={{ padding: 10 }} name={this.props.iconname} size={20} color="#000" />
        <TextInput
          autoCorrect={false}
          value={this.props.value}
          style={thisstyles.input}
          placeholder={this.props.placeholder}
          onFocus={searchString => {
            this.setState({ showmodal: true });
          }}
          underlineColorAndroid="transparent"
        />
        <Icon
          style={{ padding: 10 }}
          name="close"
          size={20}
          color="#000"
          onPress={res => this.props.onClearCallback()}
        />
      </View>
    );
  }
  renderWithModal() {
    return (
      <Modal
        animationType={"none"}
        transparent={false}
        visible={this.state.modalOrganeVisible}
        onRequestClose={() => this.toggleModalVisible()}
      >
        <View style={thisstyles.alignCenter}>
          <Text style={thisstyles.title}>{this.props.title}</Text>
        </View>
        <View style={thisstyles.searchSection}>
          <Icon style={{ padding: 10 }} name={this.props.iconname} size={20} color="#000" />
          <TextInput
            autoFocus={true}
            autoCorrect={false}
            value={this.props.value}
            style={thisstyles.input}
            placeholder={this.props.placeholder}
            onChangeText={searchString => {
              // this.setState({ value: searchString });
              this.props.onSelectCallback(searchString);
              this.props.autocompleteCallback(searchString).then(res => {
                this.setState({ autocompletedfields: res });
              });
            }}
            underlineColorAndroid="transparent"
          />
          <Icon
            style={{ padding: 10 }}
            name="close"
            size={20}
            color="#000"
            onPress={res => this.props.onSelectCallback(null)}
          />
        </View>
        <FlatList
          data={this.state.autocompletedfields}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => this.renderItem(item)}
          initialNumToRender={10}
          ItemSeparatorComponent={this.renderSeparator}
        />

        <View style={thisstyles.buttonBottom}>
          <Button
            title={I18n.t("annuler")}
            onPress={() => this.toggleModalVisible()}
            buttonStyle={thisstyles.cancelButton}
            icon={{ name: "close", type: "font-awesome" }}
          />
        </View>
      </Modal>
    );
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "96%",
          backgroundColor: "#CED0CE",
          marginLeft: "2%"
        }}
      />
    );
  };
  renderItem = item => {
    // style={{ alignItems: "center", justifyContent: "center" }}
    return (
      <View>
        <TouchableHighlight
          underlayColor="grey"
          onPress={() => {
            this.props.onSelectCallback(item);
            this.toggleModalVisible();
          }}
          style={[thisstyles.bordergrey, { margin: 5 }]}
        >
          <Text style={thisstyles.title}>{item}</Text>
        </TouchableHighlight>
      </View>
    );
  };
  render() {
    return this.state.showmodal ? this.renderWithModal() : this.renderNormal();
  }
}

const thisstyles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    marginTop: 1,
    marginBottom: 1
  },
  input: {
    flex: 1,
    margin: 2,
    color: "black"
  },
  title: {
    fontSize: 20,
    margin: 5
  },
   alignCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
    buttonBottomContainer: {
    position: 'absolute',
    bottom: 5,
    left:5,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "orange"   
  },
});

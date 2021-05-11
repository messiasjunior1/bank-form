import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Switch, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      sexo: [
        { key: 1, sexo: "Masculino" },
        { key: 2, sexo: "Feminino" },
        { key: 3, sexo: "Outro" },
      ],
      sexoSelecionado: 0,
      limiteConta: 0,
    };
  }

  render() {
    let itensSexo = this.state.sexo.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.sexo} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image
            style={styles.imgsize}
            source={require("./assets/bank-icon.png")}
          />
          <Text style={styles.centralText}>Nosso Banco</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />
          <Text style={styles.inputText}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            keyboardType="numeric"
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputText}>Sexo:</Text>
            <Picker
              style={{ width: 200 }}
              selectedValue={this.state.sexoSelecionado}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sexoSelecionado: itemValue })
              }
            >
              {itensSexo}
            </Picker>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputText}>Estudante: </Text>
            <Switch
              value={this.state.status}
              onValueChange={(valorSelecionado) =>
                this.setState({ status: valorSelecionado })
              }
              trackColor={{ false: "#767577", true: "orange" }}
              thumbColor={this.state.status ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputText}>Seu Limite: <Text style={{color: 'red'}}> R$ {this.state.limiteConta.toFixed(2).replace('.', ',')}</Text> </Text>
          </View>
          <View>
            <Slider
              style={{ width: 350, height: 40 }}
              minimumValue={0}
              maximumValue={5000}
              minimumTrackTintColor="orange"
              maximumTrackTintColor="#000000"
              thumbTintColor="#dbb360"
              onValueChange={(valor) => this.setState({limiteConta: valor})}
              value={this.state.limiteConta}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: 18, color: 'white'}}>Abrir Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    flexDirection: "column",
  },
  head: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  inputContainer: {
    flex: 1.5,
    backgroundColor: "#fff",
  },

  imgsize: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },

  centralText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  inputText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
    paddingLeft: 0,
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "orange",
    padding: 10,
  },
  button: {
    width: 350,
    height: 50,
    borderColor: "#9e815a",
    backgroundColor: "orange",
    borderWidth: 3,
    borderRadius: 25,
    alignItems: 'center',
    padding: 10
  }
});

import React, {useState} from "react";
import {View,
        StyleSheet,
        FlatList,
        Button,
        TouchableHighlight,
        TextInput,
        Text
  } from "react-native";

const App = () => {

  const [id, setId] = useState (1);
  const [nome, setNome] = useState ("");
  const [tel, setTel] = useState ("");
  const [agenda, setAgenda] = useState([]);
  
  const addItem = () =>{
    if(nome.length > 0 && tel.length > 0){
      const newList = agenda.concat({ 'id': id, 'nome': nome, 'tel': tel });
      setAgenda(newList);
      setId(id +1);
      setNome("");
      setTel("");
    } else {
      alert("Campo obrigatório não preenchido");
    }
  }
   
  const delItem = (id) => {
    setAgenda(agenda.filter(item => item.id !== id));
  }
  
  return (
    <View style={styles.viewMain}>
      <Text style={styles.titulo}>Agenda Telefônica</Text>

      <View style={styles.viewInput}>
        <Text style={styles.text}>Nome: </Text>
        <TextInput value={nome} style={styles.input} onChangeText={(val) => setNome(val)}/>
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.text}>Telefone: </Text>
        <TextInput value={tel} style={styles.input} onChangeText={(val) => setTel(val)}/>
      </View>
      
      <View style={styles.viewButton}>
        <Button title="ADICIONAR" onPress={addItem}/>
      </View>

      <View style={styles.viewList}>
        <FlatList data={agenda}
                  renderItem={({item}) => (
                    <View style={styles.viewListItem1}>
                    <View style={styles.viewListItem2}>
                      <Text style={styles.listNome}>{item.nome}</Text>
                      <Text style={styles.listTel}>{item.tel}</Text>
                    </View>
                        <TouchableHighlight key={item.id} onPress={ () => {delItem(item.id)}}>
                          <Text style={styles.listDel}>X</Text>
                        </TouchableHighlight>
                  </View>
          )}
        />
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  viewMain: {
    flex: 1
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 15,
    paddingBottom: 25
  },
  viewInput: {
    height: 30,
    textAlignVertical: "center",
    margin: 5,
    marginStart: 10,
    marginEnd: 15,
    flexDirection: "row"
  },
  text: {
    textAlign: "right",
    fontSize: 20,
    width: 90
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    padding: 0,
    paddingStart: 10,
    flex: 1
  },
  viewButton: {
    margin: 5,
    borderWidth: 1
  },
  viewList: {
    flex: 1
  },
  viewListItem1: {
    backgroundColor: '#DEDEDE',
    flexDirection: "row",
    margin: 7
  },
  viewListItem2: {
    flexDirection: "column",
    flex: 10
  },
  listNome: {
    fontSize: 20,
    padding: 2,
    fontWeight: "bold",
    textAlign: "center"
  },
  listTel: {
    fontSize: 15,
    padding: 2,
    textAlign: "center"
  },
  listDel: {
    marginHorizontal: 20,
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center"
  }
})
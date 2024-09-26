import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';

interface Supplier {
  name: string;
  address: string;
  contact: string;
  category: string;
  imageUri: string;
}

const SupplierApp: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [imageUri, setImageUri] = useState<string>('');

  const addSupplier = () => {
    if (name && address && contact && category && imageUri) {
      const newSupplier: Supplier = { name, address, contact, category, imageUri };
      setSuppliers([...suppliers, newSupplier]);
      setName('');
      setAddress('');
      setContact('');
      setCategory('');
      setImageUri('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Fornecedores</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={contact}
        onChangeText={setContact}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
        value={imageUri}
        onChangeText={setImageUri}
      />
      
      <Button title="Adicionar Fornecedor" onPress={addSupplier} />

      <FlatList
        data={suppliers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.supplierItem}>
            <Image source={{ uri: item.imageUri }} style={styles.supplierImage} />
            <Text style={styles.supplierText}>{item.name}</Text>
            <Text style={styles.supplierText}>Endereço: {item.address}</Text>
            <Text style={styles.supplierText}>Contato: {item.contact}</Text>
            <Text style={styles.supplierText}>Categoria: {item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  supplierItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  supplierText: {
    fontSize: 16,
  },
  supplierImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default SupplierApp;
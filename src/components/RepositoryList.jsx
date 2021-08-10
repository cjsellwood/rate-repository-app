import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useHistory } from "react-router-native";
import Text from "./Text";
import { Menu, Provider, Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  order: {
    padding: 20,
    fontSize: 16,
  },
  menuItem: {},
  filter: {
    margin: 8,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const TopOptions = ({ order, setOrder, filter, setFilter }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Searchbar
        placeholder="Filter"
        onChangeText={(value) => setFilter(value)}
        value={filter}
        style={styles.filter}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Pressable onPress={() => setVisible(true)}>
              <Text style={styles.order}>{order} &#9660;</Text>
            </Pressable>
          }
        >
          <Menu.Item
            style={styles.menuItem}
            onPress={() => {
              setOrder("Latest repositories");
              setVisible(false);
            }}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => {
              setOrder("Highest rated repositories");
              setVisible(false);
            }}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => {
              setOrder("Lowest rated repositories");
              setVisible(false);
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </View>
  );
};

export const RepositoryListContainer = ({
  repositories,
  order,
  setOrder,
  filter,
  setFilter,
  onEndReach,
}) => {
  const history = useHistory();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const toRepository = (id) => {
    history.push(`/repositories/${id}`);
  };

  return (
    <Provider>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <TopOptions
            order={order}
            setOrder={setOrder}
            filter={filter}
            setFilter={setFilter}
          />
        }
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => toRepository(item.id)}>
              <RepositoryItem item={item} />
            </Pressable>
          );
        }}
      />
    </Provider>
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState("Latest Repositories");
  const [filter, setFilter] = useState("");
  const [value] = useDebounce(filter, 500);

  const { repositories, fetchMore } = useRepositories(order, value);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      filter={filter}
      setFilter={setFilter}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;

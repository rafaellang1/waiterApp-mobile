import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';

import { Category, Icon } from './styles';


// renderizar componentes em lista com Flatlist
export function Categories() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      // padding ao final da scroll list
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => (
        <Category>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>

          <Text size={14} weight="600">{category.name}</Text>
        </Category>
      )}
    />
  );
}

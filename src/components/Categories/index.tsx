import { FlatList } from 'react-native';
import { Text } from '../Text';

import { CategoryContainer, Icon } from './styles';
import { useState } from 'react';
import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

// renderizar componentes em lista com Flatlist
export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');


  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      // padding ao final da scroll list
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}

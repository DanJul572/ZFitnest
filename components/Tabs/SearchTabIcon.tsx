import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';
import SearchIcon from '@/icons/SearchIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const searchCategories: string[] = [
  'Workout Tracker',
  'Meal Planner',
  'Sleep Tracker',
];

const Categories = () => {
  return (
    <View style={styles.categoryContainer}>
      {searchCategories.map((category, index) => {
        return (
          <View key={index} style={styles.categoryCard}>
            <View style={styles.categoryCheckbox} />
            <Text allowFontScaling={false} style={styles.categoryText}>
              {category}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const SearchTabIcon = () => {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  const handleClick = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      {showCategory && <Categories />}
      <Pressable onPress={handleClick}>
        <LinearGradient
          colors={LinearColors.BlueLinear}
          style={styles.container}
        >
          <SearchIcon />
        </LinearGradient>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 35,
    height: 70,
    justifyContent: 'center',
    marginBottom: 60,
    width: 70,
  },
  categoryContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 10,
    bottom: 90,
    height: 140,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    width: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 1,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  categoryCheckbox: {
    backgroundColor: colors.grey3,
    borderRadius: 5,
    width: 25,
    height: 25,
  },
  categoryText: {
    fontSize: 13,
  },
});

export default SearchTabIcon;

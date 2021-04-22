import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Single from './Single';
import storeReducer from '../../redux/store';

const store = storeReducer();

const data = {
  dateModified: null,
  idMeal: '52874',
  strArea: 'British',
  strCategory: 'Beef',
  strCreativeCommonsConfirmed: null,
  strDrinkAlternate: null,
  strImageSource: null,
  strIngredient1: 'Beef',
  strIngredient2: 'Plain Flour',
  strIngredient3: 'Rapeseed Oil',
  strIngredient4: 'Red Wine',
  strIngredient5: 'Beef Stock',
  strIngredient6: 'Onion',
  strIngredient7: 'Carrots',
  strIngredient8: 'Thyme',
  strIngredient9: 'Mustard',
  strIngredient10: 'Egg Yolks',
  strIngredient11: 'Puff Pastry',
  strIngredient12: 'Green Beans',
  strIngredient13: 'Butter',
  strIngredient14: 'Salt',
  strIngredient15: 'Pepper',
  strIngredient16: '',
  strIngredient17: '',
  strIngredient18: '',
  strIngredient19: '',
  strIngredient20: '',
  strInstructions: 'Preheat the oven to 150C/300F/Gas 2',
  strMeal: 'Beef and Mustard Pie',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
  strMeasure1: '1kg',
  strMeasure2: '2 tbs',
  strMeasure3: '2 tbs',
  strMeasure4: '200ml',
  strMeasure5: '400ml',
  strMeasure6: '1 finely sliced',
  strMeasure7: '2 chopped',
  strMeasure8: '3 sprigs',
  strMeasure9: '2 tbs',
  strMeasure10: '2 free-range',
  strMeasure11: '400g',
  strMeasure12: '300g',
  strMeasure13: '25g',
  strMeasure14: 'pinch',
  strMeasure15: 'pinch',
  strMeasure16: '',
  strMeasure17: '',
  strMeasure18: '',
  strMeasure19: '',
  strMeasure20: '',
  strSource: 'https://www.bbc.co.uk/food/recipes/beef_and_mustard_pie_58002',
  strTags: 'Meat,Pie',
  strYoutube: 'https://www.youtube.com/watch?v=nMyBC9staMU',

};
describe('Single component tests', () => {
  test('renders single component ', () => {
    // eslint-disable-next-line max-len
    render(<Provider store={store}><Router><Route><Single element={data} /></Route></Router></Provider>);
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(data.strMeal)).toBeInTheDocument;
  });

  test('should match with snapshot', () => {
    const tree = renderer
      // eslint-disable-next-line max-len
      .create(<Provider store={store}><Router><Route><Single element={data} /></Route></Router></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

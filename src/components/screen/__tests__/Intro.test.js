import 'react-native';
import * as React from 'react';
import Intro from '../Intro';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Intro', () => {
  // it('renders without crashing', () => {
  //   const rendered = renderer.create(component).toJSON();
  //   expect(rendered).toMatchSnapshot();
  //   expect(rendered).toBeTruthy();
  // });

  describe('interaction', () => {
    let rendered: TestRenderer.ReactTestRenderer;
    let instance: TestRenderer.ReactTestRenderer;

    beforeAll(() => {
      rendered = renderer.create(<Intro {...props}/>);
      instance = rendered.root;
    });

    it('simulate onClick', () => {
      // const navigateButton = instance.find(
      //   (el) => el.props.children == 'Navigate');
      // navigateButton.props.onPress();
      // expect(props.navigation.navigate).toBeCalledWith('Temp');
    });
  });
});

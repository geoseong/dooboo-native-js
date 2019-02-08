import 'react-native';
import * as React from 'react';
import Button from '../Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Button />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('Interaction', () => {
    let count = 1;
    const onClick = () => {
      count++;
    };
  
    let rendered;
    let instance;
    const component = <Button white={true} onClick={onClick}/>;
  
    beforeAll(() => {
      rendered = renderer.create(component);
      instance = rendered.root;
    });
  
    it('Simulate onClick', () => {
      const button = instance.find(
        (el: any) => el.type === 'button',
      );
      button.props.onClick();
      expect(count).toBe(2);
    });
  });
});

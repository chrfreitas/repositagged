import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Repositories from '../index';

describe('Repositories View', () => {
  const props = {
    repositories: [{
      name: 'mongodb',
    }],
    match: {
      params: {
        username: 'xyz',
      },
    },
    getRepositories: () => {},
  };

  it('should match view with table', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should match view with loading', () => {
    props.repositories = [];
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Repositories {...props} />);
    expect(result).toMatchSnapshot();
  });

  it('should set state to open modal and repository', () => {
    const repository = {
      name: 'mongodb',
    };
    const wrapper = shallow(<Repositories {...props} />);
    wrapper.instance().openModal(repository);

    expect(wrapper.state('modalOpened')).toBeTruthy();
    expect(wrapper.state('repository')).toEqual(repository);
  });

  describe('when it did mount', () => {
    it('should call getRepositories once', () => {
      const spy = jest.spyOn(props, 'getRepositories');
      shallow(<Repositories {...props} />);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

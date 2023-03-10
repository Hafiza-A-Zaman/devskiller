import * as actions from '../store/components/actions.js';
import { initialState, componentsReducer as reducer } from '../store/components/reducer.js';

describe('componentsReducer', () => {
  it('handles ADD_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      currentlyEdited: {
        id: 1,
        layout: 1,
        values: {},
      },
      items: [{
        id: 1,
        layout: 1,
        values: {},
      }],
    };

    const actualState = reducer(
      initialState,
      actions.addComponent(1, 1),
    );

    expect(actualState).toEqual(expectedState);
  });

  it('handles UPDATE_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 2,
        values: { text: 'Text 2' },
      }],
    },
    actions.updateComponent(2, { layout: 1, values: { text: 'Text 1' } }));

    expect(actualState).toEqual(expectedState);
  });

  it('handles REMOVE_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 2,
        values: { text: 'Text 2' },
      }],
    }, actions.removeComponent(2));

    expect(actualState).toEqual(expectedState);
  });

  it('handles SET_EDITED_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      currentlyEdited: {
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      },
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    }, actions.setEditedComponent({
      id: 1,
      layout: 1,
      values: { text: 'Text 1' },
    }));

    expect(actualState).toEqual(expectedState);
  });
});

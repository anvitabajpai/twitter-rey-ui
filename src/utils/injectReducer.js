import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);



export default ({ key }) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    componentWillMount() {
      const { injectReducer } = this.injectors;
      //injectReducer(key, reducer);
    }

    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

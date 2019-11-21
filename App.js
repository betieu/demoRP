import React from 'react';
import { View } from 'react-native';
import AppContainer from './route/navigation';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { createStore } from 'redux'
import {store, persistor} from './reducers/configStore'
import { PersistGate } from 'redux-persist/integration/react'


// const store = createStore(rootReducer)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <AppContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
};


export default App;

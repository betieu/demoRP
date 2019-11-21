

import React from 'react';
import { View } from 'react-native';
import AppContainer from './route/navigation';
import { Provider } from 'react-redux'
import { store, persistor } from './reducers/configStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Root } from 'native-base'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <PersistGate loading={null} persistor={persistor}>
            <View style={{ flex: 1 }}>
              <AppContainer />
            </View>
          </PersistGate>
        </Root>
      </Provider>
    );
  }
};

export default App;

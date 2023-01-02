import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const composeEnhancers = composeWithDevTools({
  
});
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
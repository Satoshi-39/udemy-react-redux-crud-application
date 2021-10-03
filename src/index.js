import React from 'react';
import ReactDOM from 'react-dom';
//下記はstoreの作成
import { createStore } from "redux"
//下記は全コンポーネントに渡す特殊なredux
//これを使うことで全ての親から子へpropsを全部渡す必要がなくなった
import　{ Provider } from "react-redux";

import './index.css';
//前回作成したreducerをインポート
import reducer from "./reducers";
import App from './components/App';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

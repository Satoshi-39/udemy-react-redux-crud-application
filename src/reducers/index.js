//combineReducersはReducersを結合するための関数
import { combineReducers } from "redux"
import count from "./count"

export default combineReducers({ count })
//他にも状態を管理したい場合は以下のように書く
//export default combineReducers({ count })
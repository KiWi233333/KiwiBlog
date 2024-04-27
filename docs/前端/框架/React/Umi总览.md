
# Umi 学习

> [!TIP]
> 文档只针对学习中会遇到的问题以及方便理解umi的整体架构，具体使用请查看官方文档。
---

- 学习视频：[千锋教育前端框架Umi3教程，企业级必学前端框架Umi3视频](https://www.bilibili.com/video/BV1pG411879j?p=18&vd_source=5a92b42b9c4477c241fa7717e9e8504a)
- 文档：[Umi2 官方文档](https://v2.umijs.org/zh/)
- 最新文档：[Umi4 官方文档](https://umijs.org/zh-CN/docs/introduce)

## 1、Umi 总览

![Umi 总体架构](assets/Umi总览/image-2.png)

## 2、状态管理 - Dva
[官方文档](https://dvajs.com/api/#%E8%BE%93%E5%87%BA%E6%96%87%E4%BB%B6)

### 1）总览

![Dva](assets/Umi总览/image.png)

### 2）数据流向
>
> 1. 用户交互（dispatch）触发 action，action 调用 service 层获取数据，并返回给 model。
> 2. model 更新 state，view 层监听 state 变化，更新视图。
![数据流向](assets/Umi总览/image-1.png)

### 3）具体使用
>
> 同步、异步

```JavaScript
import { getLists } from '@/services/search' 
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists(state, action){

      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }
  },
  // 异步
  effects: {
    *getListsAsync({payload}, {call, put}){
      const res = yield call(getLists, payload);
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}
```

#### 4）实际项目技巧

1. DVA框架统一处理所有页面的loading状态

```js
class App extends React.Component {
    state = {
        show: false
    }
    componentWillMount() {
        const { loading } = this.props;
        if (loading) {
            timeoutId = setTimeout(() => {
                this.setState({
                    show: true
                });
            }, TIMER);
        }
    } 
    render() {
        const { loading } = this.props;
        const { show } = this.state;
        return (
            <div className={this.props.className}>
                { this.props.children }
                <div className={styles.loading}>
                    <ActivityIndicator toast text="正在加载" animating={show && loading} />
                </div>
            </div>
        );
    }
}

// 连接 状态管理
export default connect((state, ownProps) => {
    return {
        loading: state.loading.global && !state.loading.models.Verify,
        
        loading: state.user.effects['user/info']
    }
})(App);
```

```js
// 基于注解
@connect(({ login, loading }) => ({
  login,
  loginLoad: loading.effects['login/login'],
}))
```

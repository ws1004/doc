## createApp

创建 Vue 应用函数返回 VueRoot 应用实例

### 一.初始化渲染器

**ensureRenderer** => **createRenderer** => **baseCreateRenderer**

#### ensureRenderer

初始化合并 rendererOptions,用于之后对虚拟 DOM 操作/打补丁的方法。

> core/package/runtime-dom/src/index.ts - 45line

调用 createRenderer 函数传递 rendererOptions。

```typescript
export const extend = Object.assign

/*
	将patchProp和nodeOps合并到一个对象中
	patchProp:对虚拟DOM上的属性进行差异化处理的函数
	nodeOps:用于操作虚拟DOM 增删改方法集
*/
const rendererOptions = /*#__PURE__*/ extend({ patchProp }, nodeOps)

function ensureRenderer() {
  return (
    renderer ||
    (renderer = createRenderer<Node, Element | ShadowRoot>(rendererOptions))
  )
}
```

#### createRenderer

调用 baseCreateRenderer 函数,继续传递 options(**rendererOptions**)

> core/package/runtime-core/src/renderer.ts - 294line

```typescript
export function createRenderer<
  HostNode = RendererNode,
  HostElement = RendererElement
>(options: RendererOptions<HostNode, HostElement>) {
  return baseCreateRenderer<HostNode, HostElement>(options)
}
```

#### baseCreateRenderer

此处开始创建渲染器,返回 render 和 createApp。

> core/package/runtime-core/src/renderer.ts - 324line

1. 解构 options(**rendererOptions**)中的操作虚拟 DOM 的方法(也就是上面 ensureRenderer 函数中合并的 nodeOps 中的方法)至当前作用域下,以供之后在 createApp 中使用。

```typescript
const {
  insert: hostInsert,
  remove: hostRemove,
  patchProp: hostPatchProp,
  ...........
} = options
```

2. baseCreateRenderer 函数作用域中定义着**patch 和 render**函数和着许多处理虚拟 DOM 节点的函数(例如处理文本/注释/静态节点)等....

   **patch**：渲染器中的核心函数,初始化阶段是根据虚拟 DOM 来创建真实 DOM,有了旧虚拟 DOM 之后,就是做差异化的比较,根据差异化重新创建真实 DOM 或者做一些边界出来。

```typescript
const patch:PatchFn = (
  n1, // 旧虚拟DOM
  n2, // 新虚拟DOM
  container, // 目标容器
  ...
) => {
  ...
}
```

​ **render**：渲染器,用于将虚拟 DOM 渲染到页面,核心函数就是 patch(根据虚拟 DOM 增删改真实 DOM,最终挂载插入到 container 中)。

```typescript
const render: RootRenderFunction = (
  vnode,// 虚拟DOM
  container, // 目标容器
  isSVG
) => {
  ...
}
```

3. baseCreateRenderer 函数返回值

```typescript
return {
  render, // 渲染器
  hydrate, // 用于 SSR
  createApp: createAppAPI(render, hydrate)
}

/*
	当baseCreateRenderer函数中可执行代码运行到 return {}。
	由于createApp的value是一个函数，并且是一个函数调用。
	那么则会直接调用此函数,传入render渲染器。
	并且等createAppAPI函数执行完毕之后拿到结果赋值给createApp,baseCreateRenderer函数才算执行完毕并且退出函数调用栈。
	
	createAppAPI函数内部的逻辑属于初始化App根组件~
*/
```

#### 总结

初始化渲染器阶段做的事情

1.合并之后要在挂载函数中需要用到的处理虚拟 DOM 的属性 Props 和对虚拟 DOM 映射为真实 DOM 的增删改函数。

2.初始化渲染器,渲染器核心函数是 patch,初始化阶段用于将虚拟 DOM 创建并挂载真实 DOM,非初始化阶段则是旧虚拟 DOM 和新虚拟 DOM 差异化打补丁。

### 二.初始化 App 根组件

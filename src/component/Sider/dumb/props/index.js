// 组件 render 使用的 props 

const SiderProps = (state, props, events) => ({trigger: null, collapsible: true, collapsed: props.collapsed});

const MenuProps = (state, props, events) => ({
  theme: "dark",
  mode: "inline",
  selectedKeys: [state.selectedMenuKey],
  onClick: events.onMenuClick
});

export const forDynamic = (state, props, events) =>({
  SiderProps: SiderProps(state, props, events),
  MenuProps: MenuProps(state, props, events),
})

export default {
  forDynamic,
}
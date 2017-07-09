const HeaderProps = {
  style: {
    background: "#fff",
    padding: "0 16px 0"
  }
};

/**
 * xl ≥1600px
 * lg ≥1200px
 * md ≥992px
 * sm ≥768px ipad
 * xs <768px 存在 小 ipad
 */
const AvatarColProps = {
  xl: {
    // 2+1 +20 = 24 - 1
    span: 1,
    push: 20
  },
  lg: {
    // 2+1 +19 = 24 - 2
    span: 1,
    push: 19
  },
  md: {
    // 2+2 +17 = 24 - 3
    span: 2,
    push: 17
  },
  sm: {
    // 2+2 +16 = 24 - 4
    span: 2,
    push: 16
  },
  xs: {
    // 2+2 +16 = 24 - 6
    span: 2,
    push: 14
  },
  className: "text-center"
};

const NameColProps = {
  xl: {
    // 2+1+1 +20 = 24
    span: 1,
    push: 20
  },
  lg: {
    // 2+1+2 +19 = 24
    span: 2,
    push: 19
  },
  md: {
    // 2+2+3 +17 = 24
    span: 3,
    push: 17
  },
  sm: {
    // 2+2+4 +16 = 24
    span: 4,
    push: 16
  },
  xs: {
    // 2+2+6 +14 = 24
    span: 6,
    push: 14
  },
  className: "text-center"
};

export const forStatic = {
  HeaderProps,
  AvatarColProps,
  NameColProps
};

const SiderTiggerIconProps = (state, props, events) => ({
  className: "trigger",
  type: props.collapsed ? "menu-unfold" : "menu-fold",
  onClick: events.onSiderToggle
});

export const forDynamic = (state, props, events) => ({
  SiderTiggerIconProps: SiderTiggerIconProps(state, props, events)
});

export default {
  forStatic,
  forDynamic
};

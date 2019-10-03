module.exports = {
  prefix: '',
  important: false,
  separator: '_',
  theme: {
    screens: {},
    colors: {
      currentColor: 'currentColor', transparent: 'transparent',
      0: '#282c34', 1: '#353b45', 2: '#3e4451', 3: '#545862',
      4: '#565c64', 5: '#abb2bf', 6: '#b6bdca', 7: '#c8ccd4',
      8: '#e06c75', 9: '#d19a66', A: '#e5c07b', B: '#98c379',
      C: '#56b6c2', D: '#61afef', E: '#c678dd', F: '#be5046',
      '0at95': 'rgba(40, 44, 52, 0.95)',
    },
    spacing: {
      4: '4px', 8: '8px', 12: '12px', 16: '16px', 24: '24px',
      32: '32px', 40: '40px', 48: '48px', 60: '40px',
    },
    backgroundColor: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    borderRadius: { 4: '4px', full: '999px' },
    borderWidth: { '0': '0', '1': '1px', '2': '2px' },
    boxShadow: {
      '1-light': '0px 1px 1px 0px rgba(0,0,0,0.08)',
      '1-dark': '0px 1px 1px 0px rgba(0,0,0,0.16)',
      4: '0px 1px 4px 0px rgba(0,0,0,0.16)',
      8: '0px 1px 8px 0px rgba(0,0,0,0.16)',
      12: '0px 4px 12px 0px rgba(0,0,0,0.2)',
      // inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      // outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    },
    cursor: { pointer: 'pointer' },
    flex: { 1: '1 1 0%', none: '0 0 auto' },
    fontSize: { 14: '14px', 16: '16px', 18: '18px' },
    fontWeight: { normal: '400', semibold: '600' },
    fontFamily: {
      mono: ['Source Code Pro', 'monospace'],
    },
    height: theme => ({ ...theme('spacing'), full: '100%', screen: '100vh' }),
    inset: { 0: "0px" },
    lineHeight: { 16: '16px' },
    padding: theme => theme('spacing'),
    margin: { auto: 'auto' },
    textColor: theme => theme('colors'),
    width: theme => ({
      ...theme('spacing'), full: '100%', screen: '100vw',
      // '1/2': '50%',
      // '1/3': '33.33%', '2/3': '66.67%',
      // '1/4': '25%', '2/4': '50%', '3/4': '75%',
      // '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
    }),
  },
  variants: {
    alignContent: [], alignItems: [], alignSelf: [], backgroundColor: [],
    borderColor: [], borderRadius: [], borderWidth: [], boxShadow: [],
    cursor: [], display: [],
    flex: [], flexDirection: [], flexWrap: [], fontSize: [], fontWeight: [],
    height: [], inset: [], justifyContent: [], lineHeight: [], margin: [], overflow: [],
    padding: [], pointerEvents: [], position: [],
    textAlign: [], textColor: [], userSelect: [],
    visibility: [], whitespace: [], width: [], wordBreak: [],
  },
  corePlugins: [
    "display", "flex", "height", "overflow", "textColor", "userSelect", "width",
    "backgroundColor", "fontFamily", "padding", "borderRadius", "backgroundSize",
    "flexDirection", "position", "inset", "margin", "lineHeight", "textAlign",
    "alignItems", "justifyContent",
  ],
  plugins: [],
}
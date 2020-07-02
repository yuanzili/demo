declare var window: Window;
declare var EASY_ENV_IS_NODE: boolean;

interface Window {
  __INITIAL_STATE__: any;
}

declare module '*.scss' {
  const content: string;
  export default content;
}
import 'styled-components';

import { light as lightTheme } from './themes';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends Theme {}
}

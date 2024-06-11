import { ConfigWithExtends } from 'typescript-eslint';

declare module 'eslint-config-nilfalse' {
  export const eslint: ConfigWithExtends[];

  export const typescript: ConfigWithExtends;

  export const spec: ConfigWithExtends;
}

import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/en_US';
// import momentLocale from 'moment/dist/locale/en-us';

const modules: Record<string, any> = import.meta.glob('./en-US/**/*.ts', { eager: true });
export default {
  message: {
    ...genMessage(modules, 'en-US'),
    antdLocale,
  },
  momentLocale: undefined,
  momentLocaleName: 'en-US',
};

import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/ko_KR.js';
import momentLocale from 'moment/dist/locale/ko';

const modules: Record<string, any> = import.meta.glob('./ko-KR/**/*.ts', { eager: true });
export default {
  message: {
    ...genMessage(modules, 'ko-KR'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'ko',
};

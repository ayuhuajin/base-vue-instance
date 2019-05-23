import Vue from 'vue';
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Dialog,
  Input,
  Select,
  Option,
  Pagination,
  Form,
  FormItem,
  MessageBox,
  Upload
} from 'element-ui';

Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);

Vue.prototype.$alert = MessageBox.alert;

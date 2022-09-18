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
  Message,
  Upload,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Tabs,
  TabPane,
  DatePicker,
  Switch
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
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(DatePicker);
Vue.use(Switch);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

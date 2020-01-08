import Vue from 'vue';
import HaiButton from '@/components/singhai-ui/button/index';
import HaiInput from '@/components/singhai-ui/input/index';
import HaiSelect from '@/components/singhai-ui/select/index';
import HaiLoading from '@/components/singhai-ui/loading/index';
import HaiAlert from '@/components/singhai-ui/alert/index';
import HaiSwitch from '@/components/singhai-ui/switch/index';
import HaiTree from '@/components/singhai-ui/tree/index';

import Alert from '@/components/singhai-ui/alert/alert';
Vue.prototype.$Alert = Alert;
Vue.use(HaiButton);
Vue.use(HaiInput);
Vue.use(HaiSelect);
Vue.use(HaiLoading);
Vue.use(HaiAlert);
Vue.use(HaiSwitch);
Vue.use(HaiTree);

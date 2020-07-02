

import { Vue, Component } from 'vue-property-decorator';
import Container from "./container";

@Component({
  components:{
    Container
  }
})
export default class Base extends Vue {

};


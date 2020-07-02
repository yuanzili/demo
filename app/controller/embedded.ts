import { Controller, Context } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Article from '../model/article';
import Condition from '../lib/condition';

export default class EmbeddedController extends Controller {
  public async index(ctx: Context) {
    const condition = deserialize(Condition,ctx.request.body);
    let requestList:Array<Promise<object>>= [ctx.service.embedded.getTabMenuList(),ctx.service.embedded.getCourseList(condition)];
    requestList = requestList.map(api =>api.catch(err => err));
    const [tabResp,listResp]:any = await Promise.all(requestList);
    const embedded = {
       courseTotal:0,
        tabObj:[],
        courseList:[]
    };
    if(tabResp.status === 200) {
      embedded.tabObj = tabResp.data.result.list;
    }
    if(listResp.status === 200) {
      embedded.courseTotal = listResp.data.totalCount;
      embedded.courseList = listResp.data.result.list;
    }
    // console.log('embedded', embedded);
    await ctx.renderClient('embedded/home.js', {
      url: ctx.url.replace(/\/embedded/, ''),
      embedded
    });
  }
}

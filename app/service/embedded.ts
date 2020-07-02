import { Context, Service } from 'egg';
import Condition from '../lib/condition';

export default class EmbeddedService extends Service {
  private context: Context;

  constructor(ctx: Context) {
    super(ctx);
    this.context = ctx;
  }

  public async getTabMenuList() {
    const result: any = await this.context.curl(
      'http://www.ablesky.com/ajax/ableskytag/account/getTabMenuList',
      {
        dataType: 'json',
        data: {},
        headers: {
          'Content-Type': this.context.get('Content-Type'),
          Cookie: this.context.request.headers.cookie,
        },
      }
    );
    return result;
  }

  public async getCourseList(condition: Condition) {
    const result = await this.context.curl(
      'http://wap.ablesky.com/course/list',
      {
        dataType: 'json',
        data: {
          curPage: condition.pageIndex,
          limit: condition.pageSize,
          tis: 0,
        },
        headers: {
          'Content-Type': this.context.get('Content-Type'),
          Cookie: this.context.request.headers.cookie,
        },
      }
    );
    return result;
  }
}

// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportEmbedded from '../../../app/controller/embedded';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    embedded: ExportEmbedded;
  }
}

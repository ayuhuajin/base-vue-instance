import { Store, Module, ModuleOptions, CommitOptions, DispatchOptions } from 'vuex';

interface StoreModule<T> {
  readonly state: T;
  readonly getters: any;
  readonly commit: (type: string, payload?: any, options?: CommitOptions) => void;
  readonly dispatch: (type: string, payload?: any, options?: DispatchOptions) => Promise<any>;
}

export default class AppStore<S> extends Store<S> {
  public registerModule<T>(path: string | string[], module: Module<T, S>, options?: ModuleOptions): StoreModule<T> {
    module.namespaced = true;
    const arrPath = path as string[];
    const strPath = arrPath.join ? arrPath.join('/') : (path as string);
    super.registerModule(strPath, module, options);
    let moduleGetter = Object();
    let namespaceStartStr = `${strPath}/`;
    let rootGetter = this.getters;
    for (const key in this.getters) {
      if (key.startsWith(namespaceStartStr)) {
        Object.defineProperty(moduleGetter, key.substr(namespaceStartStr.length), {
          get() {
            return rootGetter[key];
          }
        });
      }
    }
    return {
      state: module.state as T,
      getters: moduleGetter,
      commit: (type: string, payload?: any, options?: CommitOptions) =>
        this.commit(`${path}/${type}`, payload, options),
      dispatch: (type: string, payload?: any, options?: DispatchOptions) =>
        this.dispatch(`${path}/${type}`, payload, options)
    } as StoreModule<T>;
  }
}

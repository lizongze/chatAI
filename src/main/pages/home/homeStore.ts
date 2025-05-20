import { observable } from 'mobx';

class HomeStore {
  @observable
  public accessor chatList = [];
  @observable
  public accessor textValue = '';
}

export const homeStore = new HomeStore();

// export const homeStore = observable({
//     chatList: [],
// })

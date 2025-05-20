import { observable } from 'mobx';

class HomeStore {
  @observable
  public accessor chatList = [];
}

export const homeStore = new HomeStore();

// export const homeStore = observable({
//     chatList: [],
// })

import {observable, action} from 'mobx'


class stepFormStore {
    @observable info = {}
    @observable current = 0

    @action setCurrent(current) {
        this.current = current
    }

    @action setInfo(info) {
        this.info = info
    }
}

export default new stepFormStore()
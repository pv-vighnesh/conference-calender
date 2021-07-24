import {
    LightningElement
} from 'lwc';

export default class App extends LightningElement {

    sessionId;
    state = 'list';

    get isStateList() {
        return this.state === 'list';
    }
    get isStateDetails() {
        return this.state === 'details';
    }

    handleNavigate(event) {
        this.state = event.detail.state;
        this.sessionId = event.detail.sessionId;
    }
}
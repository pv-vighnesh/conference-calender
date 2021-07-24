import { LightningElement } from "lwc";
import { getSessions } from "../../data/sessionService/sessionService";

export default class SessionList extends LightningElement {
    sessions = [];

    connectedCallback() {
        getSessions().then(result => {
            this.sessions = this.allSessions = result;
        });
    }

    handleSearchInput(event) {
        const key = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter(
            session => session.name.toLowerCase().includes(key)
        );
    }

    handleSessionClick(event) {
        const index = event.currentTarget.dataset.index;
        const navigateEvent = new CustomEvent('navigate', {
          detail: {
            state: 'details',
            sessionId: this.sessions[index].id
          }
        });
        this.dispatchEvent(navigateEvent);
      }
}
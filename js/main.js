class InviteeClass {
  constructor() {
    this.invitees = [
      {name: 'Sharina Jones', isConfirmed: false},
      {name: 'Anthony Ibarra', isConfirmed: false},
      {name: 'Stephanie Bolling', isConfirmed: true}
    ];

  this.loadInvitees();
  this.addEventListeners();
  }//end constructor()

  loadInvitees() {
    let inviteeHtml = this.invitees.reduce((html, invitee, index) => html += this.generateInviteeHtml(invitee, index), '');
    document.getElementById('invitedList').innerHTML = inviteeHtml;
  }//end loadInvitees()

  generateInviteeHtml(invitee, index) {
    return `
    <li>${invitee.name}<label>Confirmed <input type="checkbox" ${invitee.isConfirmed ? 'checked' : ''}onChange="invitee.toggleInviteeStatus(${index})"></label><button onClick="invitee.deleteInvitee(event, ${index})">remove</button></li>
    `
  }//end generateInviteeHtml

  toggleInviteeStatus(index) {
    this.invitees[index].isConfirmed = !this.invitees[index].isConfirmed;
    this.loadInvitees();
  }//end toggleInviteeStatus()

  deleteInvitee(event, inviteeIndex) {
    event.preventDefault();
    this.invitees.splice(inviteeIndex, 1);
    this.loadInvitees();
  }//end deleteInvitee()

  addEventListeners() {
    document.getElementById('registrar').addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
      let input = document.getElementById('invitee');
      let invitee = input.value;
      input.value = '';
      this.addInvitee(invitee);
    });
  }

  addInvitee(invitee) {
    let newInvitee = {
      name: invitee,
      isConfirmed: false
    };

    if (invitee === '') {
      document.getElementById('invitee').placeholder = 'Please enter a name';
    } else {
      this.invitees.push(newInvitee);
      this.loadInvitees();
    }
  }
}

let invitee;
window.addEventListener('load', () => {
  invitee = new InviteeClass();
})


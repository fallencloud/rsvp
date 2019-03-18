class InviteeClass {
  constructor() {
    //creates invitees
    this.invitees = [
      {name: 'Sharina Jones', isConfirmed: false},
      {name: 'Anthony Ibarra', isConfirmed: false},
      {name: 'Stephanie Bolling', isConfirmed: true}
    ];

  this.loadInvitees();
  this.addEventListeners();
  }//end constructor()

  //loads invitees
  loadInvitees() {
    let inviteeHtml = this.invitees.reduce((html, invitee, index) => html += this.generateInviteeHtml(invitee, index), '');
    document.getElementById('invitedList').innerHTML = inviteeHtml;
  }//end loadInvitees()

  //creates a card for every invitee
  generateInviteeHtml(invitee, index) {
    return `
    <li>${invitee.name}<label>Confirmed <input type="checkbox" ${invitee.isConfirmed ? 'checked' : ''}onChange="invitee.toggleInviteeStatus(${index})"></label><button onClick="invitee.deleteInvitee(event, ${index})">remove</button></li>
    `
  }//end generateInviteeHtml

  //allows the status of invitees to be chagned
  toggleInviteeStatus(index) {
    this.invitees[index].isConfirmed = !this.invitees[index].isConfirmed;
    this.loadInvitees();
  }//end toggleInviteeStatus()

  //allows an invitee to be deleted
  deleteInvitee(event, inviteeIndex) {
    event.preventDefault();
    this.invitees.splice(inviteeIndex, 1);
    this.loadInvitees();
  }//end deleteInvitee()

  //ensures that enter and submit work
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
  //allows an invitee to be added
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


'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InviteeClass = function () {
  function InviteeClass() {
    _classCallCheck(this, InviteeClass);

    //creates invitees
    this.invitees = [{ name: 'Sharina Jones', isConfirmed: false }, { name: 'Anthony Ibarra', isConfirmed: false }, { name: 'Stephanie Bolling', isConfirmed: true }];

    this.loadInvitees();
    this.addEventListeners();
  } //end constructor()

  //loads invitees


  _createClass(InviteeClass, [{
    key: 'loadInvitees',
    value: function loadInvitees() {
      var _this = this;

      var inviteeHtml = this.invitees.reduce(function (html, invitee, index) {
        return html += _this.generateInviteeHtml(invitee, index);
      }, '');
      document.getElementById('invitedList').innerHTML = inviteeHtml;
    } //end loadInvitees()

    //creates a card for every invitee

  }, {
    key: 'generateInviteeHtml',
    value: function generateInviteeHtml(invitee, index) {
      return '\n    <li>' + invitee.name + '<label>Confirmed <input type="checkbox" ' + (invitee.isConfirmed ? 'checked' : '') + 'onChange="invitee.toggleInviteeStatus(' + index + ')"></label><button onClick="invitee.deleteInvitee(event, ' + index + ')">remove</button></li>\n    ';
    } //end generateInviteeHtml

    //allows the status of invitees to be chagned

  }, {
    key: 'toggleInviteeStatus',
    value: function toggleInviteeStatus(index) {
      this.invitees[index].isConfirmed = !this.invitees[index].isConfirmed;
      this.loadInvitees();
    } //end toggleInviteeStatus()

    //allows an invitee to be deleted

  }, {
    key: 'deleteInvitee',
    value: function deleteInvitee(event, inviteeIndex) {
      event.preventDefault();
      this.invitees.splice(inviteeIndex, 1);
      this.loadInvitees();
    } //end deleteInvitee()

    //ensures that enter and submit work

  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this2 = this;

      document.getElementById('registrar').addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(event);
        var input = document.getElementById('invitee');
        var invitee = input.value;
        input.value = '';
        _this2.addInvitee(invitee);
      });
    }
    //allows an invitee to be added

  }, {
    key: 'addInvitee',
    value: function addInvitee(invitee) {
      var newInvitee = {
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
  }]);

  return InviteeClass;
}();

var invitee = void 0;
window.addEventListener('load', function () {
  invitee = new InviteeClass();
});
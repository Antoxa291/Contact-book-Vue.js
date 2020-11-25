import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')

  },
  mutations: {
    //store in localStorage
    createContact(state, contact) {
      state.contacts.push(contact)

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },

//delete from localStorage
    deleteСontact(state, id) {
      state.contacts.splice(id, 1)    
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },

//update contacts in localStorage
    updateContact(state, {
      id,
      name,
      lastName,
      phone,
      date,
      address,
      email

    }) {
      const contacts = state.contacts.concat();

      const idx = contacts.findIndex(t => t.id === id);
      const contact = contacts[idx];

      contacts[idx] = {
        ...contact,
        name,
        lastName,
        phone,
        date,
        address,
        email

      };

      state.contacts = contacts;
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

  },
  actions: {
    createContact({
      commit
    }, contact) {
      commit('createContact', contact)
    },
    deleteСontact({
      commit
    }, idx) {

      commit('deleteСontact', idx)
    },
    updateContact({
      commit
    }, contact) {
      commit('updateContact', contact)
    },

  },
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(t => t.id === id)
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]').map(contact => {
      if (new Date(contact.date) < new Date()) {
        contact.status = 'outdated'
      }
      return contact
    })
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact)

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },


    // deleteСontact(state, id) {
    //   const contacts = state.contacts.concat();
      
    //   const idx = contacts.findIndex(t => t.id === id);
      
      
    //   localStorage.removeItem(state.contacts[idx])
    // },


    updateContact(state, { id, name, lastName, phone, date, address, email }) {
      const contacts = state.contacts.concat();

      const idx = contacts.findIndex(t => t.id === id);
      const contact = contacts[idx];
      
      contacts[idx] = { ...contact, name, lastName, phone, date, address, email };

      state.contacts = contacts;
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    completeContact(state, id) {
      const idx = state.contacts.findIndex(t => t.id === id);
      state.contacts[idx].status = 'completed';
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    }
  },
  actions: {
    createContact({commit}, contact) {
      commit('createContact', contact)
    },
    deleteContact({commit}, id) {
      commit('deleteContact', id)
    },
    updateContact({commit}, contact) {
      commit('updateContact', contact)
    },
    completeContact({commit}, id) {
      commit('completeContact', id)
    }
  },
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(t => t.id === id)
  }
})

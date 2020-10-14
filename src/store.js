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
    updateContact(state, {id, description, date}) {
      const contacts = state.contacts.concat()

      const idx = contacts.findIndex(t => t.id === id)
      const contact = contacts[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'

      contacts[idx] = {...contact, date, description, status}

      state.contacts = contacts
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    completeContact(state, id) {
      const idx = state.contacts.findIndex(t => t.id === id)
      state.contacts[idx].status = 'completed'
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  actions: {
    createContact({commit}, contact) {
      commit('createContact', contact)
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

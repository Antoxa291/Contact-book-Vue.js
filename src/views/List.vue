<template>
<div class="row">
    <h1>My contacts:</h1>

    <div class="row">
        <div class="input-field col s6 ">
            <select ref="select" v-model="filter">
                <option value="" disabled selected>Choose your filter</option>
                <option value="active">by Name</option>
            </select>
            <label>Filtered view</label>
        </div>
    </div>

    <button v-if="filter" class="btn btn-small red" @click="filter = null">Clear filter</button>

    <hr>

    <table v-if="contacts.length" @delete-contact.prevent="deleteСontact">
        <thead>
            <tr class="blue-text text-darken-2">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(contact, idx) of displayContacts" :key="contact.id" @delete-contact.prevent="deleteСontact">
                <td>{{idx+1}}</td>
                <td>{{contact.name | capitalize}}</td>
                <td>{{contact.lastName | capitalize}}</td>
                <td>{{contact.phone}}</td>
                <td>
                    <router-link tag="button" class="btn btn-small blue darken-4" :to="'/contact/' + contact.id">
                        View
                    </router-link>
                </td>
                <td>
                    <button class="btn btn-small red darken-3" @click="deleteСontact(idx)" type="submit">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>No contacts yet :(</p>
    <button class="btn btn-small red darken-4" @click="deleteAll()" type="submit">Delete ALL
    </button>
</div>
</template>

<script>
export default {
    data: () => ({
        filter: null,
    }),
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        displayContacts() {
            return this.contacts.filter(t => {
                if (!this.filter) {
                    return true
                }
                return t.status === this.filter
            })
        },
        // deleteAll() {
        //     return this.$store = null;
        // }
    },
    mounted() {
        M.FormSelect.init(this.$refs.select)
    },
    methods: {
        deleteСontact(index) {
            const Index = contacts.findIndex(t => t.id === id)

            this.$delete(this.contacts, Index)
        },
        deleteAll() {
            return this.$store = null;
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style lang="scss" scoped>
.td {
    max-width: 400px;
}

.text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

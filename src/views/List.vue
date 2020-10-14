<template>
<div class="row ">
    <h1>My contacts:</h1>

    <div class="row">
        <div class="input-field col s6 ">
            <select ref="select" v-model="filter">
                <option value="" disabled selected>Choose your option</option>
                <option value="active">Active</option>
                <option value="outdated">Outdated</option>
                <option value="completed">Completed</option>
            </select>
            <label>Status filter</label>
        </div>
    </div>

    <button v-if="filter" class="btn btn-small red" @click="filter = null">Clear filter</button>

    <hr>

    <table v-if="contacts.length">
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
            <tr v-for="(contact, idx) of displaycontacts" :key="contact.id">
                <td>{{idx+1}}</td>
                <td>{{contact.name}}</td>
                <td>{{contact.lastName}}</td>
                <td>{{contact.phone}}</td>
                <td>
                    <router-link tag="button" class="btn btn-small blue darken-4" :to="'/contact/' + contact.id">
                        Viev
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>No contacts yet :(</p>
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
        displaycontacts() {
            return this.contacts.filter(f => {
                if (!this.filter) {
                    return true
                }
                return f.status === this.filter
            })
        }
    },
    mounted() {
        M.FormSelect.init(this.$refs.select)
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

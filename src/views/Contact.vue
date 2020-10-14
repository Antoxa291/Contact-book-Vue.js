<template>
<div class="row">
    <div v-if="contact" class="col s6 offset-s1">
        <h1>{{contact.name}}</h1>

        <form @submit.prevent="submitHandler">

            <div class="row center">
                <div class="input-field col s6">
                    <i class="material-icons prefix blue-text text-darken-2">account_circle</i>
                    <input id="name" v-model="name" type="text" class="validate" data-length="20" />
                    <label for="name">First Name</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{ name.length }}/20</span>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" v-model="last" type="text" class="validate" data-length="20" />
                    <label for="last_name">Last Name</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{ last.length }}/20</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix blue-text text-darken-2">phone</i>
                    <input id="phone" v-model="phone" type="tel" class="validate" data-length="13" />
                    <label for="phone">Phone number</label>
                    <span class="helper-text" data-error="wrong" data-success="right"></span>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{ phone.length }}/13</span>
                </div>
            </div>

            <div class="row">
                <input id="date" class="center" type="text" ref="datepicker" />
                <label class="center" for="date" style="float: center;">Select a date</label>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix blue-text text-darken-2">mode_edit</i>
                    <textarea id="address" v-model="address" class="materialize-textarea" data-length="240"></textarea>
                    <label for="address">Home Address</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{ address.length }}/240</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix blue-text text-darken-2">email</i>
                    <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                    <span class="helper-text" data-error="wrong" data-success="right"></span>
                </div>
            </div>

            <i class="material-icons prefix blue-text text-darken-2">tags</i>
            <div class="chips blue-text text-darken-2" ref="chips"></div>

            <div>
                <button class="btn" type="submit" style="margin-right: 1rem;">Update</button>
                <button class="btn blue" type="button" @click="completeContact">Complete contact</button>
            </div>
        </form>
    </div>
    <p v-else>Contact not found</p>
</div>
</template>

<script>
export default {
    computed: {
        contact() {
            return this.$store.getters.contactById(+this.$route.params.id)
        }
    },
    data: () => ({
        name: "",
        last: "",
        address: "",
        phone: "",
        chips: null,
        date: null,
    }),
    mounted() {

        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: 'Contact tags',
            data: this.contact.chips
        })
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: 'dd.mm.yyyy',
            defaultDate: new Date(this.data.date),
            setDefaultDate: true
        })
        setTimeout(() => {
            M.updateTextFields()
        }, 0)
    },
    methods: {
        submitHandler() {
            this.$store.dispatch('updateContact', {
                id: this.contact.id,

                name: this.data.name
            })
            this.$store.dispatch('updateContact', {
                id: this.contact.id,

                lastName: this.data.last
            })
            this.$store.dispatch('updateContact', {
                id: this.contact.id,

                address: this.data.address
            })
            this.$store.dispatch('updateContact', {
                id: this.contact.id,

                phone: this.data.phone
            })
            this.$store.dispatch('updateContact', {
                id: this.contact.id,

                date: this.data.date
            })
            // this.$store.dispatch('updateContact', {
            //     id: this.contact.id,

            //     chips: this.data.chips
            // })
            this.$router.push('/list')
        },
        completeContact() {
            this.$store.dispatch('completeContact', this.contact.id)
            this.$router.push('/list')
        }
    },
    destroyed() {
        if (this.date && this.date.destroy) {
            this.date.destroy()
        }

        if (this.chips && this.chips.destroy) {
            this.chips.destroy()
        }
    }
}
</script>

<style lang="scss" scoped>
.row {
    min-width: 400px;
}
</style>

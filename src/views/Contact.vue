<template>
<div class="row">
    <!-- отображение страницы контакта, по id с проверкой -->
    <div v-if="contact" class="col s6 offset-s1">
        <h1>{{contact.name}}</h1>

        <form @submit.prevent="submitHandler">

            <div class="row center">
                <div class="input-field col s6">

                    <i class="material-icons prefix blue-text text-darken-2">account_circle</i>
                    <input id="name" v-model="name" type="text" class="validate" data-length="20" />

                    <span class="character-counter" style="float: right; font-size: 12px;">{{ name.length }}/20</span>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" v-model="lastName" type="text" class="validate" data-length="20" />

                    <span class="character-counter" style="float: right; font-size: 12px;">{{ lastName.length }}/20</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix blue-text text-darken-2">phone</i>
                    <input id="phone" v-model="phone" type="tel" class="validate" data-length="13" />

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
                    <input id="address" v-model="address" class="validate" data-length="240" />

                    <span class="character-counter" style="float: right; font-size: 12px;">{{ address.length }}/240</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix blue-text text-darken-2">email</i>
                    <input id="email" v-model="email" type="email" class="validate" />

                    <span class="helper-text" data-error="wrong" data-success="right"></span>
                </div>
            </div>

            <div>
                <button class="waves-effect waves-light btn" type="submit" style="margin: 0 1rem 1rem 0;">Update contact</button>
                <button class="waves-effect waves-light btn blue" type="button" @click="closeContact">Close contact</button>
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
        lastName: "",
        address: "",
        email: "",
        phone: "",
        date: null,
    }),
    mounted() {
        this.name = this.contact.name;
        this.lastName = this.contact.lastName;
        this.address = this.contact.address;
        this.email = this.contact.email;
        this.phone = this.contact.phone;

        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: 'dd.mm.yyyy',
            defaultDate: new Date(),
            setDefaultDate: true
        })

    },
    methods: {
        submitHandler() {
            
            this.$store.dispatch('updateContact', {
                id: this.contact.id,
                name: this.name,
                lastName: this.lastName,
                address: this.address,
                phone: this.phone,
                date: new Date(this.date.date).toLocaleDateString(),
                email: this.email
            })

            this.$router.push('/list')
        },

        closeContact() {
            
            this.$router.push('/list')
        }
    },
    destroyed() { //метод удаления плагинов из памяти
        if (this.date && this.date.destroy) {
            this.date.destroy()
        }

    }
}
</script>

<style lang="scss" scoped>
.row {
    min-width: 400px;
}
.btn {
    margin: 0 1rem 1rem 0;
    }
</style>

<template>
<div class="row">
    <div class="col  offset-s1">
        <h1>Create new contact:</h1>
        <div class="row center">
            <form class="col s12" @submit.prevent="submitForm">
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
                <button class="btn center blue darken-4" type="submit">
                    Add to list
                </button>
            </form>
        </div>
    </div>
    <!-- -->
</div>
</template>

<script>
export default {
    name: 'create',
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
            placeholder: "Add some tags",
            limit: 5,
        });
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(),
            setDefaultDate: false,
        });
    },
    methods: {
        submitForm() {
            const contact = {
                id: Date.now(),
                name: this.name,
                lastName: this.last,
                phone: this.phone,
                date: new Date(this.date.date).toLocaleDateString(),
                address: this.address,
                email: this.email,
                chips: this.chips.chipsDate,
            }

            this.$store.dispatch('createContact', contact)
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
h1 {
    margin: 1.5rem 0 1.5rem 0;
}

.center {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.row {
    margin: 5px;
}
</style>

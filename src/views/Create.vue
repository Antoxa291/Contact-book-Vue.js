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
                        <input id="last_name" v-model="lastName" type="text" class="validate" data-length="20" />
                        <label for="last_name">Last Name</label>
                        <span class="character-counter" style="float: right; font-size: 12px;">{{ lastName.length }}/20</span>
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
                        <input id="email" v-model="email" type="email" class="validate" />
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                </div>

                <button class="waves-effect waves-light btn center blue darken-4" type="submit">
                    Add to list
                </button>
            </form>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'create',
    data: () => ({
        name: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        date: null,
    }),
    mounted() {

        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(),
            setDefaultDate: true,
        });
    },
    methods: {
        submitForm() {
            const contact = {
                id: Date.now(),
                name: this.name,
                lastName: this.lastName,
                phone: this.phone,
                date: new Date(this.date.date).toLocaleDateString(),
                address: this.address,
                email: this.email,
                selected: false

            }

            this.$store.dispatch('createContact', contact)
            this.$router.push('/list')
            this.$swal({icon: 'success',
                        title: 'Contact is created',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        
                        })
            
        }
    },
     
    //метод удаления плагинов из памяти
    destroyed() { 
        if (this.date && this.date.destroy) {
            this.date.destroy()
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

<template>
    <div class="container">
        <div class="app-bg">
            <header>
                <h1 class="logo">weather<span>UP</span></h1>
                <form v-on:submit.prevent="onSubmit">
                    <input type="text" placeholder="Enter a city" v-model="city">
                </form>
            </header>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Input',
    data(){
        return {
            city: ''
        }
    },
    methods: {
        onSubmit() {
            if (!this.city) {
                this.$toasted.show('Please enter a valid city', {
                    duration: 3000
                })
            } else {
                this.$router.push(`/result/${this.city}`);                
            }
            
        }
    }

}
</script>

<style lang="scss" scoped>
header {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding-top: 15em;

    .logo {
        background-color: rgba(255, 255, 255, .25);
        border-radius: .25em;
        margin-top: -2.5em;
        padding: 10px 20px;
        color: #000;
        left: 50%;
        transform: translate(-50%,0);
        position: absolute;
        font-size: 3.5em;
        text-align: center;
        font-family: 'Comfortaa';
        font-weight: 300;
        span {
            font-weight: 700;
            color: #efcc00;
        }
    }

    input {
        width: 100%;
        font-size: 1.25em;
        border: none;
        padding: 0 0 5px 2px;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
        background: none;
    }

    input::placeholder {
        color: #fff;
    }
    input:focus {
        outline: none;
    }
    
}

header, .location {
    text-align: center;
}
</style>
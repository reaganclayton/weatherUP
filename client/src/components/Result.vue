<template>
<div :class="['app-bg', { nightBg: isNight }]">
  <div v-if="error">
    <router-link to="/">
      <i class="fa fa-times close-icon"></i>      
    </router-link>
    <div class="handleError">
      <h1>Uh-oh!</h1>
      <img src="../assets/errorIcon.png" alt="Error Icon">
      <h3>
        We couldn't find {{ this.$route.params.city }}
      </h3>
      <p>
        Check your spelling and try again!
      </p>      
    </div>
  </div>
  <div v-if="weather">
    <router-link to="/">
      <i class="fa fa-times close-icon"></i>      
    </router-link>
    <main>
      <div class="location">
        <div class="city">{{ weather.name }}</div>
        <div class="long-lat">{{ weather.coord.lon }}, {{ weather.coord.lat }}</div>
        <div class="date">
          {{ getDate(weather.timezone) }}
        </div>
      </div>
      <div class="main-content">
        <div class="tempIcon">
          <div class="condition-icon">
            <img :src="getImages(weather.weather[0].icon)" />
          </div>
          <div class="temp">{{ Math.round(weather.main.temp) }}<span>°</span></div>
        </div>
        <div class="weather">{{ weather.weather[0].main }}</div>
        <div class="hi-low">
          {{ Math.round(weather.main.temp_max) }}° / {{ Math.round(weather.main.temp_min) }}°
          <span></span>Feels like {{ Math.round(weather.main.feels_like) }}°
        </div>
      </div>
    </main>
    <section class="details">
      <div class="humidity">
          <i class="fa fa-tint"></i>
          <h5>Humidity</h5>
          <p class="humidity-value">{{ Math.round(weather.main.humidity) }}%</p>
      </div>
      <div class="pressure">
          <i class="fa fa-tachometer"></i>
          <h5>Pressure</h5>
          <p class="pressure-value">{{ Math.round(weather.main.pressure) }} hPa</p>
      </div>
      <div class="wind">
          <i class="fa fa-wind"></i>
          <h5>Wind</h5>
          <p class="wind-value">{{ Math.round(weather.wind.speed) }} mph</p>
      </div>
    </section>  
  </div>
</div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: 'Result',
  data(){
    return {
      error: null,
      weather: null,
      weatherIcon: ''
    }
  },
  created() {
    axios.get(`${this.$route.params.city}`)
      .then(response => {
        this.weather = response.data;
        this.weatherIcon = this.weather.weather[0].icon;
      })
      .catch(error => {
        this.error = error;
      });
  },
  computed: {
    isNight() {
      return !!this.weatherIcon && this.weatherIcon[2] === 'n';
    }
  },
  methods: {
    getImages(code) {
      let imgs = require.context('../assets/', false, /\.png$/)
      return imgs('./' + code + ".png")
    },
    getDate(offset) {
      return moment().utcOffset(offset / 3600).format('LT');
    }
  }
}
</script>


<style lang="scss" scoped>
.nightBg {
    background: #000000;
    background: -moz-linear-gradient(top,  #000000 0%, #7f466e 61%, #fc8a8a 100%);
    background: -webkit-linear-gradient(top,  #000000 0%,#7f466e 61%,#fc8a8a 100%);
    background: linear-gradient(to bottom,  #000000 0%,#7f466e 61%,#fc8a8a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#fc8a8a',GradientType=0 );
}
.handleError {
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 80%;
      h3 {
        padding-bottom: .5em;
      }
      img {
        padding: 0 0 1em 0;
      }
}
.close-icon {
    font-size: 2em;
    position: absolute;
    right: 0;
    padding: 35px 40px;
    cursor: pointer;
    color: #fff;
}

main {
    text-align: center;
    .location {
        .city {
            font-size: 2em;
            padding-top: 75px;
        }
        .long-lat {
            padding-bottom: 10px;
        }
        .date {
            opacity: 75%;
        }
    }
    .main-content {
        .tempIcon {
            display: flex;
            justify-content: center;
            align-items: baseline;

            .condition-icon { padding-right: 5px; }
        }

        .temp {
            font-size: 5em;
            padding: 30px 0 5px;

        }
        .weather {
            font-size: 1.35em;
            padding-bottom: 10px;
        }
        .hi-low {
            span { padding-left: 5px; }
        }
    }
}

.details {
    background-color: rgba(255, 255, 255, .25);
    border-radius: 1em;
    width: 90%;
    height: 150px;
    padding: 20px 0;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 1em;
    position: absolute;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    i {
        font-size: 2em;
    }

    h5 {
        font-size: .85em;
        letter-spacing: 2px;
        padding: 25px 0 5px;
    }

    p {
        font-size: 1.25em;
    }

}
</style>
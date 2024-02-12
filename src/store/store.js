import { reactive } from 'vue'

export const store = reactive({
    state: {
        long: 51.505,
        lat: -0.09,
        ipAddress: '--',
        location: '--',
        timezone: '--',
        isp: '--',
    },

    setLong(value) {
        this.state.long = value;
    },
    getLong() {
        return this.state.long
    },


    setLat(value) {
        this.state.lat = value;
    },
    getLat() {
        return this.state.lat
    },


    setIpAddress(value) {
        this.state.ipAddress = value
    },
    getIpAddress() {
        return this.state.ipAddress
    },
    

    setLocation(value) {
        this.state.location = value
    },
    getLocation() {
        return this.state.location
    },


    setTimezone(value) {
        this.state.timezone = value
    },
    getTimezone() {
        return this.state.timezone
    },


    setIsp(value) {
        this.state.isp = value
    },
    getIsp() {
        return this.state.isp
    }
})
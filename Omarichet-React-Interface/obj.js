let obj = {
    "sensors": {
        "voltage": "3.0\n",
        "cpufreq": "1.40\n",
        "cputemp": "51.5\n",
        "mpu": {
            "Gx": "-0.10",
            "Gy": "-0.31",
            "Gz": "0.14",
            "Ax": "0.00",
            "Ay": "0.01",
            "Az": "1.00"
        },
        "dht": {
            "humidity": 53,
            "temperature": 30
        }
    }
}

console.log(obj.sensors.dht.humidity)
console.log(obj.sensors.voltage)
console.log(obj.sensors.mpu)
console.log(obj.sensors.cpufreq)
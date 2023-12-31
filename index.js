function init() {

    fetch('features.json')
    .then(obj => obj.json())
    .then(obj => {


            const searchControls = new ymaps.control.SearchControl({
                options: {
                    float: 'right',
                    noPlacemark: true
                }
            })

            const myMap = new ymaps.Map("map", {
                center: [55.755864, 37.617698],
                zoom: 4,
                controls: [searchControls]
            })

            const removeControls = [
                'geolocationControl',
                'trafficControl',
                'fullscreenControl',
                'zoomControl', 'rulerControl',
                'typeSelector'
            ]

            const clearTheMap = myMap => {
                removeControls
                    .forEach(controls => myMap.controls.remove(controls))
            }

            clearTheMap(myMap)

            const objectManager = new ymaps.ObjectManager({
                clusterize: true,
                clusterIconLayout: "default#pieChart"
            })


            objectManager.add(obj)
            myMap.geoObjects.add(objectManager)

    })
}
ymaps.ready(init)
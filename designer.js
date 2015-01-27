(function(RecyclingContainerProgressBar) {
    RecyclingContainerProgressBar.setWidth('335');
    RecyclingContainerProgressBar.setHeight('340');
    RecyclingContainerProgressBar.customizeProperty('value', {
        title: 'value',
        display: true,
        sourceDisplay: false
    });
    RecyclingContainerProgressBar.customizeProperty('sensorName', {
        title: 'sensor name',
        display: true,
        sourceDisplay: false
    });

    RecyclingContainerProgressBar.customizeProperty('deviceProperties', {
        title: 'device.properties',
        display: false,
        sourceDisplay: true
    });

    RecyclingContainerProgressBar.customizeProperty('deviceStateFields', {
        title: 'deviceState.fields',
        display: false,
        sourceDisplay: true
    });
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
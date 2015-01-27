WAF.define('RecyclingContainerProgressBar', ['waf-core/widget', 'RecyclingContainerTemperature'], function(widget, RecyclingContainerTemperature) {
    "use strict";

    var RecyclingContainerProgressBar = widget.create('RecyclingContainerProgressBar', RecyclingContainerTemperature, {
        render: function() {
            this.node.innerHTML = "<div class='sl-recycle widget-content'><div class='content'><div class='progress vertical bottom'><div class='progress-bar' style='height:" + this.value() + "%;' > <span class='sr-only'><span class='ng-binding'>" + this.value() + "</span>%</span></div></div></div></div>";
        },
        redraw: function(value){
            $(".sl-recycle .ng-binding").html(value);
            $(".sl-recycle .progress-bar").attr('style', 'height:' + value + '%');
        }
    });
    RecyclingContainerProgressBar.removeProperty('sensorName');
    RecyclingContainerProgressBar.addProperty('sensorName', {
        type: 'string',
        defaultValue: "Slider"
    });

    return RecyclingContainerProgressBar;

});

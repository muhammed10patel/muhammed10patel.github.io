---
layout: page
title: Autoice Competition
description: Organised by European Space Agency
img: assets/img/auto_ice_challenge.png
importance: 2
category: work
giscus_comments: false
---

We were given data from multiple sensors like synthetic aperture radar (SAR) imagery, ERA5 temperature data, AMSR2 passive microwave radiometer along with ice-chart-derived label maps as ground truth. The task was to build a model which takes the data from multiple sensors and outputs three ice products: 1) Sea Ice Concentration(SIC), 2) Stage of Development (SOD), 3) FLOE size

<div class="row">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SAR_HH_HV.png" title="HH-HV" class="img-fluid rounded z-depth-1" %}
         <div class="caption">
   HH and HV channels of SAR image
</div>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GT.png" title="example image" class="img-fluid rounded z-depth-1" %}
           <div class="caption">
   GT maps: SIC, SOD, FLOE
</div>
    </div>

</div>

Instead of focusing on complicated model architectures, we gave more emphasis on developing new tricks like input SAR variable downscaling, input feature selection, spatial–temporal encoding, and the choice of loss functions. These innovations helped us achieve the first place over 30 teams worldwide.

We utilized a very simple UNET and modified it a bit as shown in below figure.

<div class="row text-center" >
    <div class="col-sm mt-3 mt-md-8">
        {% include figure.liquid loading="eager" path="assets/img/UNET.png" title="UNET" width="50%" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The structure of the UNET. We have single encoder and a single decoder. Lastly we have three different head for three tasks : SIC, SOD, FLOE
</div>

Next let us see the results qualitatively.

<div class="row text-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/viz_autoice.png" title="Autoice viz" class="img-fluid rounded z-depth-1" width="70%"%}
    </div>
</div>
<div class="caption">
   Visualization of the results. Top row shows the HH, HV channels; second row shows the GT; last row shows the prediction of the model.
</div>

These simple yet effective solutions helped us to win the Autoice competition.

<div class="row text-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/leaderboard.png" title="Leaderboard" class="img-fluid rounded z-depth-1" width="70%"%}
    </div>
</div>
<div class="caption">
  Autoice competition leaderboard
</div>

This is a joint project with my teammates at [VIP lab](https://vip.uwaterloo.ca/) and the The technical report is available at: [DOI](https://doi.org/10.5194/tc-18-1621-2024).

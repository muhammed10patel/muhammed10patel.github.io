---
layout: page
title: Autoice Competition
description: Organised by European Space Agency
img: assets/img/auto_ice_challenge.png
importance: 2
category: Academic
giscus_comments: false
---

We were given data from multiple sensors like synthetic aperture radar (SAR) imagery, ERA5 temperature data, AMSR2 passive microwave radiometer along with ice-chart-derived label maps as ground truth. The task was to build a model which takes the data from multiple sensors and outputs three ice products: 1) Sea Ice Concentration (SIC), 2) Stage of Development (SOD), 3) FLOE size.

<div class="project-gallery row">
    <div class="col-sm-5 mt-3 mt-md-0">
        <img src="{{ '/assets/img/SAR_HH_HV.png' | relative_url }}" alt="HH-HV" data-title="HH and HV channels of SAR image" class="img-fluid rounded z-depth-1">
        <div class="caption">HH and HV channels of SAR image</div>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        <img src="{{ '/assets/img/GT.png' | relative_url }}" alt="GT Maps" data-title="GT maps: SIC, SOD, FLOE" class="img-fluid rounded z-depth-1">
        <div class="caption">GT maps: SIC, SOD, FLOE</div>
    </div>
</div>

Instead of focusing on complicated model architectures, we gave more emphasis on developing new tricks like input SAR variable downscaling, input feature selection, spatial–temporal encoding, and the choice of loss functions. These innovations helped us achieve the first place over 30 teams worldwide.

We utilized a very simple UNET and modified it a bit as shown in the figure below.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-8">
        <img src="{{ '/assets/img/UNET.png' | relative_url }}" alt="UNET Structure" data-title="The structure of the UNET" width="50%" class="img-fluid rounded z-depth-1">
        <div class="caption">
            The structure of the UNET. We have a single encoder and a single decoder. Lastly, we have three different heads for three tasks: SIC, SOD, FLOE.
        </div>
    </div>
</div>

Next let us see the results qualitatively.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/viz_autoice.png' | relative_url }}" alt="Autoice Visualization" data-title="Visualization of the results" width="70%" class="img-fluid rounded z-depth-1">
        <div class="caption">
            Visualization of the results. The top row shows the HH, HV channels; the second row shows the GT; the last row shows the prediction of the model.
        </div>
    </div>
</div>

These simple yet effective solutions helped us to win the Autoice competition.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/leaderboard.png' | relative_url }}" alt="Leaderboard" data-title="Autoice competition leaderboard" width="70%" class="img-fluid rounded z-depth-1">
        <div class="caption">Autoice competition leaderboard</div>
    </div>
</div>

This is a joint project with my teammates at [VIP lab](https://vip.uwaterloo.ca/). The technical report is available at: [DOI](https://doi.org/10.5194/tc-18-1621-2024).

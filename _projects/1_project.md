---
layout: page
title: Foundation model for SAR imagery
description: using MAE for pretraining a ViT backbone on SAR data
img: assets/img/MAE-picture.png
importance: 1
category: work
related_publications: false
---

    ---
    Highlights
    -- Developed a SAR imagery foundation model using Masked Autoencoders (MAE) for feature learning.
    -- Pre-trained Vision Transformer (ViT) on AI4Arctic dataset with MAE, fine-tuned for segmentation.
    -- Achieved 5% F1-score increase over UNet benchmark with only 50% labeled data.
    -- Model learned SAR features and irregular objects like ice, water, and land.
    ---

<div class="row text-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/masked_autoencoders.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematics of MAE. Input patches are masked and the deep learning model is asked to recover the masked patches.
</div>

I applied the MAE pre-training strategies and suprsingly the regeneration results are quite impressive. Since our SAR singals are images of earth's surface(Canadian arctic in our case), I thought the deep learning model wouldn't be able to regenerate irregular objects like ice shapes, rocks, and water. But the below results proves otherwise

<div class="row text-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MR_25.png" title="MR_25" class="img-fluid rounded z-depth-1" min-width="100%" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MR_75.png" title="MR_75" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MR_90.png" title="MR_90" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The above images shows the regeneration quality with different mask ratio. Increasing the mask ratio leads to a loss of crucial information necessary for accurately reproducing features such as the crack lines (black lines), resulting in incorrect representations of their lengths.

</div>

Next, let's invistigate the effect of pre-training on a downstream task (semantic segmentation of Sea Ice age).

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Table_MAE.png" title="Table MAE" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/table_mae2.png" title="Effect of different labelled data" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure (a) shows the effect of different pretraining strategy. Figure (b) shows the effect of % of pretraining vs finetuning data. 
</div>

Lastly, let's visualize the segmentation quality using the pretrained model.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/viz_combined.png" title="Visualization of segmentation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Segmentation visualization of SOD on two test scenes. The First row shows the Original HH, HV, and Ground truth,
the second row shows the reconstructed HH, HV from 75% masked image, the third row shows the prediction of the AI4arctic
benchmark model. The land area is filtered out in the segmentation maps
</div>

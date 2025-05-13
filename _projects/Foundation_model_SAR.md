---
layout: page
title: Foundation model for SAR imagery
description: using MAE for pretraining a ViT backbone on SAR data
img: assets/img/MAE-picture.png
importance: 4
category: Academic
related_publications: false
---

    ---
    Highlights
    -- Developed a SAR imagery foundation model using Masked Autoencoders (MAE) for feature learning.
    -- Pre-trained Vision Transformer (ViT) on AI4Arctic dataset with MAE, fine-tuned for segmentation.
    -- Achieved 5% F1-score increase over UNet benchmark with only 50% labeled data.
    -- Model learned SAR features and irregular objects like ice, water, and land.
    ---

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/masked_autoencoders.png' | relative_url }}" alt="Masked Autoencoders" data-title="Schematics of MAE" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">
    Schematics of MAE. Input patches are masked, and the deep learning model is asked to recover the masked patches.
</div>

<p>
I applied the MAE pre-training strategies and surprisingly, the regeneration results are quite impressive. Since our SAR signals are images of Earth's surface (Canadian Arctic in our case), I thought the deep learning model wouldn't be able to regenerate irregular objects like ice shapes, rocks, and water. But the results below prove otherwise:
</p>

<div class="project-gallery row text-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img src="{{ '/assets/img/MR_25.png' | relative_url }}" alt="MR_25" data-title="Mask Ratio 25%" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <img src="{{ '/assets/img/MR_75.png' | relative_url }}" alt="MR_75" data-title="Mask Ratio 75%" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-8 mt-3 mt-md-0">
        <img src="{{ '/assets/img/MR_90.png' | relative_url }}" alt="MR_90" data-title="Mask Ratio 90%" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">
    The above images show the regeneration quality with different mask ratios. Increasing the mask ratio leads to a loss of crucial information necessary for accurately reproducing features such as the crack lines (black lines), resulting in incorrect representations of their lengths.
</div>

<p>
Next, let's investigate the effect of pre-training on a downstream task (semantic segmentation of Sea Ice age).
</p>

<div class="project-gallery row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/Table_MAE.png' | relative_url }}" alt="Table MAE" data-title="Effect of Pretraining Strategies" class="img-fluid rounded z-depth-1">
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ '/assets/img/table_mae2.png' | relative_url }}" alt="Effect of Different Labelled Data" data-title="Effect of Pretraining vs Fine-tuning Data" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">
    Figure (a) shows the effect of different pretraining strategies. Figure (b) shows the effect of % of pretraining vs fine-tuning data.
</div>

<p>
Lastly, let's visualize the segmentation quality using the pre-trained model.
</p>

<div class="project-gallery row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ '/assets/img/viz_combined.png' | relative_url }}" alt="Visualization of Segmentation" data-title="Segmentation Visualization" class="img-fluid rounded z-depth-1">
    </div>
</div>
<div class="caption">
    Segmentation visualization of SOD on two test scenes. The first row shows the Original HH, HV, and Ground truth,
the second row shows the reconstructed HH, HV from a 75% masked image, and the third row shows the prediction of the AI4Arctic
benchmark model. The land area is filtered out in the segmentation maps.
</div>

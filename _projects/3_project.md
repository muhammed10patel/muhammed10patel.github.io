---
layout: page
title: Automatic Whale Detection Using Deep Learning
description: Leveraging state-of-the-art deep learning techniques for automated whale detection.
img: assets/img/project3/cover_automatic_whale_detection.webp
importance: 3
category: work
related_publications: True
---

### Highlights

- Developed an automated whale detection model on Survey Data from Fisheries and Oceans, Canada (DFO)
- Tested different SOTA models like Deformable Detr, Yolov8, and backbones like VMamaba, ConvNext-T and Swin_T
- Systematically analyzed patch sizes (256–4096 pixels) and found patch size 4096 to be best
- Achieved an AP@IoU=0.1 of 0.878, using ConvNext with FasterRCNN
- Addressed domain adaptation challenges using active learning on new survey 2023 data
- Shipped the model into the production via Labelstudio and is currently used by DFO to annotate their new data

---

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/survey_location.png' | relative_url }}" alt="Survey location" data-title="Survey location in Canadian Arctic" class="img-fluid rounded z-depth-1" style="width: 35%; height: auto;">
    </div>
</div>
<div class="caption">
    Survey location in Canadian Arctic
</div>


#### Dataset
<p>
The dataset is collected over four different years(2014, 2015, 2016 and 2017) at Canadian Arcitc and contains two species: Beluga and Narval. The above figure shows the locations of survey. The dataset is particularly challenging because there is so much variability in the dataset. Factors such as time
of day, wind speed, weather conditions, swell size, sediment, viewing angle, and water turbidity affect the visibility and appearance of the belugas and narwhals.
</p>


<div id="gallery1" class="project-gallery row text-center">
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/140803_Cam2_00779.jpg' | relative_url }}" alt="Image 1" data-title="2014 Dataset" data-alt-src="{{ 'assets/img/project3/140803_Cam2_00779_bbox.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/20150818_25mm_002230.jpg' | relative_url }}" alt="Image 2" data-title="2015 Dataset" data-alt-src="{{ 'assets/img/project3/20150818_25mm_002230_bbox.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/ES_20160821_25mm_02317.jpg' | relative_url }}" alt="Image 3" data-title="2016 Dataset" data-alt-src="{{ 'assets/img/project3/ES_20160821_25mm_02317_bbox.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/20170729_CF_2001081.jpg' | relative_url }}" alt="Image 4" data-title="2017 Dataset" data-alt-src="{{ 'assets/img/project3/20170729_CF_2001081_bbox.jpg' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
</div>


<!-- Add toggle button -->
<div id="gallery1-container" class="text-center">
  <button class="toggle-button btn btn-primary btn-sm" data-gallery="gallery1" data-toggled="false">Show Predictions</button>
</div>

<!-- Add common caption -->
<div class="gallery-caption text-center mt-3">
  <p style="font-size: 12px; color: #555;">
    These images show the heterogeneous nature of the dataset. Prediction from the Best model is shown across datasets from different years. Click on individual images to zoom in. Click on the toggle button to show or remove prediction. Box color coding; TP: <span style="color: green;">Green</span>, FP: <span style="color: red;">Red</span>, FN: <span style="color: blue;">Blue</span>.
  </p>
</div>


<p>
The dataset, as illustrated in the above figures, contains significant background noise, including elements such as waves and sunglare that closely resemble the appearance of whales. Therefore context is really important when discerning whales other noises. The below figure illustrates the significance of
contextual information in an image affected by sunglare.
</p>
<!-- <div class="project-gallery row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/patches.png' | relative_url }}" alt="Domain Adaptation Results" data-title="Domain Adaptation Results" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
    Visualizations showing model predictions in novel environments. Green boxes indicate true positives, red for false positives.
</div> -->

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/patches.png' | relative_url }}" alt="Survey location" data-title="Patches from size 256-4096 highliting importance of the context" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
  <p style="font-size: 12px; color: #555;">
    Patches from size 256 to 4096. Orientation of the waves is critical to discern
whales from waves.
  </p>
</div>


#### Experimental design

First we start with three main family of objection detection architectures: FasterRCNN, YOLO and DeTr. Next we pair them up with 4 different backbone architecture namely: Resnet50, Swin-T, ConvNext-T and Vmamba. These backbones were chosen because of their varying receptive field. The below figure shows the receptive field of different backbone architectures.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/receptive_field.png' | relative_url }}" alt="Survey location" data-title="Effective Receptive Fields (ERF) between different backbone models." class="img-fluid rounded z-depth-1" style="width: 50%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
  Effective Receptive Fields (ERF) between different backbone models. Figure adapted from 
  <a href="https://arxiv.org/abs/2401.10166" target="_blank" style="color: #007bff; text-decoration: none;">Zhu et al., 2024</a>, used under CC BY 4.0.
</p>
</div>
<p>
  Therefore in the experimental design, we aim to:
</p>
<ol type="a" style="padding-left: 20px;">
  <li>Determine the optimal patch size that balances contextual information and computational efficiency.</li>
  <li>Assess how different object detection models handle the complexities of whale detection in aerial imagery.</li>
  <li>Evaluate the effectiveness of various backbone architectures in extracting relevant features for whale detection.</li>
  <li>Identify the optimal configuration for operational deployment in marine mammal monitoring programs conducted by the DFO.</li>
</ol>

#### Result

The below precision-recall curve shows the performance of all

| # Params | Model             | Backbone           | Patch size 256 | Patch size 512 | Patch size 1024 | Patch size 2048 | Patch size 4096 | resize 50% |
|----------|-------------------|--------------------|----------------|----------------|-----------------|-----------------|-----------------|------------|
| 40.10M   | Deformable DETR   | ResNet-50          | 0.794          | 0.820          | 0.847           | 0.761           | NP              | 0.318      |
| 38.84M   | Deformable DETR   | Swin-T             | 0.00           | 0.841          | 0.828           | NP              | NP              | NP         |
| 40.80M   | Deformable DETR   | VMamba-T           | 0.775          | 0.788          | LDC             | NP              | NP              | NP         |
| 39.15M   | Deformable DETR   | ConvNext-T         | 0.812          | 0.833          | 0.832           | 0.741           | NP              | NP         |
| 41.35M   | FasterRCNN        | ResNet-50          | 0.746          | 0.810          | 0.833           | 0.843           | 0.840           | 0.663      |
| 44.75M   | FasterRCNN        | Swin-T             | 0.793          | 0.841          | **0.863**       | **0.860**       | NP              | NP         |
| 46.71M   | FasterRCNN        | VMamba-T           | 0.772          | 0.788          | 0.818           | 0.802           | NP              | NP         |
| 45.05M   | FasterRCNN        | ConvNext           | 0.784          | 0.834          | **0.861**       | **0.878**       | NP              | NP         |
| 11.14M   | Yolov8-s          | Yolov8CSPDarkNet   | 0.747          | 0.791          | 0.812           | 0.645           | NP              | NP         |
| 43.69M   | Yolov8-l          | Yolov8CSPDarkNet   | 0.746          | 0.804          | 0.802           | 0.731           | NP              | NP         |


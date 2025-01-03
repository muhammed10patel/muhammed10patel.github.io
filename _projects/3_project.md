---
layout: page
title: Automatic Whale Detection Using Deep Learning
description: Leveraging state-of-the-art deep learning techniques for automated whale detection.
img: assets/img/project3/cover_automatic_whale_detection.webp
importance: 3
category: work
related_publications: False
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

The below table shows the  $$ mAP_{IoU=10\%} $$ the performance of all the experiments. As can be seen the, FasterRCNN model, with ConvNext-T backbone performs best.



<table style="border-collapse: collapse; width: 100%; text-align: center;">
  <thead>
    <tr style="border: 1px solid black;">
      <th style="border: 1px solid black;"># Params</th>
      <th style="border: 1px solid black;">Model</th>
      <th style="border: 1px solid black;">Backbone</th>
      <th style="border: 1px solid black;">Patch size 256</th>
      <th style="border: 1px solid black;">Patch size 512</th>
      <th style="border: 1px solid black;">Patch size 1024</th>
      <th style="border: 1px solid black;">Patch size 2048</th>
      <th style="border: 1px solid black;">Patch size 4096</th>
      <th style="border: 1px solid black;">resize 50%</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">40.10M</td>
      <td style="border: 1px solid black;">Deformable DETR</td>
      <td style="border: 1px solid black;">ResNet-50</td>
      <td style="border: 1px solid black;">0.794</td>
      <td style="border: 1px solid black;">0.820</td>
      <td style="border: 1px solid black;">0.847</td>
      <td style="border: 1px solid black;">0.761</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">0.318</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">38.84M</td>
      <td style="border: 1px solid black;">Deformable DETR</td>
      <td style="border: 1px solid black;">Swin-T</td>
      <td style="border: 1px solid black;">0.00</td>
      <td style="border: 1px solid black;">0.841</td>
      <td style="border: 1px solid black;">0.828</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">40.80M</td>
      <td style="border: 1px solid black;">Deformable DETR</td>
      <td style="border: 1px solid black;">VMamba-T</td>
      <td style="border: 1px solid black;">0.775</td>
      <td style="border: 1px solid black;">0.788</td>
      <td style="border: 1px solid black;">LDC</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">39.15M</td>
      <td style="border: 1px solid black;">Deformable DETR</td>
      <td style="border: 1px solid black;">ConvNext-T</td>
      <td style="border: 1px solid black;">0.812</td>
      <td style="border: 1px solid black;">0.833</td>
      <td style="border: 1px solid black;">0.832</td>
      <td style="border: 1px solid black;">0.741</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">41.35M</td>
      <td style="border: 1px solid black;">FasterRCNN</td>
      <td style="border: 1px solid black;">ResNet-50</td>
      <td style="border: 1px solid black;">0.746</td>
      <td style="border: 1px solid black;">0.810</td>
      <td style="border: 1px solid black;">0.833</td>
      <td style="border: 1px solid black;">0.843</td>
      <td style="border: 1px solid black;">0.840</td>
      <td style="border: 1px solid black;">0.663</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">44.75M</td>
      <td style="border: 1px solid black;">FasterRCNN</td>
      <td style="border: 1px solid black;">Swin-T</td>
      <td style="border: 1px solid black;">0.793</td>
      <td style="border: 1px solid black;">0.841</td>
      <td style="border: 1px solid black;"><b>0.863</b></td>
      <td style="border: 1px solid black;"><b>0.860</b></td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">46.71M</td>
      <td style="border: 1px solid black;">FasterRCNN</td>
      <td style="border: 1px solid black;">VMamba-T</td>
      <td style="border: 1px solid black;">0.772</td>
      <td style="border: 1px solid black;">0.788</td>
      <td style="border: 1px solid black;">0.818</td>
      <td style="border: 1px solid black;">0.802</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">45.05M</td>
      <td style="border: 1px solid black;">FasterRCNN</td>
      <td style="border: 1px solid black;">ConvNext</td>
      <td style="border: 1px solid black;">0.784</td>
      <td style="border: 1px solid black;">0.834</td>
      <td style="border: 1px solid black;"><b>0.861</b></td>
      <td style="border: 1px solid black;"><b>0.878</b></td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">11.14M</td>
      <td style="border: 1px solid black;">Yolov8-s</td>
      <td style="border: 1px solid black;">Yolov8CSPDarkNet</td>
      <td style="border: 1px solid black;">0.747</td>
      <td style="border: 1px solid black;">0.791</td>
      <td style="border: 1px solid black;">0.812</td>
      <td style="border: 1px solid black;">0.645</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
    <tr style="border: 1px solid black;">
      <td style="border: 1px solid black;">43.69M</td>
      <td style="border: 1px solid black;">Yolov8-l</td>
      <td style="border: 1px solid black;">Yolov8CSPDarkNet</td>
      <td style="border: 1px solid black;">0.746</td>
      <td style="border: 1px solid black;">0.804</td>
      <td style="border: 1px solid black;">0.802</td>
      <td style="border: 1px solid black;">0.731</td>
      <td style="border: 1px solid black;">NP</td>
      <td style="border: 1px solid black;">NP</td>
    </tr>
  </tbody>
</table>


<div style="text-align: left;">
  <iframe src="{{ 'assets/img/project3/plot_final.html' | relative_url }}" 
          width="1200" 
          height="600"
          style="border:none;">
  </iframe>
</div>

#### Adapting to new domain: Active learning


<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/differences_in_new_data.png' | relative_url }}" alt="Difference in old and new survey data" data-title="Domain gap between new and old survey" class="img-fluid rounded z-depth-1" style="width: 50%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
  Differrences between old and new surveys.
</p>
</div>


In real world, the distribution of the dataset changes continuously. This happened with our partner, DFO in their newly captured survey. Their new survey contains images with ice, new species and different size of the whale. To address this, we use active learning which is a human-in-the-loop approach where few images are sampled from the unlabelled set such that the performance of the model will be maximized if trained on the new sample. We deploy this active learning pipeline using  <a href="https://labelstud.io/" target="_blank" style="color: #007bff; text-decoration: none;">Labelstudio</a>, where model's prediction is continuously refined by a human annotator.

Below video shows an example image annotated and corrected using labelstudio. This workflow is moved into production and is currently utilzed by DFO for their annotation of the new survey.
<!-- ![Alt text for the GIF](assets/img/project3/label_studio.gif) -->

<div style="text-align: center;">
  <img src="{{ 'assets/img/project3/label_studio.gif' | relative_url }}" alt="Model Demo" style="width: 80%; border: 1px solid #ddd; border-radius: 5px;">
</div>

#### Active learning: Result

The below table shows the evolution of the model after four active learning iterations
<div style="display: flex; justify-content: center; margin-top: 20px;">
  <table border="1" style="border-collapse: collapse; text-align: center;">
    <thead style="background-color: #d3d3d3;">
      <tr>
        <th>AL iter</th>
        <th>AP<sub>IoU=10</sub></th>
        <th>TP</th>
        <th>FP</th>
        <th>FN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>0.601</td>
        <td>16</td>
        <td>21</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0.775</td>
        <td>24</td>
        <td>9</td>
        <td>4</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0.730</td>
        <td>230</td>
        <td>83</td>
        <td>9</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0.740</td>
        <td>10</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr style="background-color: #d3d3d3;">
        <td>Total</td>
        <td></td>
        <td>280</td>
        <td>117</td>
        <td>19</td>
      </tr>
    </tbody>
  </table>
</div>

The before and after results of finetuning the model is visualized in the below figure.

<div id="gallery1" class="project-gallery row text-center">
  <!-- First Row -->
  <div class="col-md-6 col-sm-12 mt-3 position-relative">
    <div style="position: absolute; top: 10px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px;">
      Before active learning
    </div>
    <img src="{{ 'assets/img/project3/non_20230823_25mm_cam2_14127.jpg' | relative_url }}" alt="Image 1" data-title="2014 Dataset" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3 position-relative">
    <div style="position: absolute; top: 10px; right: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 5px;">
      After active learning
    </div>
    <img src="{{ 'assets/img/project3/ft_20230823_25mm_cam2_14127.jpg' | relative_url }}" alt="Image 2" data-title="2015 Dataset" class="img-fluid rounded z-depth-1">
  </div>
</div>
<div id="gallery1" class="project-gallery row text-center">
  <!-- Second Row -->
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/non_ft_20230828_25mm_cam1_05655.jpg' | relative_url }}" alt="Image 3" data-title="2016 Dataset" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project3/ft_20230828_25mm_cam1_05655.jpg' | relative_url }}" alt="Image 4" data-title="2017 Dataset" class="img-fluid rounded z-depth-1">
  </div>
</div>

<!-- Add common caption -->
<div class="gallery-caption text-center mt-3">
  <p style="font-size: 12px; color: #555;">
    Left shows the model’s predictions before fine-tuning. Right shows the predictions after finetuning. Box color coding: <span style="color: green;">Green</span>, FP: <span style="color: red;">Red</span>, FN: <span style="color: blue;">Blue</span>.
  </p>
</div>

#### Thesis

I've published a thesis as a part of my Master's program and the manuscript is available [here](https://uwspace.uwaterloo.ca/items/e249219d-797f-47cd-9166-d68cc98a5841).
---
layout: page
title: Eider Duck counting 
description: Counting Eider ducks from aerial imagery
img: assets/img/project_6/eider_ducks.png
importance: 1
category: work
related_publications: False
---


### Highlights

- Finetuned the previously developed [Openwildlife model](/projects/OW/) on the Eider duck partial annotations
- Developed an end-to-end deep learning-assisted operational pipeline to streamline manual annotation
- Built a Flask-based machine learning backend service to support model prediction and training within the annotation interface
- Containerized the complete pipeline (frontend + backend) using Docker and deployed on Google Cloud Platform for scalability
- Reduced annotation time per image from 60 minutes to 15 minutes, significantly lowering operational costs

---

#### Data

The Eider duck dataset consists of aerial images captured via drones over the arctic region. The image depicts a large flock of Eider ducks over polynyas, which are areas of open water surrounded by sea ice. Detecting and counting these birds is crucial for understanding their population dynamics as innuits rely on them for food. The dataset is challenging due to the very close proximity of the birds, which makes it difficult to distinguish between them. Moreover, all the annotations are partial, meaning that only a subset of the birds in the image are labeled, which makes it difficult to train a model.


<div id="gallery1" class="project-gallery row text-center">
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project_6/overhead_2.png' | relative_url }}" alt="Image 1" data-title="Image 1" data-alt-src="{{ 'assets/img/project_6/overhead_2_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project_6/overhead_1.png' | relative_url }}" alt="Image 2" data-title="Image 2" data-alt-src="{{ 'assets/img/project_6/overhead_1_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project_6/aed014f4-IMG_4641.JPG' | relative_url }}" alt="Image 3" data-title="Image 3" data-alt-src="{{ 'assets/img/project_6/aed014f4-IMG_4641_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
    <img src="{{ 'assets/img/project_6/086ed3c4-cluster_2.jpg' | relative_url }}" alt="Image 4" data-title="Image 4" data-alt-src="{{ 'assets/img/project_6/086ed3c4-cluster_2_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
</div>


<!-- Add toggle button -->
<div id="gallery1-container" class="text-center">
  <button class="toggle-button btn btn-primary btn-sm" data-gallery="gallery1" data-toggled="false">Show Partial Annotations</button>
</div>

<!-- Add common caption -->
<div class="gallery-caption text-center mt-3">
  <p style="font-size: 12px; color: #555;">
    These images show the complexity of annotating and counting these ducks. Click on each image to zoom in and out. Partial annotations can be seen by clicking the blue button above.
  </p>
</div>




<!-- 
Sentence captions were generated only for datasets where there was consistency between the ground truth labels and the actual species present. This approach ensured that captions accurately represented the annotated data and avoided discrepancies in cases where general labels (e.g., “animals”) were used, despite the presence of multiple specific species (e.g., lions, zebras, ostriches). -->

<!-- <div class="project-gallery row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/patches.png' | relative_url }}" alt="Domain Adaptation Results" data-title="Domain Adaptation Results" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
    Visualizations showing model predictions in novel environments. Green boxes indicate true positives, red for false positives.
</div> -->

<!-- <div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project3/patches.png' | relative_url }}" alt="Survey location" data-title="Patches from size 256-4096 highliting importance of the context" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
  <p style="font-size: 12px; color: #555;">
    Patches from size 256 to 4096. Orientation of the waves is critical to discern
whales from waves.
  </p>
</div> -->

#### End-to-End Annotation Pipeline
The annotation process for the Eider duck dataset was labor-intensive, requiring approximately 60 minutes per image. To fastrack this process, we developed an end-to-end deep learning-assisted operational pipeline. 

The frontend of the pipeline is using Labelstudio, an open-source annotation tool that provides a user-friendly interface for annotators. 

The backend is powered by a Flask-based machine learning service that integrates with the Labelstudio API. The backend service is responsible for model prediction and training, allowing the annotators to receive real-time feedback on their annotations with a click of a button. 

Other features of the pipeline include:

1. *train region annotation* - For images with partial annotations, the model is trained on the annotated regions only. This allows the model to learn from the available data without requiring complete annotations for every image.
2. *real-time model updates* - The model is continuously updated with new annotations, allowing it to learn from the data as it is being annotated. 

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project_6/ls_studio.png' | relative_url }}" alt="Example of Partial annotation" data-title="Example of rich annotation" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
  Example of Customised Labelstudio inteface with train region annotation. The annotator can select the region of interest and the model will be trained on that region only. This allows for faster annotation and better model performance.
</p>
</div>

#### Result


<div id="gallery1" class="project-gallery row text-center">

  <div class="col-md-6 col-sm-12 mt-3">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Original Image
    </div>
    <img src="{{ 'assets/img/project_6/overhead_2.png' | relative_url }}" alt="Image 1" data-title="Image 1" data-alt-src="{{ 'assets/img/project_6/overhead_2_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-md-6 col-sm-12 mt-3">
      <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Model Predictions on Entire Image
    </div>
    <img src="{{ 'assets/img/project_6/overhead_2_prediction.png' | relative_url }}" alt="Image 2" data-title="Image 2" class="img-fluid rounded z-depth-1">
  </div>
    <div class="col-md-6 col-sm-12 mt-3">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Partial Annotations on a region
    </div>
    <img src="{{ 'assets/img/project_6/overhead_2_partial_annotation.png' | relative_url }}" alt="Image 2" data-title="Image 2" data-alt-src="{{ 'assets/img/project_6/overhead_1_annotated.png' | relative_url }}" class="img-fluid rounded z-depth-1">
  </div>
</div>

<!-- Add common caption -->
<div class="gallery-caption text-center mt-3">
  <p style="font-size: 12px; color: #555;">
    The first images shows the original image. The second image shows the partial annotation. The third image shows the model prediction on the entire image. Click on each image to zoom. The image in total contains 7000 ducks. Wow so many ducks! 
  </p>
</div>


<div style="text-align: center; margin: 30px 0;">
  <video width="80%" controls>
    <source src="{{ 'assets/video/annotation_interface_demo_v2.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="font-size: 14px; color: #666; margin-top: 8px;">Demo video of OpenWildlife detector in action</p>
</div>

#### Deployment

Poetry is used to manage the dependencies of the project. The project is containerized using Docker, which allows for easy deployment and scalability. The complete pipeline (frontend + backend) is deployed on Google Cloud Platform (GCP) and is used by Arctic Eider Society to annotate images. This allows for easy scaling of the pipeline to handle large datasets and multiple annotators. The project will be soon open-sourced and made available to the public.


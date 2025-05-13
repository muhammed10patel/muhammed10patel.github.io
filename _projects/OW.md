---
layout: page
title: Open-Vocabulary Wildlife Detector from aerial images
description: leveraging textual inputs for open vocabulary animal detection
img: assets/img/project4/open_wildlife_cover.png
importance: 1
category: Academic
related_publications: False
---

### Highlights

- Developed OpenWildlife (OW), an innovative open-vocabulary multi-species wildlife detector capable of identifying
  species across terrestrial and marine environments using natural language inputs
- The model is trained on 20 geographically diverse datasets, including birds from multiple continents, pinnipeds,
  cetaceans, wild animals from Africa, and domestic livestock
- Achieved state-of-the-art performance across 20 datasets with detection performance upto 0.981 mAP50 in
  fine-tuning setting and good generalization across 6 datasets in zero-shot setting with upto 0.812 mAP50
- Developed a novel search that uses k-nearest neighbors and breadth-first search to locate areas with high probabilities
  of social species presence. Our search method captures 98.7% of species while exploring only 32.3% of the total
  images

---

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/architecture_and_process_final.png' | relative_url }}" alt="Architecture overview" data-title="Architecuture of OpenWildlife" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
    OpenWildlife architecture: given an aerial image and either a list of species of interest or an LLM-generated grounding
caption, the model extracts image and text features. These features are fused through cross-modality enhancement, enabling language guided queries to highlight relevant regions in both modalities. Predicted animal locations can then be fed into the Social Target Search (STS) module, which prioritizes the next regions for detection based on potential social aggregations of target species. This iterative process efficiently pinpoints wildlife across large areas.
</div>

#### Dataset

We consolidated all publicly available aerial wildlife datasets for our study. Each dataset was preprocessed into the COCO annotation format with bounding boxes; datasets containing only key points were converted into fixed-size bounding boxes. The collected datasets encompass various species, including birds from multiple continents, pinnipeds, cetaceans, wild animals from Africa, and domestic livestock. Detailed descriptions of individual datasets are provided in the supplementary material.

The 26 datasets were partitioned into two groups: 20 were used for open-set continuous pretraining, while 6 were reserved for zero-shot evaluation. This division was designed to assess the model's adaptability across geographically-diverse contexts, such as tundras, tropical oceans, and deserts.


<div id="gallery1" class="project-gallery row text-center">
  <!-- Image 1 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Elephants & Giraffes
    </div>
    <img src="{{ 'assets/img/project4/Eikelboom_IMG_6244.JPG' | relative_url }}" 
         alt="Image 1" 
         data-title="Elephant & Giraffe" 
         data-alt-src="{{ 'assets/img/project4/Eikelboom_bbox_IMG_6244.JPG' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

  <!-- Image 2 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Elephants
    </div>
    <img src="{{ 'assets/img/project4/elephant_e867581a3f3a682195014d99cbf35db3da5c4d73.jpg' | relative_url }}" 
         alt="Image 2" 
         data-title="Elephants" 
         data-alt-src="{{ 'assets/img/project4/elephant_bbox_e867581a3f3a682195014d99cbf35db3da5c4d73.jpg' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

  <!-- Image 4 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Polar Bears
    </div>
    <img src="{{ 'assets/img/project4/polar_bear_69980a43-06-03_157D300S_DSC_7892.JPG' | relative_url }}" 
         alt="Image 4" 
         data-title="Polar Bears" 
         data-alt-src="{{ 'assets/img/project4/polar_bear_bbox_69980a43-06-03_157D300S_DSC_7892.JPG' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

  <!-- Image 5 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Sea lions
    </div>
    <img src="{{ 'assets/img/project4/Seal_lion_291.jpg' | relative_url }}" 
         alt="Image 5" 
         data-title="Sea lions" 
         data-alt-src="{{ 'assets/img/project4/Seal_lion_bbox_291.jpg' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

  <!-- Image 6 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      turtles
    </div>
    <img src="{{ 'assets/img/project4/turtle_20150807cr5mainnestingbeachnlane_20150808_000421_IMG_5803_NIR.jpg' | relative_url }}" 
         alt="Image 6" 
         data-title="turtles" 
         data-alt-src="{{ 'assets/img/project4/turtle_bbox_20150807cr5mainnestingbeachnlane_20150808_000421_IMG_5803_NIR.jpg' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

  <!-- Image 7 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px; ">
      Beluga whales
    </div>
    <img src="{{ 'assets/img/project4/whale_20150818_25mm_002230.jpg' | relative_url }}" 
         alt="Image 7" 
         data-title="Beluga whales" 
         data-alt-src="{{ 'assets/img/project4/whale_bbox_20150818_25mm_002230.jpg' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>
    <!-- Image 3 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      Penguins
    </div>
    <img src="{{ 'assets/img/project4/penguin_cape_wallace_survey_8_451.png' | relative_url }}" 
         alt="Image 3" 
         data-title="Penguins" 
         data-alt-src="{{ 'assets/img/project4/penguin_bbox_cape_wallace_survey_8_451.png' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>
    <!-- Image 8 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      birds
    </div>
    <img src="{{ 'assets/img/project4/bird_Transect_A_2020_135.png' | relative_url }}" 
         alt="Image 3" 
         data-title="birds" 
         data-alt-src="{{ 'assets/img/project4/bird_bbox_Transect_A_2020_135.png' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>
    <!-- Image 9 -->
  <div class="col-md-4 col-sm-6 mt-2 position-relative">
    <div style="position: absolute; top: 5px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.5); padding: 3px 6px; border-radius: 5px; font-size: 12px;">
      livestock
    </div>
    <img src="{{ 'assets/img/project4/livestock_120.jpg' | relative_url }}" 
         alt="Image 3" 
         data-title="livestock" 
         data-alt-src="{{ 'assets/img/project4/livestock_bbox_120.jpg' | relative_url }}" 
         class="img-fluid rounded z-depth-1">
  </div>

</div>

<!-- Add toggle button -->
<div id="gallery1-container" class="text-center mt-3">
  <button class="toggle-button btn btn-primary btn-sm" data-gallery="gallery1" data-toggled="false">Show Predictions</button>
</div>

<!-- Add common caption -->
<div class="gallery-caption text-center mt-3">
  <p style="font-size: 12px; color: #555;">
    The above images shows the prediction capabilities of OpenWildlife across diverse terrain and species.In some cases, the model produces additional bounding boxes, which appear valid and may highlight potential labeling errors in the dataset. Click on individual images to zoom in. Use the toggle button to switch between predictions and original images. Box color coding; TP: <span style="color: green;">Green</span>, FP: <span style="color: red;">Red</span>, FN: <span style="color: blue;">Blue</span>.
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

#### Caption generation


<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/rich_annotation.png' | relative_url }}" alt="Example of rich annotation" data-title="Example of rich annotation" class="img-fluid rounded z-depth-1" style="width: 40%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
  Example of rich annotation in general computer vision datasets.
</p>
</div>

In general computer vision there are datasets like O365, GOLD and V3Det which have rich semantic annotation for each image. An example of such rich annotation is shown in the figure below. However in aerial images of animal, obtaining such rich annotation is difficult and laborious. To circumvent that, we leverage the world knowledge acquired by LLMs. Specifically, we use OpenAI’s GPT-4o-mini, Batch API to generate a caption for our image with three components: a general description of the dataset, visual description of the animal present and details about their habitat and population density. These captions provides the necessary context that will help improve the prediction performance.

An example of such annotation for aerial imagery is shown in below figure.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/140803_Cam2_00456.png' | relative_url }}" alt="Example of rich annotation" data-title="Example of rich annotation" class="img-fluid rounded z-depth-1" style="width: 60%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
  Generated Caption: An aerial view over Cumberland Sound Bay, Nunavut, in 2014. Possible species
present include beluga whales. Beluga whales are easily recognizable by their white
coloration and rounded foreheads, often referred to as ”canaries of the sea” due to
their vocalizations. These social species tend to form pods, with population densities
often ranging from a few individuals to several dozen in a given area, especially in
feeding grounds.
</p>
</div>


#### Result

The table below presents the mAP50 performance of the OpenWildlife model across various datasets during open-set continuous fine-tuning. In this setup, the model has been exposed to the domain and species during training but is evaluated on a separate, held-out test dataset to assess its performance.

<div class="table2-container">
<table border="1" style="border-collapse: collapse; text-align: center;">
    <thead>
        <tr>
            <th>Dataset</th>
            <th>Literature Results</th>
            <th colspan="2">OW Keyword</th>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th>Lit. Metric</th>
            <th>mAP50</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Michigan</td>
            <td>0.73 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.83 F1</td>
            <td>0.831</td>
        </tr>
        <tr>
            <td>IndOcean</td>
            <td>0.76 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.81 F1</td>
            <td>0.845</td>
        </tr>
        <tr>
            <td>NewMex</td>
            <td>0.76 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.80 F1</td>
            <td>0.712</td>
        </tr>
        <tr>
            <td>Palmyra</td>
            <td>0.80 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.68 F1</td>
            <td>0.709</td>
        </tr>
        <tr>
            <td>Pfeifer</td>
            <td>0.66 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.86 F1</td>
            <td>0.848</td>
        </tr>
        <tr>
            <td>Seabird</td>
            <td>0.69 F1 <a href="https://www.biorxiv.org/content/10.1101/2021.08.05.455311v1.full" target="_blank">[70]</a></td>
            <td>0.93 F1</td>
            <td>0.957</td>
        </tr>
        <tr>
            <td>WAfrica</td>
            <td>0.62 F1 <a href="https://zslpublications.onlinelibrary.wiley.com/doi/full/10.1002/rse2.200" target="_blank">[33]</a></td>
            <td>0.63 F1</td>
            <td>0.544</td>
        </tr>
        <tr>
            <td>Turtle</td>
            <td>0.27 F1 <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13132" target="_blank">[21]</a></td>
            <td>0.38 F1</td>
            <td>0.247</td>
        </tr>
        <tr>
            <td>ArctSeal</td>
            <td>0.87 F1 <a href="https://hub.arcgis.com/content/bb05ab8f3b7c4ec79eca613c9273ef6f/about" target="_blank">[19]</a></td>
            <td>0.87 F1</td>
            <td>0.921</td>
        </tr>
        <tr>
            <td>Han</td>
            <td>0.89 mAP50 <a href="https://link.springer.com/article/10.1007/s41095-019-0132-5" target="_blank">[24]</a></td>
            <td>0.97 mAP50</td>
            <td>0.969</td>
        </tr>
        <tr>
            <td>WAID</td>
            <td>0.98 mAP50 <a href="https://www.mdpi.com/2076-3417/13/18/10397" target="_blank">[46]</a></td>
            <td>0.98 mAP50</td>
            <td>0.981</td>
        </tr>
        <tr>
            <td>Kenya</td>
            <td>0.77 mAP30 <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.13277" target="_blank">[15]</a></td>
            <td>0.86 mAP30</td>
            <td>0.849</td>
        </tr>
        <tr>
            <td>AED</td>
            <td>0.89 mAP † <a href="https://openaccess.thecvf.com/content_CVPRW_2019/html/DOAI/Naude_The_Aerial_Elephant_Dataset_A_New_Public_Benchmark_for_Aerial_CVPRW_2019_paper.html" target="_blank">[47]</a></td>
            <td>0.90 mAP †</td>
            <td>0.856</td>
        </tr>
        <tr>
            <td>Sea Lion</td>
            <td>10.86 RMSE <a href="https://www.kaggle.com/competitions/noaa-fisheries-steller-sea-lion-population-count/leaderboard" target="_blank">[29]</a></td>
            <td>10.84 RMSE</td>
            <td>0.705</td>
        </tr>
        <tr>
            <td>Penguin</td>
            <td>39.4 RMSE <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.9903" target="_blank">[55]</a></td>
            <td>365.68 RMSE</td>
            <td>0.404</td>
        </tr>
        <tr>
            <td>Izembek<a href="https://wildlife.onlinelibrary.wiley.com/doi/full/10.1002/wsb.1407" target="_blank">[71]</a></td>
            <td></td>
            <td>-</td>
            <td>0.391</td>
        </tr>
        <tr>
            <td>DFOW14</td>
            <td>-</td>
            <td>-</td>
            <td>0.761</td>
        </tr>
        <tr>
            <td>DFOW15</td>
            <td>-</td>
            <td>-</td>
            <td>0.791</td>
        </tr>
        <tr>
            <td>DFOW16</td>
            <td>-</td>
            <td>-</td>
            <td>0.750</td>
        </tr>
    </tbody>
</table>
</div>

<div class="caption">
<p style="font-size: 12px; color: #555;">
    Results of open-set continuous fine-tuning. <strong>Bold</strong> numbers
    denote the best metric between literature results and OW Keyword results. Results
    marked with † indicate a 200-pixel Chebyshev distance allowance to be considered a true positive.
</p>
</div>

The primary objective of the OpenWildlife architecture is to develop an open-vocabulary model capable of detecting any species across any domain. To evaluate its effectiveness, we test the model's performance on six datasets in a complete zero-shot setting.

The table below highlights the performance metrics in this zero-shot scenario:

<div class="table2-container">
<table>
        <thead>
            <tr>
                <th rowspan="2">Dataset</th>
                <th colspan="2">Zero-shot (mAP50)</th>
                <th colspan="1">Fine-tuned (mAP50)</th>
            </tr>
            <tr>
                <th>Keyword</th>
                <th>Sentence</th>
                <th>Keyword</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Penguins [41]</td>
                <td>0.040</td>
                <td><strong>0.796</strong></td>
                <td>0.899</td>
            </tr>
            <tr>
                <td>DFOW17</td>
                <td>0.766</td>
                <td><strong>0.812</strong></td>
                <td>0.850</td>
            </tr>
            <tr>
                <td>DFOW23</td>
                <td>0.265</td>
                <td><strong>0.319</strong></td>
                <td>0.431</td>
            </tr>
            <tr>
                <td>Polar Bear [8]</td>
                <td><strong>0.498</strong></td>
                <td>0.297</td>
                <td>0.714</td>
            </tr>
            <tr>
                <td>SAVMAP [57]</td>
                <td><strong>0.071</strong></td>
                <td>0.002</td>
                <td>0.535</td>
            </tr>
            <tr>
                <td>Virunga-Gar. [10]</td>
                <td><strong>0.180</strong></td>
                <td>0.108</td>
                <td>0.718</td>
            </tr>
        </tbody>
</table>
</div>

#### Zero Visual results

Open Set finetuning Predictions of our model are presented in **[dataset section](#dataset)**. We present all the zero shot result in this section.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/full_zero_shot_results.png' | relative_url }}" alt="Survey location" data-title="Full zero shot predictions" class="img-fluid rounded z-depth-1" style="width: 100%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
Left: multi-species detection. Right: contrasts the performance of the OW Keyword
and OW Sentence models. TP is marked as green, FP as red, FN as blue. In some cases, grounding with descriptive sentences appears to
improve bounding box tightness and robustness to background features.
</p>
</div>

Since our model is trained using fine-semantic captions, it developed a nuanced understanding of the world. The below figures shows the prediction of the model with different captions.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/semantic_understanding.png' | relative_url }}" alt="Survey location" data-title="Full zero shot predictions" class="img-fluid rounded z-depth-1" style="width: 70%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
Zero-shot detection on Virunga-Garamba for different text prompts, where bolded text represents the class model was asked to predict. Our model exhibits semantic understanding of shape and shadows.
</p>
</div>

#### Social target Search

In the wild, animals such as lions, zebras, and whales often live in groups. Traditional aerial surveys aim to capture entire animal hotspots; however, advancements in satellite imaging resolution have made it possible to focus on smaller, targeted areas, significantly reducing costs. To capitalize on this, we propose an intelligent search strategy called Social Target Search. This method leverages the social behavior of animals and employs k-nearest neighbors and breadth-first search algorithms to selectively sample images or areas with a high probability of containing animals. The approach is using the prior information that 'if an animal is detected in one image, there is a strong likelihood of finding more animals in neighboring images.'

Among the datasets used, only the in-house DFO whale dataset includes georeferencing. Other publicly available datasets lacked georeferencing, maybe to protect the species. To evaluate our Social Target Search method, we utilized whale survey data collected by DFO in three different years.

Below gif shows the images explored at various steps using our Social Target search method.

<div style="display: flex; justify-content: center; gap: 20px;">
  <div style="text-align: center; width: 30%;">
    <img src="{{ 'assets/img/project4/Search_method_2014.gif' | relative_url }}" alt="GIF 1" style="width: 100%; border: 1px solid #ddd; border-radius: 5px;">
    <p style="margin-top: 5px; font-size: 14px; color: #555;">DFO Beluga 2014</p>
  </div>
  <div style="text-align: center; width: 30%;">
    <img src="{{ 'assets/img/project4/Search_method_2016.gif' | relative_url }}" alt="GIF 2" style="width: 100%; border: 1px solid #ddd; border-radius: 5px;">
    <p style="margin-top: 5px; font-size: 14px; color: #555;">DFO Narwhal 2016</p>
  </div>
  <div style="text-align: center; width: 30%;">
    <img src="{{ 'assets/img/project4/Search_method_2017.gif' | relative_url }}" alt="GIF 3" style="width: 120%; border: 1px solid #ddd; border-radius: 5px;">
    <p style="margin-top: 5px; font-size: 14px; color: #555;">DFO Beluga 2017</p>
  </div>
</div>

<table border="1" style="border-collapse: collapse; text-align: center; width: 100%;">
    <thead>
        <tr>
            <th>Dataset</th>
            <th>% Images Analyzed</th>
            <th>% Explored Images Containing Whales</th>
            <th>% Whales Detected</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>DFOW14</td>
            <td>32.3 ± 11.2</td>
            <td>96.3 ± 0.6</td>
            <td>98.7 ± 0.4</td>
        </tr>
        <tr>
            <td>DFOW16</td>
            <td>56.8 ± 14.5</td>
            <td>95.0 ± 5.0</td>
            <td>97.5 ± 3.0</td>
        </tr>
        <tr>
            <td>DFOW17</td>
            <td>56.9 ± 8.6</td>
            <td>95.2 ± 0.5</td>
            <td>98.7 ± 1.0</td>
        </tr>
    </tbody>
</table>
<div class="caption">
<p style="font-size: 12px; color: #555;">
Results of the STS algorithm using the ground truth annotations as predictions. From left to right, the metrics represent:
the proportion of images explored relative to the total dataset size(lower percentage is preferable), the proportion of explored images
containing whales relative to the total number of whale-containing images in the dataset, and the detection rate of whales.
</p>
</div>

The below figure shows the location of all the images and the particular images explored by our search algorithm.

<div class="project-gallery row text-center">
    <div class="col-sm mt-3 mt-md-0">
        <img src="{{ 'assets/img/project4/before_after.png' | relative_url }}" alt="Survey location" data-title="Full zero shot predictions" class="img-fluid rounded z-depth-1" style="width: 70%; height: auto;">
    </div>
</div>
<div class="caption">
<p style="font-size: 12px; color: #555;">
Top row: Location of all images in the datasets. Red dots indicate images with at least one annotated whale, green dots indicate
images with no whales annotated. Note the clustering of whale-positive images. Bottom row: Location of the images explored by the STS
algorithm. Observe the reduction in images searched.
</p>
</div>

In the results above, ground-truth annotations were used to evaluate STS. For real-world applicability, we propose using the OpenWildlife model to provide annotations for the sampled images instead of relying on ground-truth data. We did not train the OpenWildlife model on the DFO Whale 2017 dataset. Now we use OpenWildlife model with Social target search to determine the locations of whale in the entire dataset.

Below table shows the result of social target search. Our search method finds 80% of total whales while exploring only 33% of the total images.

<div class="table2-container">
<table border="1" style="border-collapse: collapse; text-align: center; width: 100%;">
    <thead>
        <tr>
            <th>OW Model</th>
            <th>% Images Analyzed</th>
            <th>% Images Containing Whales</th>
            <th>% Whales Detected</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sentence</td>
            <td>33.2 ± 5.9</td>
            <td>43.2 ± 0.3</td>
            <td>79.6 ± 1.2</td>
        </tr>
        <tr>
            <td>Keyword</td>
            <td>29.5 ± 8.1</td>
            <td>38.0 ± 3.4</td>
            <td>65.7 ± 3.8</td>
        </tr>
    </tbody>
</table>
</div>

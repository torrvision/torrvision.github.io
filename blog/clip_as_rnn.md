---
layout: blog
title: "CLIP as RNN: Segment Countless Visual Concepts without Training Endeavor"
header:
    image_fullwidth: 
permalink: "/clip_as_rnn/"
pub_title: 'CLIP as RNN: Segment Countless Visual Concepts without Training Endeavor'
authors:
    - name: 'Shuyang Sun'
      affiliation_id: '1, 2*'
      homepage: 'https://kevin-ssy.github.io/'
    - name: 'Runjia Li'
      affiliation_id: '1*'
      homepage: 'https://www.linkedin.com/in/runjiali-b169451a9/'
    - name: 'Philip Torr'
      affiliation_id: '1'
      homepage: 'https://eng.ox.ac.uk/people/philip-torr/'
    - name: 'Xiuye Gu'
      affiliation_id: '2'
      homepage: 'https://laoreja.github.io/'
    - name: 'Siyang Li'
      affiliation_id: '2'
      homepage: 'https://siyangl.github.io/'
affiliations:
    - name: 'University of Oxford'
      id: '1'
    - name: 'Google Research'
      id: '2'
    - name: 'Equal Contribution'
      id: '*'
links:
    - name: 'Demo'
      link: ''
    - name: 'Code (under review)'
      link: ''
    - name: 'PDF'
      link: ''
---

## TL;DR
We proposed a framework that can segment countless visual concepts without any training endeavor. 
Our method outperforms not only the training-free counterparts, but also those fine-tuned with millions of additional data samples, and sets new state-of-the-art records for both zero-shot semantic and referring image segmentation tasks.

<img src="../images/images_for_pub/clip_as_rnn_teaser.png" style="width: 100%" > 

## Abstract

Existing open-vocabulary image segmentation methods require a fine-tuning step on mask annotations and/or image-text datasets. Mask labels are labor-intensive, which limits the number of categories in segmentation datasets. As a result, the open-vocabulary capacity of pre-trained VLMs is severely reduced after fine-tuning. However, without fine-tuning, VLMs trained under weak image-text supervision tend to make suboptimal mask predictions when there are text queries referring to non-existing concepts in the image.
To alleviate these issues, we introduce a novel recurrent framework that progressively filters out irrelevant texts and enhances mask quality without training efforts. The recurrent unit is a two-stage segmenter built upon a VLM with frozen weights. Thus, our model retains the VLM's broad vocabulary space and strengthens its segmentation capability.
Experimental results show that our method outperforms not only the training-free counterparts, but also those fine-tuned with millions of additional data samples, and sets new state-of-the-art records for both zero-shot semantic and referring image segmentation tasks. Specifically, we improve the current record by 28.8, 16.0, and 6.9 mIoU on Pascal VOC, COCO Object, and Pascal Context. Code and a web-demo will be available for reproduction.

## Method

<img src="../images/images_for_pub/car_method.png" style="width: 100%" > 

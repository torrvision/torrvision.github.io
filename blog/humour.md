---
layout: blog
title: "Oxford Humour Image Captions (OxfordHIC)"
header:
    image_fullwidth: 
permalink: "/oxfordhic/"
pub_title: 'OxfordHIC: Can Machine Make Humorous Captions from Images?'
authors:
    - name: 'Runjia Li'
      affiliation_id: '1*'
      homepage: 'https://www.linkedin.com/in/runjiali-b169451a9/'
    - name: 'Shuyang Sun'
      affiliation_id: '1*'
      homepage: 'https://kevin-ssy.github.io/'
    - name: 'Mohamed Elhoseiny'
      affiliation_id: '2'
      homepage: 'https://www.mohamed-elhoseiny.com/'
    - name: 'Philip Torr'
      affiliation_id: '1'
      homepage: 'https://eng.ox.ac.uk/people/philip-torr/'
affiliations:
    - name: 'University of Oxford'
      id: '1'
    - name: 'KAUST'
      id: '2'
    - name: 'Equal Contribution'
      id: '*'
links:
    - name: 'Code'
      link: ''
    - name: 'PDF'
      link: ''
    - name: 'Demo'
      link: ''
---

<table>
  <tr>
    <td> <img src="../images/images_for_pub/racoon_demo_video.gif"  alt="1" style="width: 100%" > </td>

    <td> <img src="../images/images_for_pub/monkey_demo_video.gif" alt="2" style="width: 100%" > </td>

    <td> <img src="../images/images_for_pub/teddy_demo_video.gif" alt="right" style="width: 100%" > </td>
  </tr>
</table>

## Abstract

This paper presents Oxford Humour Image Captions (OxfordHIC), a large-scale dataset for humour generation and understanding. Humour is an abstract, subjective, and context-dependent cognitive construct involving several cognitive factors, making it a challenging task to generate and interpret. Hence, humour generation and understanding can serve as a new task for evaluating the ability of deep-learning methods to process abstract and subjective information. Due to the scarcity of data, humour-related generation tasks such as captioning remain under-explored. To address this gap, OxfordHIC offers approximately 2.9M image-text pairs with humour scores to train a generalizable humour captioning model. Contrary to existing captioning datasets, OxfordHIC features a wide range of emotional and semantic diversity resulting in out-of-context examples that are particularly conducive to generating humour. Moreover, OxfordHIC is curated devoid of offensive content. We also show how OxfordHIC can be leveraged for evaluating the humour of a generated text. Through explainability analysis of the trained models, we identify the visual and linguistic cues influential for evoking humour prediction (and generation). We observe qualitatively that these cues are aligned with the benign violation theory of humour in cognitive psychology.

## Citation

```
@inproceedings{oxfordhic,
  title={OxfordHIC: Can Machine Make Humorous Captions from Images?},
  author={Li, Runjia and Sun, Shuyang and Elhoseiny, Mohamed and Torr, Philip},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  year={2023}
}
```

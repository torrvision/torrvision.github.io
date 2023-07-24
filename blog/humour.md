---
layout: blog
title: "OxfordTVG Humour Image Captions (OxfordTVG-HIC)"
header:
    image_fullwidth: 
permalink: "/tvghic/"
pub_title: 'OxfordTVG-HIC: Can Machine Make Humorous Captions from Images?'
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
    - name: 'Data'
      link: 'https://drive.google.com/drive/folders/1BDuUcMeaWrFD8TwgHLhFPkuAwmoHaVNQ'
    - name: 'Code'
      link: 'https://github.com/runjiali-rl/Oxford_HIC'
    - name: 'PDF'
      link: 'https://arxiv.org/pdf/2307.11636.pdf'
---

## Demos

<table>
  <tr>
    <td> <img src="../images/images_for_pub/rakoon_demo_video_fast.gif"  alt="1" style="width: 100%" > </td>   
  </tr>
  <tr>
    <td> <img src="../images/images_for_pub/monkey_demo_video_fast.gif" alt="2" style="width: 100%" > </td>
  </tr>
  <tr>
    <td> <img src="../images/images_for_pub/teddy_demo_video_fast.gif" alt="right" style="width: 100%" > </td>
  </tr>
</table>

## Abstract

This paper presents OxfordTVG-Humour Image Captions (OxfordTVG-HIC), a large-scale dataset for humour generation and understanding. Humour is an abstract, subjective, and context-dependent cognitive construct involving several cognitive factors, making it a challenging task to generate and interpret. Hence, humour generation and understanding can serve as a new task for evaluating the ability of deep-learning methods to process abstract and subjective information. Due to the scarcity of data, humour-related generation tasks such as captioning remain under-explored. To address this gap, OxfordTVG-HIC offers approximately 2.9M image-text pairs with humour scores to train a generalizable humour captioning model. Contrary to existing captioning datasets, OxfordTVG-HIC features a wide range of emotional and semantic diversity resulting in out-of-context examples that are particularly conducive to generating humour. Moreover, OxfordTVG-HIC is curated devoid of offensive content. We also show how OxfordHIC can be leveraged for evaluating the humour of a generated text. Through explainability analysis of the trained models, we identify the visual and linguistic cues influential for evoking humour prediction (and generation). We observe qualitatively that these cues are aligned with the benign violation theory of humour in cognitive psychology.

## Citation

```
@inproceedings{oxfordtvg_hic,
  title={OxfordTVG-HIC: Can Machine Make Humorous Captions from Images?},
  author={Li, Runjia and Sun, Shuyang and Elhoseiny, Mohamed and Torr, Philip},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  year={2023}
}
```

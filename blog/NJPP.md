---
layout: blog
title: "Not Just Pretty Pictures: Toward Interventional Data Augmentation Using Text-to-Image Generators"
header:
    image_fullwidth: 
permalink: "/njpp/"
pub_title: 'Not Just Pretty Pictures: Toward Interventional Data Augmentation Using Text-to-Image Generators'
authors:
    - name: 'Jianhao Yuan'
      affiliation_id: '1*'
      homepage: 'https://yuanjianhao508.github.io/'
    - name: 'Francesco Pinto'
      affiliation_id: '1*'
      homepage: 'https://scholar.google.com/citations?user=rqAdo2MAAAAJ&hl=en'
    - name: 'Adam Davies'
      affiliation_id: '2*'
      homepage: 'https://ahdavies6.github.io/'
    - name: 'Philip Torr'
      affiliation_id: '1'
      homepage: 'https://eng.ox.ac.uk/people/philip-torr/'
affiliations:
    - name: 'University of Oxford'
      id: '1'
    - name: 'University of Illinois Urbana-Champaign'
      id: '2'
    - name: 'Equal Contribution'
      id: '*'
links:
    - name: 'Code'
      link: 'https://github.com/YuanJianhao508/NotJustPrettyPictures'
    - name: 'PDF'
      link: 'https://arxiv.org/abs/2212.11237'
---

## Demos
<table>
  <tr>
    <td> <img src="../images/images_for_pub/njpp_1.jpg"  alt="1" style="width: 100%" > </td>   
  </tr>
  <tr>
    <td> <img src="../images/images_for_pub/njpp_2.png"  alt="1" style="width: 100%" > </td>   
  </tr>
    <tr>
    <td> <img src="../images/images_for_pub/njpp_3.png"  alt="1" style="width: 100%" > </td>   
  </tr>
</table>


## Abstract

Neural image classifiers are known to undergo severe performance degradation when exposed to inputs that exhibit covariate shifts with respect to the training distribution. A general interventional data augmentation (IDA) mechanism that simulates arbitrary interventions over spurious variables has often been conjectured as a theoretical solution to this problem and approximated to varying degrees of success. In this work, we study how well modern Text-to-Image (T2I) generators and associated image editing techniques can solve the problem of IDA. We experiment across a diverse collection of benchmarks in domain generalization, ablating across key dimensions of T2I generation, including interventional prompts, conditioning mechanisms, and post-hoc filtering, showing that it substantially outperforms previously state-of-the-art image augmentation techniques independently of how each dimension is configured. We discuss the comparative advantages of using T2I for image editing versus synthesis, also finding that a simple retrieval baseline presents a surprisingly effective alternative, which raises interesting questions about how generative models should be evaluated in the context of domain generalization.

## Citation

```
@inproceedings{
yuan2024not,
title={Not Just Pretty Pictures: Toward Interventional Data Augmentation Using Text-to-Image Generators},
author={Jianhao Yuan and Francesco Pinto and Adam Davies and Philip Torr},
booktitle={Forty-first International Conference on Machine Learning},
year={2024},
url={https://openreview.net/forum?id=b89JtZj9gm}
}
```

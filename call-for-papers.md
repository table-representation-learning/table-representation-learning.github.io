---
title: Call for Papers
layout: default
---

# Call for Papers

We develop large models to "understand" images, videos and natural language that fuel many
intelligent applications from text completion to self-driving cars. But tabular data has long been
overlooked despite its dominant presence in data-intensive systems. The majority (67%) of datasets
in Google Dataset Search, for example, contain typical tabular file formats like CSV and XLS.
Similarly, the top-3 most-used data management systems are all relational database management
systems (RDBMS). Besides dedicated tabular file formats and database systems, tables are widely
used for presenting data in documents, Wikipedia pages, papers, and presentations.

By learning latent representations from structured tabular data (possibly combined with other modalities
such as free-form text), pretrained table models have shown preliminary but impressive performance
for semantic parsing, question answering, table understanding, and data preparation [1,2,3,4,5,6]. Considering that such tasks share fundamental properties inherent to tables, representation
learning for tabular data is an important direction to explore further. These works also
surfaced many open challenges such as finding effective data encodings, pretraining objectives and
downstream tasks. We believe, the time has come to consider tabular data as a first-class modality for representation learning and stimulate advances in this direction.

Key questions that we aim to address in this workshop are:
- How should tabular data be encoded to make learned Table Models generalize across tasks?
- Which pre-training objectives, architectures, fine-tuning and prompting strategies, work for tabular data?
- How should the varying formats, data types, and sizes of tables be handled?
- To what extend can Language Models be adapted towards tabular data tasks and what are their limits?
- What tasks can existing Table Models accomplish well and what opportunities lie ahead?
- How do existing Table Models perform, what do they learn, where and how do they fall short?
- When and how should Table Models be updated in contexts where the underlying data source continuously evolves?

The Table Representation Learning workshop is the first workshop in this emerging research area and is centred around three main goals:

1) **Motivate tabular data as a primary modality** for representation learning and shape the area further.
2) **Showcase impactful applications of pretrained table models** and discussing future opportunities.
3) **Foster discussion and collaboration** across the machine learning, natural language processing, and data management communities.


## Scope

We invite submissions that address, but are not limited to, any of the following topics on machine learning for tabular data:
- **Representation Learning** Representation learning techniques for structured (e.g., relational databases) or semi-structured (Web tables, spreadsheet tables) tabular data. This includes developing specialized data encodings or adaptation of general-purpose ones (e.g., GPT-3) for tabular data, multimodal learning across tables, and other modalities (e.g., natural language, images, code), and relevant fine-tuning and prompting strategies.
- **Downstream Applications** Machine learning applications involving tabular data, such as data preparation (e.g. data cleaning, integration, cataloging, anomaly detection), retrieval (e.g., semantic parsing, question answering, fact-checking), information extraction, and generation (e.g., table-to-text).
- **Upstream Applications** Applications that use representation learning to optimize tabular data processing systems, such as table parsers (extracting tables from documents, spreadsheets, presentations, images), storage (e.g. compression, indexing), and querying (e.g. query plan optimization, cost estimation).
- **Industry Papers** Applications of tabular representation models in production. Challenges of maintaining and managing table representation models in a fast evolving context, e.g. data updating, error correction, monitoring.
- **New Resources** Survey papers, benchmarks and datasets for tabular representation models and their applications.
- **Others** Formalization, surveys, visions and reflections to structure and guide future research.


## Important dates
- Submission open: <s>20 August 2022</s>
- Submission deadline: <s>20 September 2022</s> <s><b>26 September 2022 15:00 GMT</b></s>
- Notifications: <s>20 October 2022</s>
- SlidesLive pre-recording talk upload (contributed and invited talks): 10 November 2022
- Poster pitch recording (2min; for submissions accepted as posters; will be published on the website): 15 November 2022
- Camera-ready paper (OpenReview): 15 November 2022
- Poster submission: 15 November 2022
- Workshop: 2 December 2022


## Submissions and camera-ready versions
The workshop will accept regular research papers and industrial papers. Submissions should follow the <a href="https://neurips.cc/Conferences/2022/PaperInformation/StyleFiles" target="blank">NeurIPS style files</a>, but can exclude the checklist. Supplementary material, if any, may be added in the main submission. <b>The footer should state "Table Representation Learning Workshop at NeurIPS 2022"</b>. Authors may choose one of the following submission types:
- Abstract: 1 page + references.
- Short paper: at most 4 pages + references.
- Regular paper: at least 6 pages and <b>at most 10 pages</b> + references.

We encourage authors to adopt an inclusive and diverse writing style. The "Diversity and Inclusion in Writing" guide provided by the <a href="https://dbdni.github.io/pages/inclusivewriting.html" target="blank">Diversity and Inclusion in Database Conferences effort</a> is a good resource.

All accepted papers, also those accepted as oral talk, are asked to present their work as posters during one of the poster sessions. Workshop posters should be printed on thin paper, not laminated and no larger than 36Wx48H inches or 90x122cm. Authors of submissions accepted as posters are also welcome to send us a recording of a 2min pitch (preferably .mp4), that will be linked on the website and YouTube channel of the workshop. Instructions for printing the poster in New Orleans can be found <a href="https://neurips.cc/FAQ/PrintPostersOnsite" target="blank">here</a> (deadline is 31 October!). You can upload the poster (PNG file at most 5120 x 2880 pixels, up to 10MB) through <a href="neurips.cc/PosterUpload">neurips.cc</a> once you are logged into your account. Posters will be assigned to one of the two sessions later.

Contributed oral talks will be asked to upload a pre-recording of their talk (12 min.). SlidesLive will reach out with instructions for the upload of the recording. The live talk including Q&A may take no longer than 15 minutes during the workshop.


## Review process

The submission should be uploaded through the <a href="https://openreview.net/group?id=NeurIPS.cc/2022/Workshop/TRL" target="blank">TRL Workshop page on OpenReview</a>. Papers will be reviewed in a single-anonymous manner. All accepted submissions will be published on the website but the workshop is non-archival. The papers and reviews are also published on OpenReview after the notification date.


## Novelty and conflicts

The workshop does not accept submissions that have previously been published at NeurIPS or other machine learning venues. However, we do welcome submissions that have been published in, for example, data management venues. We rely on OpenReview for handling conflicts. To that end, we ask authors to ensure that the conflicts in their OpenReview profile is complete with particular respect to the organization and program committees.


## References

[1] Yin, P., Neubig, G., Yih, W. T., & Riedel, S. TaBERT: Pretraining for Joint Understanding of Textual and Tabular Data. In *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 2020*.

[2] Herzig, J., Nowak, P. K., Mueller, T., Piccinno, F., & Eisenschlos, J. TaPas: Weakly Supervised Table Parsing via Pre-training. In *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 2020*.

[3] Deng, X., Sun, H., Lees, A., Wu, Y., & Yu, C. TURL: Table Understanding through Representation Learning. *Proceedings of the VLDB Endowment, 2021*.

[5] Wang, Z., Dong, H., Jia, R., Li, J., Fu, Z., Han, S., & Zhang, D. TUTA: tree-based transformers for generally structured table pre-training. *Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery & Data Mining*, 2021.

[4] Tang, N., Fan, J., Li, F., Tu, J., Du, X., Li, G., Madden, S., & Ouzzani, M. RPT: relational pre-trained transformer is almost all you need towards democratizing data preparation. *Proceedings of the VLDB Endowment*, 2021.

[6] Heidari, A., McGrath, J., Ilyas, I. F., & Rekatsinas, T. HoloDetect: Few-shot learning for error detection. *Proceedings of the 2019 International Conference on Management of Data*, 2019.

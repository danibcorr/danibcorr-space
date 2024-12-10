---
title: Deep Multi Task y Meta Learning
authors: daniel
tags: [deeplearning]
---

Here I try to have an overview of the use and applications of *Deep Multi Task and Meta Learning*, from the course of [Standford](https://youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI&si=TXQ-EA7J7sAwfKEQ). 

<!-- truncate -->

## 1. Definitions

### 1.1 Multi-Task Learning

**Multi-Task Learning (MTL)** refers to the ability of a model to perform multiple related tasks simultaneously, using a shared structure that allows parameters and outputs to be adapted according to the environment. 

This approach seeks to optimize resources and improve the model's generalization capacity in dynamic scenarios, transferring knowledge between tasks and minimizing the need for specific adjustments. An example of an application is reinforcement learning.

### 1.2 Meta-Learning

**Meta-Learning** focuses on providing models with the ability to identify and take advantage of underlying patterns in data, allowing them to quickly adapt to new problems or environments with minimal information. 

This approach is particularly useful in scenarios with limited or expensive data to obtain, such as those involving privacy issues. By improving generalization capacity, models are more robust and efficient, optimizing resources and offering better results in varied tasks.

It is therefore ideal for datasets where the proportion of labeled data is significantly lower than that of unlabeled data. Using the *Meta-Learning* paradigm allows to extract patterns from labeled data and apply them to unlabeled data, detecting variations and changes in distributions.

## 2. Parameters in Multi-Task Learning

When developing models for *multi-task learning*, it is crucial to define certain parameters:

- **Learnable parameters, $\theta$**: Represents all the parameters that the model can learn.
- **Function, $f_\theta(y|x)$**: Describes the parameterized model $\theta$, generating a probability distribution for $y$ given $x$.
- **Task, $T_i$**: Defined as $T_i = \{p_i(x), p_i(y|x), L_i\}$, where:
- $p_i(x)$: Input distribution $x$ specific to task $T_i$.
- $p_i(y|x)$: Probability distribution of output $y$ given $x$ for task $T_i$.
- $L_i$: Loss function associated with task $T_i$.

The overall objective is to minimize the total loss of the model across all tasks. This can be formulated as

$$
\min_{\theta} \sum_{i=1}^{T} L_i(\theta, D_i),
$$

where $D_i$ is the dataset for task $i$. In addition, to adjust the relevance of each task, a weight $w_i$ can be included

$$
\min_{\theta} \sum_{i=1}^{T} w_i \cdot L_i(\theta, D_i).
$$

### 2.1 Strategies for Multi-Tasking

The main strategies for tackling multiple tasks include:

1. **Task-specific models**: This approach is not scalable due to the high computational cost.
2. **Use of conditional embeddings**: Techniques that combine information by means of:
- **Concatenation or summation of embeddings***: Equivalent methods that combine features.
- **Multi-head systems***: A single model with multiple outputs, efficient for varied tasks. An advanced example is the ***Multi-Gate Mixture of Experts***.
- **Multiplicative conditionals**: Adjust embeddings by multiplicative factors depending on the task.

## 3. Meta-Learning

### 3.1. Contrastive Learning

Contrastive Learning is a technique that, although not exactly the same as meta-learning, contributes to the improvement of representations in deep learning models. Its main objective is to group similar data representations and to distance those that belong to different classes in the embedded space of the model.

For example, in computer vision applications, data transformations are used so that the model learns to recognize that certain variations do not alter the essence of the original information, improving semantic understanding and making the model robust against out-of-distribution data.

#### 3.1.1. Contrastive training process

The contrastive training process is a key methodology to obtain effective and discriminative representations from unlabeled data. This approach involves several essential stages that, together with fine-tuning and transfer learning techniques, optimize the performance of the model. 

1. The first step is to **obtain an unlabeled dataset**, which provides the basis on which the model will automatically learn the most relevant features. 

2. Next, the **embedding generation** is carried out. Here, a pre-trained model is used, such as a deep neural network previously fine-tuned on general tasks with large amounts of data, for example, ResNet in the field of computer vision. This pre-trained model helps transform the input data into lower-dimensional representations that capture the most important features of the original data, making it easier to study. 

3. The **fine-tuning optimization** phase is crucial to refine the representations. The goal is to fine-tune the model parameters using methods for calculating distances between *embeddings*, such as **Euclidean distance** or **cosine similarity**. The idea is to minimize the **contrastive loss**, which seeks to maximize the closeness of similar data representations while simultaneously increasing the separation of dissimilar data representations. This is achieved by using specific loss functions, such as **Triplet Loss**, which optimizes the distance between an anchor, a positive pair, and a negative pair; or **InfoNCE Loss**, which is especially useful in unsupervised scenarios. However, it is essential to avoid representation collapse, a problem where all embeddings become indistinguishable. To prevent this, sufficient differences between classes must be ensured.

4. After training the model, we enter the **manual iteration and fine-tuning** stage. Here, the samples with the highest losses are reviewed and, if necessary, manual labeling is performed. This further refines the model, allowing for an iterative cycle in which predictions progressively improve and the need for human intervention is reduced over time.

This fine-tuning process relies heavily on the principles of Transfer Learning, which allow knowledge from a source task $T_a$ to be reused to improve performance on a target task $T_b$. 

Instead of starting from scratch, general features already learned by the pre-trained model are leveraged, reducing the computational burden and speeding up training. Even if the data distributions of tasks $T_a$ and $T_b$ are different, these features are still valuable, as they encapsulate essential information, such as edges and textures in images or semantic relationships in textual data. 

In some cases, fine-tuning is not limited to fine-tuning only the final layer of the model. Studies such as Surgical Fine-Tuning have shown that selectively fine-tuning intermediate layers can significantly improve accuracy. 

#### 3.1.2. Contrastive Learning MethodsContrastive learning has become essential in improving representations in various domains, especially in computer vision and natural language processing. Below we detail some of the most commonly used methods.

##### Triplet Loss

**Triplet Loss** is based on three main components:

- **Anchor ($X$)**: A data sample that serves as a reference.
- **Positive pair ($X^+$)**: A sample that is similar to the anchor (belongs to the same class or is a transformed data of the anchor).
- **Negative pair ($X^-$)**: A sample that is dissimilar to the anchor (belongs to a different class).

The idea behind Triplet Loss is to minimize the distance between the anchor and the positive pair, while maximizing the distance between the anchor and the negative pair. This is mathematically defined as

$$
L = \min_{\theta}\left(\max\left(0, \text{dist}(X, X^+) - \text{dist}(X, X^-) + \text{margin}\right)\right),
$$

where:

- $\text{dist}(\cdot, \cdot)$: This is a distance function, like the **Euclidean distance** or **cosine similarity**.
- **margin**: A positive value defining how much larger the distance between the anchor and the negative pair should be compared to the distance between the anchor and the positive pair.

The loss function kicks in when $\text{dist}(X, X^+)$ is not significantly smaller than $\text{dist}(X, X^-)$ plus the margin. This margin acts as a threshold to ensure that negative pairs are adequately separated from positive pairs, preventing representations from collapsing. Without the margin, distances could converge without creating useful differences in the representations.

##### Contrastive Loss

Another key loss function in contrastive learning is **Contrastive Loss**, which is used on pairs of data (rather than triplets). Here, the goal is to minimize the distance between similar data and maximize it for dissimilar data. The formula is expressed as:

$$
L = (1 - y) \frac{1}{2} \left( \text{dist}(X_1, X_2) \right)^2 + y \frac{1}{2} \left( \max(0, m - \text{dist}(X_1, X_2)) \right)^2,
$$

where:

- $y$: It is a binary label indicating whether $X_1$ and $X_2$ are similar ($y = 0$) or different ($y = 1$).
- $m$: It is a margin that defines the minimum desired distance between dissimilar examples.
- $\text{dist}(X_1, X_2)$: It is typically the Euclidean distance.

In this method, if the examples are similar ($y = 0$), the loss is calculated as the squared distance, forcing similar points to be closer in the embedded space. On the other hand, if the examples are different ($y = 1$), the distance between them is sought to be at least equal to the margin $m$. If they are already far enough away, the loss is reduced to zero.

##### InfoNCE Loss

The **InfoNCE Loss** (*Noise-Contrastive Estimation*) is another commonly used loss function, especially in models such as **SimCLR**. This method maximizes the similarity of an anchor data with its positive pairs and minimizes the similarity with negative pairs in the same batch of data. The formula is:

$$
L = -\frac{1}{N} \sum_{i=1}^N \log \frac{\exp(\text{sim}(z_i, z_i^+)/\tau)}{\sum_{j=1}^K \exp(\text{sim}(z_i, z_j^-)/\tau)},
$$

where:

- $z_i$: It is the *embedding* of the anchor data.
- $z_i^+$: It is the *embedding* of the positive pair.
- $z_j^-$: It represents the *embeddings* of the negative pairs.
- $\text{sim}(\cdot, \cdot)$: It is a similarity function, like the scalar product or the cosine similarity.
- $\tau$: It is a temperature constant that controls the probability distribution.

**InfoNCE Loss** maximizes the probability that the anchor is close to its positive peer compared to negative peers within a batch. This encourages the model to learn meaningful and distinctive representations for different classes or categories.#### 3.1.3. Limitations of Contrastive Learning

- **Reliance on suitable transformations**: Specific techniques (such as *resizes*, *crops*, color adjustments, *CutMix*, and *MixUp*) are required to improve the robustness of the model.
- **Need for a large number of epochs**: Performance depends on the batch size and the number of iterations to obtain enough effective negative pairs.

### 3.2. Few-Shot Learning

**Few-Shot Learning (FSL)** focuses on training models that achieve high performance with a very limited number of labeled examples per class. This approach is essential in situations where data collection is complicated or expensive, such as in medical applications or where data privacy is required.

FSL is organized around two main sets:

- ***Support Set***: This is the task-specific training data set, made up of a few labeled samples that the model uses to learn to classify.
- ***Query Set***: This is the test data set used to evaluate the model's performance on the same task.

Few-shot learning is described by two important parameters:

- ***K-shot Learning***: Refers to the number $K$ of examples available per class in the *support set*. For example, in a 1-shot learning scenario, there is only one example per class, while in 5-shot learning there are five examples per class.
- ***N-way Classification***: Indicates the number $N$ of different classes in the task. For example, a 5-way classification problem involves classifying between five possible categories.

There are two types of models in this regime:

- **Non-parameterized models**: Methods such as *k-Nearest Neighbors (k-NN)* are simple and effective when little data is available. However, their effectiveness depends on having high-quality *embeddings* that represent the relationships between the data well. - **Parameterized models**: Deep neural networks or similar methods are used to generate embeddings that capture the relevant features of the data in a lower-dimensional space, reducing problems such as the curse of dimensionality. These models are trained to produce representations that are invariant to transformations and suitable for methods such as k-NN.

### 3.3. Reconstruction-based models

Reconstruction-based models, such as Autoencoders, are used to learn compact representations of the data by reconstructing the original inputs from a compressed version (the embedding). However, in the context of few-shot learning, these models face significant challenges. One of the main limitations is the tendency to memorize, meaning that models may remember specific examples without adequately capturing the general features needed for generalization.

To improve the performance of autoencoders in few-shot learning, several strategies are implemented:

- **Noise introduction**: Adding noise to the input data during training (as in *Denoising Autoencoders*) forces the model to learn more robust representations, rather than memorizing specific examples.
- **Imposing sparsity**: Constraints are introduced into the compressed representation, such as imposing sparsity, so that only the most essential features are kept active. This helps prevent the model from relying on too many irrelevant details.
- **Lower-capacity decoders**: Using lower-capacity decoders forces the encoder to learn more useful representations, since the decoder cannot compensate for the lack of information by simply "remembering" specific details of the inputs.These improvements aim to make autoencoders more effective in data-limited contexts by forcing the model to generalize better and create more informative representations. However, even with these improvements, autoencoders may not be ideal for all few-shot learning applications, and more sophisticated approaches that better exploit relationships in fewer examples are often preferred.
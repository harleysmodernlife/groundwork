## How Machine Learning Works

Machine learning is the process of training mathematical models to recognize patterns from data. Understanding the actual process — not just the marketing language — helps you use ML tools intelligently and know their limits.

---

## Training Data: The Foundation

A machine learning model learns from examples. The quality, quantity, and representativeness of training data largely determines what the model can do.

**Supervised learning:** The most common type. Each training example has an input and a labeled output.

- Image classification: 50,000 photos each labeled with what's in them ("cat," "dog," "car")
- Spam filtering: 100,000 emails labeled "spam" or "not spam"
- Price prediction: 500,000 house sales records with price, location, size, features

The model learns to map inputs to outputs by seeing many examples.

**Unsupervised learning:** No labels. The model finds structure in the data itself.

- Clustering: group customers into segments based on purchasing behavior — without telling the algorithm how many groups or what they are
- Dimensionality reduction: find the most important underlying patterns in high-dimensional data
- Anomaly detection: learn what "normal" looks like, then flag outliers

**Reinforcement learning:** No labeled data. An agent takes actions in an environment and receives rewards or penalties. The agent learns to maximize cumulative reward.

- Training a game-playing AI: reward for winning, penalty for losing
- Training a robot: reward for successful task completion

---

## The Model

A model is a mathematical function. At its simplest: takes inputs, applies operations, produces an output. The "learning" is adjusting the model's internal parameters until the outputs are accurate.

**Parameters:** Numbers inside the model that determine its behavior. A simple model might have hundreds. A large language model has billions. These parameters are adjusted during training.

**Neural networks:** The dominant architecture in modern deep learning. Loosely inspired by biological neurons, they're layers of mathematical operations (linear transformations followed by nonlinear activation functions) stacked together.

```
Input → Layer 1 → Layer 2 → ... → Layer N → Output
```

Each layer transforms the representation. Early layers in an image model might detect edges. Later layers detect shapes. The final layers detect objects. The model learns what to detect at each layer — you don't program it.

**"Deep" learning:** Deep = many layers. Modern neural networks have hundreds of layers. This depth allows them to learn extremely complex representations.

---

## The Training Process

1. Initialize parameters randomly
2. Feed a batch of training examples through the model (forward pass)
3. Compare the model's predictions to the correct answers — calculate loss (how wrong was the model?)
4. Calculate how much each parameter contributed to the error (backpropagation)
5. Adjust parameters in the direction that reduces the error (gradient descent)
6. Repeat with the next batch

After millions of iterations across the training data, the parameters settle into values that make the model accurate.

**Hyperparameters:** Settings you choose before training — learning rate (how big each adjustment step is), batch size, number of layers, etc. These affect how well training works and require tuning.

---

## Overfitting and Generalization

The goal isn't accuracy on training data — it's accuracy on new data. Overfitting is when a model memorizes training examples instead of learning general patterns.

A model that's overfitting scores well on training data and poorly on new data. It has "memorized" the training set.

**Preventing overfitting:**
- More diverse training data
- Regularization techniques (making the model prefer simpler solutions)
- Dropout (randomly disabling neurons during training, forcing robustness)
- Validation: holding out some data not used for training, checking performance on it during training

**The bias-variance tradeoff:** Simple models underfit (too biased — miss real patterns). Complex models overfit (too variable — capture noise). Good training finds the balance.

---

## Feature Engineering

Raw data isn't always ready for a model. Representing the data in a useful way matters enormously.

A house price model might include: square footage, number of rooms, neighborhood, age. But "neighborhood" is a category — how do you feed that to a math function? One approach: "one-hot encoding" — create a binary column for each neighborhood.

For images, deep learning largely eliminated the need for manual feature engineering. The network learns its own features. For tabular data, human judgment about what features to include and how to represent them still matters significantly.

---

## What "Accuracy" Means

"97% accuracy" sounds impressive. Whether it's good depends entirely on the problem.

For spam filtering: 97% accuracy means 3% of emails are misclassified. On 1000 emails, 30 errors. Acceptable.

For cancer detection: 97% accuracy could mean missing 3% of cancers. On 100 cancer cases, 3 missed diagnoses. Not acceptable.

Better metrics for imbalanced problems:
- **Precision:** Of all cases flagged as positive, what fraction actually are?
- **Recall:** Of all actual positives, what fraction did the model find?
- **F1 score:** Harmonic mean of precision and recall
- **AUC-ROC:** How well the model distinguishes between classes across all thresholds

Always ask: what does this accuracy number actually mean for the specific decisions being made?

---

## Inference

Training is where the model learns. Inference is using the trained model.

You don't retrain a model every time you use it. You train once (or periodically), save the parameters, and load the model for use. This is why you can use an AI system instantly — the training already happened.

---

## Why This Matters

When an AI system gets something wrong — misidentifies a face, produces an incorrect answer, makes a bad recommendation — it's usually because:
- The training data didn't include this type of case (distribution shift)
- The model overfitted to patterns that don't generalize
- The training data contained biases that the model learned
- The model was accurate on average but fails on specific edge cases

Understanding the training process explains why AI is not magic and why human oversight of AI outputs remains important.

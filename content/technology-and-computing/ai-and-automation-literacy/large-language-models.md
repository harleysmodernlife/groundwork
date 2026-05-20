## Large Language Models

Large language models (LLMs) are the AI systems behind ChatGPT, Claude, Gemini, and similar tools. They've become one of the most widely discussed technologies in decades. Understanding what they actually are — how they work, what they can do, where they fail — is increasingly important for navigating a world where they're everywhere.

---

## What an LLM Is

An LLM is a neural network trained on a massive corpus of text — billions of documents from the internet, books, code, and other sources. The model learns to predict what text comes next given what came before.

This sounds simple. What emerges from training on enormous amounts of text with an enormous number of parameters is a system that can:
- Answer questions
- Write in different styles
- Summarize documents
- Translate languages
- Generate code
- Reason through problems (or at least produce outputs that look like reasoning)

The model doesn't "know" things the way a database stores facts. It encodes statistical patterns about language and the world as represented in its training data. When it answers a question, it's generating text that is statistically likely to be a correct answer to that question, based on patterns in training.

---

## How They're Trained

**Pretraining:** The model is trained on enormous amounts of text with the objective of predicting the next token (roughly: next word fragment). This is self-supervised learning — the text itself provides the training signal. No human labels required. This is why you can train on trillions of tokens.

**Scale matters enormously.** More parameters + more data + more compute = better performance on almost every task. The improvements from scaling were surprising and non-obvious. GPT-4 has far more parameters than GPT-2 and can do things GPT-2 could not.

**Fine-tuning:** After pretraining, models are further trained on curated data for specific tasks or behaviors. ChatGPT and Claude aren't just base language models — they've been fine-tuned to be helpful assistants.

**RLHF (Reinforcement Learning from Human Feedback):** A technique where human raters evaluate model outputs, and the model is further trained to produce outputs raters prefer. This is how models like ChatGPT were aligned to be helpful, harmless, and honest.

---

## Tokens and Context Windows

LLMs don't process characters — they process **tokens**, which are roughly word fragments. "unhappy" might be one token; "pneumonia" might be two.

**Context window:** The amount of text an LLM can "see" at once. Early models had context windows of a few thousand tokens (~4-8 pages). Modern models can handle 100,000 tokens or more (~200+ pages). Everything outside the context window is not available to the model.

When you have a long conversation with an LLM, earlier parts of the conversation fall off the beginning of the context window as it fills. The model can't "remember" what you said at the start of a very long conversation.

---

## What LLMs Are Good At

- **Writing assistance:** Drafting, editing, paraphrasing, adjusting tone. This is their clearest strength.
- **Summarization:** Condensing long text into key points.
- **Brainstorming:** Generating options, variations, ideas at scale.
- **Code generation:** Writing, explaining, and debugging code.
- **Translation:** Competitive with specialized translation systems.
- **Answering factual questions:** Accurate for common, well-represented knowledge — unreliable for obscure or recent information.
- **Explaining concepts:** Often very good at explaining technical concepts in accessible terms.
- **Structured tasks with clear formats:** Filling templates, reformatting data, extraction from text.

---

## What LLMs Are Bad At

**Hallucination:** LLMs produce false information presented confidently. They may invent citations, statistics, facts, names, and dates. This is not a bug being fixed — it's an inherent property of predicting likely text. Always verify important claims from an LLM against authoritative sources.

**Reasoning:** LLMs often produce outputs that look like reasoning but fail on problems requiring genuine logical rigor, especially novel math problems. They get better at "reasoning" with scale but remain unreliable.

**Recent information:** Training data has a cutoff. LLMs don't know about events after their training cutoff unless they have web search capabilities.

**Counting and precise arithmetic:** They're surprisingly bad at counting characters, words, or objects. Arithmetic that requires precision should be verified.

**Consistency:** LLMs may answer the same question differently at different times or in different conversations. They don't maintain a persistent state.

**Self-knowledge:** LLMs often confabulate about their own capabilities and training. Don't rely on an LLM's description of itself.

---

## Prompting

How you ask an LLM determines the quality of the response. The practice of crafting effective inputs is called prompt engineering.

**Be specific.** Vague requests get vague answers. "Write me an email" → mediocre. "Write a professional but warm email to a client explaining a 2-week delay in their order due to supply chain issues. Keep it under 200 words and end with a discount offer." → much better.

**Provide context.** The model knows only what's in its training data and what you tell it. Tell it who the audience is, what the purpose is, what format you need.

**Give examples.** If you want a specific style or format, provide an example.

**Iterate.** LLMs are conversational. Ask for something, get a response, refine it. "Make it more concise." "Change the tone to be less formal." "Add a third option."

**Ask it to check its own work.** "Review that answer for errors." This sometimes — not always — catches mistakes.

---

## Limitations to Keep in Mind

- The model cannot access the internet (unless that capability is explicitly provided)
- The model doesn't know what time it is or what happened recently
- Confident tone is not evidence of accuracy
- A model agreeing with you doesn't mean you're right
- Different LLMs have different capabilities, training data, and behavioral guidelines — they're not interchangeable

---

## Who the Major LLMs Are

- **GPT-4/GPT-4o:** OpenAI, accessible via ChatGPT and the API
- **Claude:** Anthropic, accessible via Claude.ai and the API
- **Gemini:** Google, accessible via Google services and the API
- **Llama 3/4:** Meta, open-source weights — run locally or through providers
- **Mistral/Mixtral:** Mistral AI, open models

These change rapidly. New models are released frequently with different capability profiles.

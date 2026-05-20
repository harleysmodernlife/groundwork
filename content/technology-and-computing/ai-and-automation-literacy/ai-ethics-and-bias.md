## AI Ethics and Bias

AI systems make decisions that affect real people — who gets a loan, who gets hired, who is flagged for crime risk, whose medical image gets analyzed. When these systems fail or are designed poorly, the consequences are serious and often fall disproportionately on people who are already disadvantaged. Understanding AI ethics and bias isn't abstract — it's about real harms happening right now.

---

## What Bias in AI Means

Bias in AI has a specific meaning: systematic, predictable errors that affect certain groups more than others.

It's not a bug someone forgot to fix. It usually emerges from training data, design choices, and the world the data was collected from.

**An example:** A company trains a resume screening AI on 10 years of their hiring data. During those 10 years, they hired mostly men for technical roles. The AI learns that "male" traits correlate with successful hiring. It ranks men higher than equally qualified women — not because someone programmed it to discriminate, but because it learned from discriminatory historical patterns.

This is called **historical bias**: the AI learns to reproduce past discrimination because the training data reflects it.

---

## Where Bias Comes From

**Training data:** If the data used to train a model underrepresents certain groups, the model performs worse on those groups. Facial recognition systems trained mostly on light-skinned faces have significantly higher error rates on dark-skinned faces.

**Label bias:** Who labels training data and how they label it introduces bias. If human raters have biases, those biases get encoded.

**Feature selection:** Including features that correlate with protected characteristics (race, gender, religion) can produce discriminatory outcomes even if those characteristics aren't used directly. Zip code correlates with race due to housing segregation history. Using zip code in lending decisions can effectively discriminate by race.

**Feedback loops:** AI decisions change the world, and new data is collected from that changed world. A predictive policing algorithm that sends more police to certain neighborhoods creates more arrests there, which generates data that sends more police there. The bias amplifies over time.

**Measurement bias:** If the outcome you're optimizing for is measured differently for different groups, the model learns the measurement bias. Healthcare AI trained on insurance costs as a proxy for health need systematically under-allocated resources to Black patients — because at equal health need, they had lower insurance costs (a result of existing healthcare disparities).

---

## Real-World Cases

**COMPAS recidivism prediction:** A tool used to predict criminal reoffending, which influenced sentencing and parole decisions. Shown to falsely flag Black defendants as future criminals at roughly twice the rate of white defendants. The company disputed this; multiple academic groups confirmed the disparity.

**Amazon's recruiting AI:** Amazon trained a model on 10 years of successful hires. It downgraded resumes containing the word "women's" (as in "women's college") and graduates of all-women's colleges. Amazon scrapped the project when they discovered this.

**Facial recognition in law enforcement:** Multiple documented cases where facial recognition misidentified innocent people — in nearly all documented cases of wrongful arrest linked to facial recognition, the wrongfully accused were Black men.

**Healthcare resource allocation:** A widely-used commercial algorithm systematically assigned Black patients lower risk scores than equally sick white patients, resulting in less care being allocated.

---

## Fairness Is Not Simple

There's a harder problem: different mathematical definitions of "fairness" are provably incompatible with each other. You can't simultaneously satisfy all of them.

**Equal accuracy across groups:** The model makes equally correct predictions for all groups.

**Equal false positive rates:** The rate at which innocent people are flagged should be equal across groups.

**Calibration:** Among everyone given a 70% risk score, 70% actually have that risk level — across all groups.

These sound reasonable. A 2016 paper proved that when base rates differ between groups (crime rates, disease prevalence), you cannot achieve equal accuracy AND equal false positive rates AND calibration at the same time. You must choose which to optimize for, and that choice is a values decision — not a technical one.

This means AI fairness requires explicit value choices about which kind of fairness matters most in a given context. Those choices should be made transparently by humans accountable for the decision, not hidden in algorithm design.

---

## Other Ethical Concerns

**Surveillance and privacy:** AI enables surveillance at previously impossible scale. Facial recognition in public spaces, real-time behavior tracking, automated monitoring of communications. The question isn't just "is this legal" but "what kind of society do we want to live in."

**Deepfakes and synthetic media:** AI can generate convincing fake video and audio of real people saying and doing things they never said or did. Used for disinformation, fraud, and non-consensual intimate imagery. Existing law is struggling to keep up.

**Autonomous weapons:** AI-enabled weapons that can select and engage targets without human decision-making. Significant debate among experts about whether this crosses ethical lines.

**Concentration of power:** AI development is concentrated in a few large companies and wealthy nations. The benefits and harms of AI are distributed unequally, and those developing AI have disproportionate influence over its development.

**Labor displacement:** AI automates tasks that people's livelihoods depend on. The speed of this displacement and what social supports exist to help displaced workers matters enormously.

**Consent and data:** Training data often consists of content created by people who did not consent to have their work used to train commercial AI systems.

---

## What Should Be Done

**Transparency:** AI systems used in consequential decisions should be explainable. "The algorithm said so" is not sufficient when people's housing, jobs, medical care, or freedom are at stake.

**Auditing:** AI systems should be audited for disparate impact on different groups, especially before deployment in high-stakes contexts.

**Human oversight:** Consequential decisions should have meaningful human review, especially when the AI flags something negative.

**Accountability:** When AI causes harm, who is responsible? Organizations deploying AI should not be able to use algorithmic decision-making to escape accountability.

**Regulatory frameworks:** The EU's AI Act, US executive orders, and various state laws are attempting to govern high-risk AI use. Whether these regulations are adequate and how they'll be enforced is ongoing.

**Inclusive development:** Who builds AI systems influences what those systems optimize for. More diversity in AI development — by gender, race, geography, background — produces systems that better account for varied needs and perspectives.

None of these are solved problems. They're active debates requiring ongoing attention.

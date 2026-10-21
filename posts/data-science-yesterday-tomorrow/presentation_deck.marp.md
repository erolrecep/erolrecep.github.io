---
marp: true
theme: uncover
paginate: true
header: "From Yesterday to Tomorrow: Data Science & Agentic AI"
footer: "Keynote Address | Curator, awesome-datascience"
style: |
  section {
    background-color: #0f172a;
    color: #f8fafc;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    text-align: left;
    padding: 40px 60px;
  }
  h1, h2, h3 {
    color: #38bdf8;
    margin-bottom: 0.5em;
  }
  h1 { font-size: 2.1em; }
  h2 { font-size: 1.5em; color: #38bdf8; }
  h3 { font-size: 1.2em; color: #94a3b8; }
  p, li {
    font-size: 0.95em;
    line-height: 1.5;
    color: #e2e8f0;
  }
  strong { color: #f59e0b; }
  em { color: #10b981; font-style: normal; }
  code {
    background-color: #1e293b;
    color: #38bdf8;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85em;
  }
  blockquote {
    border-left: 4px solid #38bdf8;
    padding-left: 15px;
    color: #94a3b8;
    background: #1e293b;
    border-radius: 0 8px 8px 0;
  }
  .highlight-box {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 16px;
    margin-top: 15px;
  }
  .tag {
    background: #0284c7;
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.7em;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 10px;
  }
---

<!-- Slide 1: Title -->
<span class="tag">KEYNOTE PRESENTATION</span>

# From Yesterday to Tomorrow
### Data Science, Agentic AI, and the Human in the Driver's Seat

*A 15-Year Journey Across Commodity Hardware, Enterprise Scale, Supercomputing, and Foundation Models*

**Speaker:** Recep Erol, PhD in AI
*Computational Scientist for AI | Curator, `awesome-datascience`*

<!--
Speaker Note:
Welcome everyone. Today we are addressing the big question in every student and researcher's mind: Where is Data Science going in the age of Agentic AI? We'll trace 15 years of lessons to show why foundational data science plus AI is your ultimate superpower.
-->

---

<!-- Slide 2: 2010 Spark -->
<span class="tag">ACT I: THE GENESIS</span>

## 2010: The Spark & The Underpowered Laptop

* **The Emerging Stack:** Discovered NumPy, SciPy, and IPython at a local conference.
* **The Big Data Wave:** Hadoop, MapReduce, Zookeeper, and Hive were everywhere.
* **The Reality Check:** My student computer was too weak to even run the Hortonworks Sandbox VM.
* **The Pivot:** Refused to stop. Completed **10+ online MOOCs** on Coursera and Udacity.

> *"Tools and hardware change rapidly. The appetite for self-directed curiosity is your only permanent asset."*

<!--
Speaker Note:
Start with empathy. Tell the audience you were once in their exact shoes with an underpowered computer that couldn't even run the standard virtual machine. But self-directed learning bridged the gap.
-->

---

<!-- Slide 3: awesome-datascience -->
<span class="tag">ACT I: THE GENESIS</span>

## Open Source as a Global Commons: `awesome-datascience`

* **The Problem in 2013:** Tutorials, frameworks, and academic papers were scattered across the web with zero curation.
* **The Action:** Founded and curated the `awesome-datascience` repository on GitHub.
* **The Impact:** Grew into a flagship global repository with tens of thousands of stars, hundreds of contributors, and international reach.
* **Key Takeaway:** Open-source contribution turns individual curiosity into a global professional network.

<!--
Speaker Note:
Explain how curating resources not only helps the community, but establishes you as a focal point in the industry. Encourage students to start contributing early.
-->

---

<!-- Slide 4: 2012 Sexiest Job & Conway's Triad -->
<span class="tag">ACT I: THE GENESIS</span>

## 2012: The "Sexiest Job" & Drew Conway's Triad

```
            [ Hacking Skills (Code) ]
                    /\
                   /  \
 [ Math & Stats ] /____\ [ Domain Context ]
```

* **HBR Declaration (2012):** Data Science became the premier career of the 21st century.
* **The Danger Zone:** Coding without Math/Stats yields flawed models. Coding without Domain Context yields useless solutions.
* **The Timeless Rule:** Real data science has *never* been just about typing code.

<!--
Speaker Note:
Drew Conway's 2010 diagram is just as relevant today. The "Danger Zone" in 2012 was knowing just enough Python to build bad models. In 2026, the danger zone is using LLMs to build models with zero statistical grounding.
-->

---

<!-- Slide 5: Waves of Automation Panic -->
<span class="tag">ACT I: THE GENESIS</span>

## History Repeats: Waves of Automation Panic

| Wave | What Was Automated | The Fear | What Actually Happened |
| :--- | :--- | :--- | :--- |
| **2014** | Manual math loops $\rightarrow$ Scikit-Learn | *"Coding is dead"* | Productivity exploded; focus shifted to feature engineering. |
| **2018** | Grid search $\rightarrow$ Cloud AutoML | *"Modeling is dead"* | Focus shifted to data hygiene and problem formulation. |
| **2026** | Syntax & boilerplate $\rightarrow$ Agentic AI | *"Data science is dead"* | **You are promoted to Principal Investigator.** |

<!--
Speaker Note:
Reassure the room: Every 4 years, people proclaim data science is dead because routine tasks are automated. In reality, each wave removes tedious friction and elevates the cognitive demand.
-->

---

<!-- Slide 6: Networks to DBs -->
<span class="tag">ACT II: ACROSS THE STACK</span>

## Layer 1 & 2: Network Sockets to Relational Databases

* **Starting at the Wires:** Network programming projects taught me packet latency, socket communication, and concurrency.
* **Database Realities:** Moved into SQL, relational schema normalization, and data mining.
* **Foundational Lesson:** 
  > *Data does not magically appear in a pristine CSV. It originates across network boundaries and database transactions. If you ignore data provenance, you will spend your career debugging garbage.*

<!--
Speaker Note:
Explain to students why web architectures and databases matter. Understanding data ingestion prevents catastrophic upstream pipeline errors.
-->

---

<!-- Slide 7: Physical Edge & UAVs -->
<span class="tag">ACT II: ACROSS THE STACK</span>

## Layer 3: Physical Edge Systems — Computer Vision on UAVs

* **Computer Vision on Drones:** Developing real-time image processing on embedded UAV processors.
* **The Constraint:** No infinite cloud instances; strict milli-watt power budgets and tiny RAM footprints.
* **The Lesson:** 
  * Algorithmic asymptotic complexity ($O(N)$ vs $O(N^2)$) actually matters in physical hardware.
  * Real-world noise, camera vibrations, and lighting drift teach you statistical humility.

<!--
Speaker Note:
Working on edge hardware forces you to care about memory, power, and algorithmic efficiency. It strips away the illusion of infinite compute.
-->

---

<!-- Slide 8: Biomedical & Surgical Simulators -->
<span class="tag">ACT II: ACROSS THE STACK</span>

## Layer 4: High-Stakes Biomedical — Surgical Simulation

* **Medical Imaging & Telemetry:** Analyzing complex physiological data and surgical simulation test outcomes.
* **The High Stakes:** In healthcare and medical robotics, a model error is not an annoyance—it affects human lives.
* **Key Realization:**
  * High accuracy is not enough. You need **interpretability**, **calibrated confidence intervals**, and **causal validation**.

<!--
Speaker Note:
Contrast consumer recommendation algorithms (where an error just means a wrong song) with medical simulations (where an error impacts clinical outcomes). Rigor is non-negotiable.
-->

---

<!-- Slide 9: $30 Billion Problem & Walmart Patents -->
<span class="tag">ACT II: ACROSS THE STACK</span>

## Layer 5: Enterprise Impact — A $30B Problem at Walmart

* **The Challenge:** Moving from academic proofs-of-concept to planet-scale retail operations.
* **The Milestone:** Tackled a massive **\$30 Billion supply/operational challenge**, earning **two patents owned by Walmart**.
* **The Engineering Lesson:**
  * Even the most sophisticated model must align with supply chain physics and real balance-sheet ROI.
  * Business translation is as vital as algorithmic elegance.

<!--
Speaker Note:
Share the excitement of translating data science into commercial patents. Emphasize that models must produce measurable business ROI, not just academic metrics.
-->

---

<!-- Slide 10: Compounding Stack -->
<span class="tag">ACT II: ACROSS THE STACK</span>

## The Synthesis: Every Layer Compounds

```
[ Networks ] ──> [ Databases ] ──> [ Edge UAVs ] ──> [ HPC / AI ]
      │                │                 │                │
   Latency           Schemas          Hardware          Optimal
   Control          Integrity        Constraints        Scale
```

* Nothing you learn is ever wasted.
* Understanding hardware makes you a better software architect.
* Understanding data pipelines makes you a better AI researcher.

<!--
Speaker Note:
Inspire the room: Don't look down on introductory coursework or hardware courses. Every layer of computer science and statistics builds your problem-solving intuition.
-->

---

<!-- Slide 11: World of Supercomputers -->
<span class="tag">ACT III: THE SCALE FRONTIER</span>

## Entering the World of Supercomputers

* **6 Years in Academic Research:** Immersed in High-Performance Computing (HPC) and large-scale mathematical optimization.
* **The Reality of Petascale Compute:**
  * High-speed interconnects (InfiniBand)
  * Distributed parallel filesystems (Lustre/GPFS)
  * Multi-node MPI & SLURM job orchestration
* When datasets hit terabytes, naive Python loops crash. You must understand parallel computation.

<!--
Speaker Note:
Discuss the jump from local workstations to high-performance computing clusters. Supercomputing forces you to look under the hood of Python abstractions.
-->

---

<!-- Slide 12: Days to Hours -->
<span class="tag">ACT III: THE SCALE FRONTIER</span>

## Slashing Processing Time: From Days to Hours

* **The Problem:** Multi-day data processing bottlenecks stalling research cycles.
* **The Solution:** Parallel algorithmic restructuring, memory-layout optimization, and cache-friendly vectorization.
* **The Result:** Scaled terabyte-scale data pipelines from **days down to mere hours**.
* **Principle:** Brute force compute is lazy and expensive; algorithmic optimization is an enduring superpower.

<!--
Speaker Note:
Explain that throwing more cloud compute at a problem is expensive and sloppy. Profiling and algorithmic optimization will always outperform brute force.
-->

---

<!-- Slide 13: Heterogeneous Hardware -->
<span class="tag">ACT III: THE SCALE FRONTIER</span>

## Heterogeneous Computing: Balancing CPUs & GPUs

* Modern AI is fundamentally **heterogeneous**:
  * Host CPU manages orchestration and non-linear logic.
  * Device GPUs/Accelerators handle massive parallel tensor contractions.
* **The Bottleneck:** PCI-e memory bandwidth and CPU-to-GPU data transfer overhead.
* *If you don't understand hardware topology, you can't optimize modern AI systems.*

<!--
Speaker Note:
Demystify GPU computing. Most students think GPUs are just magic black boxes; understanding memory transfer bottlenecks is essential for large-scale training and inference.
-->

---

<!-- Slide 14: Green Computing -->
<span class="tag">ACT III: THE SCALE FRONTIER</span>

## Green Computing: The Energy-Efficient Computing Mandate

* **The Hidden Cost of AI:** Training frontier models consumes megawatts of power.
* **The Metric Shift:** It is no longer just *Accuracy*—it is **FLOPs per Watt**.
* Designing algorithms that maximize inference efficiency while minimizing carbon and thermal footprints is a primary frontier in modern computing.

<!--
Speaker Note:
Highlight sustainability and energy efficiency as an urgent research area where future scientists can make an enormous contribution.
-->

---

<!-- Slide 15: Workforce Development in HPC -->
<span class="tag">ACT III: THE SCALE FRONTIER</span>

## Workforce Development: Democratizing Distributed Systems

* Building advanced software is meaningless if only a handful of specialists can use it.
* Led national workforce development and training in HPC, parallel computing, and distributed data systems.
* **Our Mission:** Empowering students, domain scientists, and underrepresented researchers to wield supercomputing tools.

<!--
Speaker Note:
Reinforce your passion for education and workforce development. Moving science forward requires bringing everyone along.
-->

---

<!-- Slide 16: Parable of Alpine Pass -->
<span class="tag">ACT IV: THE DRIVER'S SEAT</span>

## The Parable: The Autonomous Supercar on the Alpine Pass

* **The Machine:** Level 4 autonomous supercar, LiDAR, dual-turbo, 0-60 in 2s.
* **The Setting:** Midnight, blizzard, black ice, zero visibility.
* **Person A (AI-Only Passenger):** Hits "Autopilot" and types: *"Drive to summit fast!"* Blind to camera sensor illusions and traction loss $\rightarrow$ **Crashes at the hairpin turn.**
* **Person B (Scientist Pilot):** Uses all modern autonomous assists, but understands traction physics, spots telemetry anomalies, overrides autopilot, and **reaches the summit.**

<!--
Speaker Note:
Deliver this story vividly! Contrast the passive passenger who trusts blindly with the trained pilot who commands the machine with deep physical understanding.
-->

---

<!-- Slide 17: Clinical Leakage Reality -->
<span class="tag">ACT IV: THE DRIVER'S SEAT</span>

## The Reality: The 99.7% Clinical Model That Kills

```
[ Clinical Records: 50,000 Patients ] ──> [ LLM Agent AutoML ]
                                                  │
                                                  ▼
                                      Reported ROC-AUC: 99.7%!
```

* **The Discovery:** Top predictive feature was `DISCH_CODE_902`.
* **The Truth:** That billing code is only entered *after* a patient achieves remission!
* **Target Leakage:** The AI didn't cure cancer; it memorized an administrative timestamp.
* **The Lesson:** An AI has no domain consciousness. Only a human in the driver's seat catches fatal flaws.

<!--
Speaker Note:
Walk through this real-world danger. Explain why target leakage is so deceptive, and why non-technical managers get fooled by high ROC-AUC scores.
-->

---

<!-- Slide 18: Why AI-Only Knowledge is Hollow -->
<span class="tag">ACT IV: THE DRIVER'S SEAT</span>

## Why "AI-Only" Knowledge is Hollow

* **Prompting is a commodity:** Anyone can ask an LLM to generate code.
* **The Hallucination Trap:** LLMs generate plausible-looking, mathematically flawed pipelines.
* **What AI Cannot Do on Its Own:**
  * Formulate an original, falsifiable scientific hypothesis
  * Identify selection bias, survivorship bias, or confounders
  * Validate causal mechanisms in real-world environments
* **The Stance:** *Prompt knowledge alone is trash. Data Science + AI is an unstoppable duo.*

<!--
Speaker Note:
Be direct and candid here. Don't pull punches: Prompt engineering without underlying math and data science is a fragile, short-lived gimmick.
-->

---

<!-- Slide 19: The Reactive Revolution - Marimo -->
<span class="tag">ACT IV: THE DRIVER'S SEAT</span>

## The Reactive Revolution: Modern Workflows with Marimo

```
[ Upstream Data Mutation ] ──> [ Automatic DAG Propagation ] ──> [ Reproducible Results ]
```

* **The Problem with Jupyter:** Non-linear execution, hidden global states, unreproducible scratchpads.
* **The Solution: [marimo.io](https://marimo.io)**
  * **Pure Reactive DAG:** When upstream cells change, downstream outputs automatically update.
  * **Git-Friendly:** Pure Python files, zero hidden states.
  * **Native AI Copilot:** AI assists within a deterministic computational graph.

<!--
Speaker Note:
Introduce Marimo as the modern replacement for legacy notebooks. Emphasize reproducibility and reactive programming as the gold standard for data science.
-->

---

<!-- Slide 20: The Dynamic Duo -->
<span class="tag">ACT IV: THE DRIVER'S SEAT</span>

## The Dynamic Duo: Data Science $\times$ Agentic AI

```
┌────────────────────────────────────────────────────────┐
│              HUMAN SCIENTIST IN DRIVER'S SEAT          │
│ • Hypotheses  • Causal DAGs  • Domain Truth  • Ethics  │
└───────────────────────────┬────────────────────────────┘
                            │ Directs & Audits
                            ▼
┌────────────────────────────────────────────────────────┐
│              AGENTIC AI ACCELERATION LAYER             │
│ • Code Synthesis  • Marimo Workflows  • Hyperparam Opt │
└────────────────────────────────────────────────────────┘
```

* **You are not being replaced.**
* You are moving from *code typist* to *Principal Investigator*.

<!--
Speaker Note:
Bring it all together: Show that AI takes care of the tedious mechanics, allowing you to focus on high-level scientific reasoning and decision-making.
-->

---

<!-- Slide 21: Future Skill Matrix -->
<span class="tag">ACT V: THE PRACTITIONER'S PLAYBOOK</span>

## The Future Skill Matrix: Where to Invest Your Time

* **Depreciating Skills (Commoditized):**
  * Memorizing syntax flags
  * Writing routine boilerplate transformations
  * Manual grid-search hyperparameter loops
* **Appreciating Skills (Irreplaceable):**
  * **Linear Algebra & Vector Geometry** (SVD, Embeddings)
  * **Causal Inference & Probability** (Counterfactuals, DAGs)
  * **Systems & Data Architecture** (SQL, Distributed Storage)
  * **Deep Domain Fluency** (Genomics, Logistics, Finance)

<!--
Speaker Note:
Give students a concrete compass for where to spend their study hours this semester. Math and causal thinking will outlast any software framework.
-->

---

<!-- Slide 22: The Living Portfolio -->
<span class="tag">ACT V: THE PRACTITIONER'S PLAYBOOK</span>

## The Living Portfolio: Beyond the Titanic Dataset

* **Stop Using Toy Datasets:** Titanic survival and Iris classification will not get you hired.
* **What Stands Out:**
  1. **Messy, Real Data:** Scrape municipal APIs, sensor logs, or scientific archives.
  2. **Interactive Live Demos:** Build reactive apps with Marimo or Streamlit.
  3. **Honest Failure Post-Mortems:** Write blog posts detailing where your model broke, how you spotted leakage, and how you fixed it.
* *Employers hire problem-solvers, not tutorial copy-pasters.*

<!--
Speaker Note:
Emphasize building public proof of capability. Real-world messy data and post-mortems prove you understand the scientific method.
-->

---

<!-- Slide 23: The Outreach Algorithm -->
<span class="tag">ACT V: THE PRACTITIONER'S PLAYBOOK</span>

## The Outreach Algorithm: High-Signal Networking

* **Engage with Preprints:** Read papers on arXiv or bioRxiv. Clone the author's GitHub repo.
* **Email with Substantive Curiosity:**
  > *"Dear Dr. [Name], I replicated your experiment on [Dataset] using a reactive Marimo notebook. I noticed an interesting edge case in convergence... Are you looking for research assistants?"*
* **Contribute to Open Source:** Submit documentation fixes, unit tests, or curated guides.
* **Result:** You bypass algorithmic job filters entirely.

<!--
Speaker Note:
Share your personal experience: Genuine, informed outreach to professors and maintainers always opens doors that traditional resume drops cannot.
-->

---

<!-- Slide 24: The Humble Truth -->
<span class="tag">ACT V: THE PRACTITIONER'S PLAYBOOK</span>

## The Humble Truth: Continuous Learning is Non-Negotiable

* I earned my **PhD in Artificial Intelligence**.
* I serve as a **Computational Scientist for AI**.
* **Yet, if I stop learning for six months, I will become obsolete.**
* Technology will never stop moving.
* Continuous learning is not a tax you pay; **it is the greatest privilege of being a scientist.**

<!--
Speaker Note:
Deliver this message with personal vulnerability and warmth. Demystify the PhD. Everyone in the room is a lifelong student.
-->

---

<!-- Slide 25: Closing & Workshop -->
<span class="tag">TAKE THE WHEEL</span>

## Take the Wheel: Drive Into Tomorrow

* **1.** Never surrender your scientific intellect to an algorithm.
* **2.** Combine foundational data science with cutting-edge AI tools.
* **3.** Stay curious, stay humble, and keep your hands on the wheel.

---

### Join Our Hands-On Workshop:
* **Interactive Notebooks & Code:** `github.com/erolrecep/from-yesterday-to-tomorrow-ds`
* **Curated Resources:** `github.com/academic/awesome-datascience`
* **Contact:** `recep.90@gmail.com` | `@erolrecep`

<!--
Speaker Note:
Thank the audience, open the floor for Q&A, and invite everyone to attend the hands-on workshop session!
-->

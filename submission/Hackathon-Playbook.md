# **Vibe Coding Hackathon Workbook**

**Objective:** Build a working MVP in 3 days using vibe coding tools

## **How to use this**

- Pick **one** product idea from the list [here](https://docs.google.com/document/d/1Q5gQ-NobVeHAqSG8OJV9LSFlkcRqJw-ph6lvFny9bT0/preview?tab=t.0#heading=h.kxomnbbk9rwv) and stick to it.

- Follow **Phase 1 → Phase 2 → Phase 3** in order.

- Use any stack: AI Studio / Bolt / Lovable / Replit / Emergent / etc.

- Focus on **one strong end-to-end flow**, not 20 scattered features.

## **[PHASE 1 - IDEATION]** 

From vague idea to sharp MVP scope

### **Step 1 - Product and user basics**

**1.1 Product one-liner**

- Product name (working):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- One-liner (For X, I am building Y so they can Z):
  
  For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, I am building \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ so they can \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_.

**1.2 Who is this for**

- Primary user role:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Where they use this (context):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Top 3 pains today:

  1.  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  2.  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  3.  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**1.3 MVP success for this hackathon**

By the end of 3 days:

- A user should be able to:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Simple success metric for the demo (one line):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 2 - Deepen the problem with 5 Whys**

**2.1 Problem statement v0**

> Problem v0:
> \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**2.2 5 Whys table**

  ------------ ---------------------------------------------- -----------------
   **Why \#**                   **Question**                   **Your answer**

       1            Why is this a problem for your user?      

       2              Why does that happen right now?         

       3        Why haven't existing tools solved this well?  

       4               Why is your user still stuck?          

       5         Why does solving this now matter for them?   
  ------------ ---------------------------------------------- -----------------

**2.3 Final problem statement**

> Final problem statement:
> \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

This is the line you reuse in prompts, PRD, and demo.

### **Step 3 - Competitor scan and AI feature analysis**

Screenshots → AI analysis → features list.

**3.1 Collect references**

Pick **2-3 products** closest to what you want to build.

- Take screenshots of key pages:

  - Pricing pages

  - Feature pages

  - Sample UI / dashboards

+:------------------:+:------------------------------:+:---------------------:+:-------------------------:+
| **Product / tool** | **Links or pages you checked** | **What they do well** | **What frustrates users** |
|                    |                                |                       |                           |
|                    |                                | **(2 points)**        | **(2 points)**            |
+--------------------+--------------------------------+-----------------------+---------------------------+
|                    |                                |                       |                           |
+--------------------+--------------------------------+-----------------------+---------------------------+
|                    |                                |                       |                           |
+--------------------+--------------------------------+-----------------------+---------------------------+
|                    |                                |                       |                           |
+--------------------+--------------------------------+-----------------------+---------------------------+

**3.2 AI feature extraction**

Paste screenshots or text into your LLM:

> "I am building a product similar to these tools: \[brief description of each\].
> Here are screenshots / notes from their feature and pricing pages.
> Extract all unique features into a table with columns:
> **Feature \| What it does \| Why users care \| Which tool(s) have it**.
> Highlight any patterns and common 'must have' features."

- Where you saved that table (doc / link / file):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Optional: Mark potential differentiators now with a ⭐ in that table.

### **Step 4 - MVP scope with MoSCoW (core vs differentiators)**

**4.1 Feature dump**

List everything from your head + AI feature table:

- \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**4.2 MoSCoW prioritisation**

Use this table and mark differentiators with a ⭐ in the name if needed.

  ------------- -------------- ---------------- --------------- -------------------- ------------------------------ ----------------------------
   **Feature**   **M (Must)**   **S (Should)**   **C (Could)**   **W (Won\'t now)**   **Differentiator? (⭐ / -)**   **Why you placed it here**
                      ☐               ☐                ☐                 ☐                                          
                      ☐               ☐                ☐                 ☐                                          
                      ☐               ☐                ☐                 ☐                                          
  ------------- -------------- ---------------- --------------- -------------------- ------------------------------ ----------------------------

Guidance:

- **Must:** Without it, product fails its main promise.

- **Should:** Strongly expected, but can live without for v1.

- **Could:** Candy. Only if time remains.

- **Won't:** Explicitly not in this 3-day build.

**4.3 Final MVP scope for the hackathon**

- Single **Must-have flow** you commit to ship:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Up to **2 Should-haves**:

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Features you **park deliberately** (for later):

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **PHASE 1 - END CHECKLIST**

- Final problem statement is clear

- Primary user and context defined

- Competitor screenshots + feature table done

- Features prioritised with MoSCoW

- One must-have flow + up to 2 should-haves locked

## **[PHASE 2 - BUILDING]**

Architecture, PRD, starting prompt, and first build

### **Step 5 - Architecture: screens, flows, data, backend**

**5.1 Big picture architecture**

- Front-end (what the user sees and clicks):
  Screens: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Back-end / automations (what runs behind the scenes):
  Workflows / services: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Data store (where data lives):
  Sheets / DB / built-in storage: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- External APIs / services (if any):
  Email / AI models / webhooks / others: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**5.2 Screens & actions table**

  --------------------- ----------------- --------------------------------------- ----------------------------------------
     **Screen name**     **Who uses it**     **Key actions (buttons / flows)**            **Data needed / shown**
   e.g. Task Dashboard   Logged-in user    Create task, update status, mark done   Task title, due date, status, assignee
                                                                                  
                                                                                  
  --------------------- ----------------- --------------------------------------- ----------------------------------------

### **Step 6 - PRD with AI**

Ask Claude to create a proper PRD.

**6.1 PRD prompt**

Use this in your LLM:

> "You are a senior product manager.
> I want to build an MVP in a no-code / vibe coding tool.
>
> Problem statement:
> \[Paste from Step 2.3\]
>
> Target user and top 3 pains:
> \[Paste from Step 1.2\].
>
> Prioritised features using MoSCoW (mark differentiators with ⭐):
> \[Paste your table\].
>
> Architecture draft:

- Front-end screens: \[list\]

- Back-end workflows / automations: \[list\]

- Data store: \[sheet / DB + important fields\]

- External services / APIs: \[list\]

> Tasks:

1.  Write a concise PRD with: Goal, Users, Scope (Must + chosen Shoulds), Out of Scope, Core user flows, Data model (main tables and fields), Non-functional constraints.

2.  Write a step-by-step build plan for a vibe coding tool."

**6.2 Capture your PRD**

- PRD location (doc / link / notes):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Two key flows to build first:

  1.  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  2.  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 7 - Platform optimisation: convert PRD into a starting prompt**

Bolt.new best practices → single starting prompt

https://support.bolt.new/building/build-your-first-app.

**7.1 Collect platform guidelines**

- Chosen tool (Bolt / Lovable / Replit / etc.):
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Link or notes from its "best practices" / docs:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**7.2 Starting prompt generator**

Use your LLM again:

> "Here is my PRD:
> \[Paste PRD\]
>
> Here are best practices / docs for \[tool name\]:
> \[Paste key points or link + summary\].
>
> Rewrite this PRD as **one single starting prompt** optimised for \[tool name\].

- Use the tool's recommended format.

- Include entities, screens, data model, and must-have flow.

- Keep it copy-paste ready for the builder."

**7.3 Final starting prompt**

- Paste your tool-specific starting prompt here or link it:
  
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 8 - Day 1 & Day 2 build execution**

**Day 1 - Outcome**

- Complete **Phase 1\**

- Complete **Steps 5, 6, 7\**

- Have a PRD + starting prompt ready

Day 1 checklist:

- Ideation done and frozen

- Architecture sketched

- PRD written

- Tool-specific starting prompt ready

**Day 2 - Build the first version**

In your chosen tool:

1.  Create a new project.

2.  Paste the starting prompt and generate the first version.

3.  Set up core data model (tables / collections / sheets).

4.  Ensure the **must-have flow** is present.

5.  If parts are missing, use **targeted prompts** to:

    - Add missing screens

    - Fix obvious UI gaps

    - Align flows with PRD

Day 2 checklist:

- Project created in tool

- First build generated from starting prompt

- Data model exists

- Must-have flow runs at least once end-to-end (even if rough)

### **OPTIONAL SECTION - GITHUB FOR BACKUP & COLLAB**

(Use only if your team wants shared code)

**Goal:\**
Keep your code in one place and let everyone update it.

This is a **simple path**: one main branch, small commits, no complex Git.

**Step G1 - One repo per team**

1.  One teammate goes to github.com → **New repository**.

2.  Name it: aiap-\<cohort\>-\<team-name\> or similar.

3.  Visibility: **Private** is fine.

4.  Click **Create repository**.

**Step G2 - Add collaborators**

1.  In the repo, go to **Settings → Collaborators**.

2.  Add your teammates by GitHub username or email.

3.  Give them **Write** access.

Now everyone can open the same repo.

**Step G3 - Simple "back code and collaborate" workflow**

Use this pattern during the hackathon:

- One person is **Code Owner** for the repo.

- Others send code snippets or files to Code Owner (from Bolt / editor export).

- Code Owner:

  1.  Pulls latest code from GitHub (if using Git) or edits in web UI.

  2.  Pastes / uploads updated files.

  3.  Clicks **Commit** with a clear message:

      - "Add itinerary screen"

      - "Fix activity edit flow"

Repeat this whenever a feature is stable.

**Team rules (keep it simple):**

- Only commit **working** code.

- One person commits at a time.

- If something breaks, Code Owner reverts last change or fixes and commits again.

- Github Guide for additional information : [GitHub Guide 101](https://docs.google.com/document/d/1t_K2KtvTRHGBxWBADKji3iu_PzObm9Iv85szdii2HT0/edit?tab=t.0#heading=h.ehfa52b0g2sl)

### **PHASE 2 - END CHECKLIST**

- Architecture clear and documented

- PRD complete

- Tool-optimised starting prompt created

- First build live with must-have flow in place

- Backup on github

## **[PHASE 3 - BACKEND, AUTOMATIONS, ITERATION & DEMO]**

Database implementation, CRUD, testing, and enhancement.

### **Step 9 - Database and CRUD**

**9.1 Data design**

- Primary entities (e.g. Tasks, Projects, Users):

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For each, define:

- Table / collection name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Fields:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**9.2 CRUD checklist**

For each core entity, check if you support:

  ------------ ------------ ----------------- ------------ ------------ ------------------
   **Entity**   **Create**   **Read / list**   **Update**   **Delete**   **Notes / gaps**

                    ☐               ☐              ☐            ☐       

                    ☐               ☐              ☐            ☐       
  ------------ ------------ ----------------- ------------ ------------ ------------------

If any box is unchecked:

- Write a prompt to your tool / LLM:
  
  
  "Enable full CRUD for \[entity\] in my app.
  Add screens / actions for \[missing operations\].
  Keep UX consistent with existing screens."

### **Step 10 - Automations and AI enhancements**

This covers things like AI Task Breakdown, notifications, etc.

**10.1 Backend & automations table**

  ----------------------------- --------------------- ------------------------------------------------------
       **Trigger (event)**       **Tool / service**                   **What should happen**
   User signs up / first login   e.g. n8n / built-in   Create user record, send welcome email, log to sheet
    User creates a main item                               Save item, optionally run AI Task Breakdown
    User completes a workflow                           Send summary email / notification / log to history
  ----------------------------- --------------------- ------------------------------------------------------

Fill this for your product:

  --------------------- -------------------- ------------------------
   **Trigger (event)**   **Tool / service**   **What should happen**

                                             

                                             

                                             
  --------------------- -------------------- ------------------------

**10.2 Optional "wow" AI feature**

Pick **one** small enhancement (example: AI Task Breakdown):

- Feature name:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- What it does in one line:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Prompt or config notes for it:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 11 - Testing and iteration loop**

test → see missing edit/delete → prompt → fix → retest.

**11.1 Scenario test script**

Define **one realistic scenario**:

> "User type \[X\] wants to \[goal\].
> They will go through: \[screen 1\] → \[screen 2\] → \[screen 3\] → done."

Describe it:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**11.2 Bug and gap log**

While testing, log issues:

  -------- ---------------------------------- --------------------------- ------------------------------- ------------------
   **\#**   **What broke / missing (issue)**   **Where (screen / flow)**   **Prompt you used to fix it**   **Fixed? (Y/N)**
     1                                                                                                    
     2                                                                                                    
     3                                                                                                    
  -------- ---------------------------------- --------------------------- ------------------------------- ------------------

Cycle:

1.  Run the scenario end-to-end.

2.  Write down each issue.

3.  Use targeted prompts to the builder to fix.

4.  Retest.

**11.3 Stability checklist**

- Must-have flow works start to finish at least twice in a row

- No obvious dead buttons or dead-end screens

- CRUD works for main entities

- Key automation(s) fire as expected

### **Step 12 - Demo and reflection**

**12.1 Demo script (3-5 mins)**

Fill this and use it as your narration:

1.  **User and problem:\**
    "Our product is for \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ who struggle with \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_."

2.  **What you built:\**
    "In 3 days, we built \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ so they can \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_."

3.  **Live walkthrough:\**

    - Start from entry point.

    - Run the **must-have flow** end-to-end.

    - Show the **one wow AI/automation detail**.

4.  **Close:\**

    - "Next, we plan to \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_."

**Demo checklist**

- Clear entry path (login or shared URL)

- Must-have flow runs live without hidden setup

- Wow feature works on demo data

**12.2 Reflection after the hackathon**

- What users / judges liked most:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- One product / design choice that worked well:
  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Top 3 issues you noticed:

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  - \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Next 7-day plan:

  - Improve stability and UX

  - Add 1--2 parked features

  - Test with 3-5 real users

  - Clean PRD and architecture for v2

## **[Resources]** 

- Pitch Deck Template: [AIAP : Pitch Deck Template](https://docs.google.com/presentation/d/12lrt7l83ZLkKuFas_X0uUOiI6rCpQPtyHdVkdw_6vjQ/edit?slide=id.g36ed19b842a_0_0#slide=id.g36ed19b842a_0_0)

- Product Ideas: [Product Ideas for Accelerator](https://docs.google.com/document/d/1Q5gQ-NobVeHAqSG8OJV9LSFlkcRqJw-ph6lvFny9bT0/preview?tab=t.0#heading=h.kxomnbbk9rwv)

- Loom for recording: [https://www.loom.com/](https://www.loom.com/)

**How to Submit Your Project**

### **Step 1: Open the Project Submission Portal**

Visit the portal below:

[AI Accelerator Hackathon Portal](https://group-allocator-app.onrender.com/?utm_source=chatgpt.com)

### **Step 2: Navigate to the Submission Page**

- Log in to the portal

- Click on the **"Submit Project"** tab at the top of the page

- Review the submission requirements listed on the page

### **Step 3: Keep These Ready Before Submitting**

Make sure you have the following:

✅ Live product link
✅ 2-3 minute Loom walkthrough video
✅ Pitch deck (using the provided template)
✅ Team details

### **Step 4: Submit Your Project**

- Click on **"Open Submission Form"**

- Fill in all the required details

- Submit the form


### **Important**

⚠️ Project submissions will be accepted **only through the Project Submission Portal**.

⚠️ Submissions shared in WhatsApp groups, emails, or any other channel will **not be considered valid**.

⚠️ Ensure all details are entered correctly before submitting, as the submitted information will be used for evaluation.

Example

# **Sample Filled Workbook**

Example Idea: **Travel Itinerary Planner**

## **PHASE 1 - IDEATION (Example)**

### **Step 1 - Product and user basics**

**1.1 Product one-liner**

- Product name:
  **TripThreads\**

- One-liner:
  **For busy young professionals, TripThreads is a simple travel planner so they can organize day-wise itineraries in one place without messy spreadsheets and notes.\**

**1.2 Who is this for**

- Primary user role:
  **25-35 year old working professional who travels 1-3 times a year.\**

- Context:
  **Plans short trips (3-7 days) with friends or partner, usually on weekends or holidays, using multiple apps and random links.\**

- Top 3 pains today:

  1.  Plans scattered across WhatsApp, screenshots, Notes, Maps.

  2.  Hard to see a clear day-wise plan and time clashes.

  3.  Last minute confusion on bookings, timings, and what is confirmed.

**1.3 MVP success for this hackathon**

By the end of 3 days:

- A user should be able to:
  **Create a trip, add day-wise activities with time and location, and view the full itinerary in one simple timeline.\**

- Simple success metric:
  **User completes one 3-day trip plan with at least 3 activities per day, without getting stuck.\**

### **Step 2 - Deepen the problem with 5 Whys**

**2.1 Problem statement v0**

> People planning trips struggle to keep their itinerary organized.

**2.2 5 Whys table (filled)**

  ------------ ---------------------------------------------- -----------------------------------------------------------------------------------------
   **Why \#**                   **Question**                                                         **Answer**
       1            Why is this a problem for your user?                     They feel stressed and confused before and during the trip.
       2              Why does that happen right now?             Information is split across chats, screenshots, booking emails, and random notes.
       3        Why haven't existing tools solved this well?   Most tools are either too complex or focused on bookings, not on simple day-wise plans.
       4               Why is your user still stuck?           Setting up existing trip planners feels heavy, so they fall back to WhatsApp and Notes.
       5         Why does solving this now matter for them?      They want stress-free trips and to feel in control without spending hours planning.
  ------------ ---------------------------------------------- -----------------------------------------------------------------------------------------

**2.3 Final problem statement**

> Busy young professionals feel stressed before trips because their plans are scattered across multiple apps, and existing tools are too heavy for quick, simple day-wise itineraries.

### **Step 3 - Competitor scan and AI feature analysis**

**3.1 Reference products**

  -------------------- ------------------------------------ ------------------------------------------------ -------------------------------------------------
   **Product / tool**       **Links / pages checked**                    **What they do well**                           **What frustrates users**
     Google Travel       Search + "Trips" itinerary pages    Auto imports bookings, shows map and day split     Not easy to manually plan custom day blocks
         TripIt         Itinerary from email confirmations     Auto-parses emails, central trip timeline      Focused on bookings, less on custom activities
    Notion templates       Free trip planning templates                Flexible, can add anything             Too manual, takes effort to set up and maintain
  -------------------- ------------------------------------ ------------------------------------------------ -------------------------------------------------

**3.2 AI feature extraction (summary)**

Example AI feature table output (compressed):

  ------------------- ------------------------------------ ----------------------------------- -----------
      **Feature**               **What it does**                   **Why users care**           **Tools**
     Trip overview      Shows trip dates and destination    Quick snapshot of the whole trip       All
   Day-wise schedule       Activities listed per day        Helps avoid clashes and confusion      All
    Booking details    Stores flights, hotels, references   One place to check confirmations       All
       Map view               Activities on a map           Understand distance between plans     Some
     Email import             Reads booking emails                 Saves manual typing           TripIt
  ------------------- ------------------------------------ ----------------------------------- -----------

Key pattern:

- Every tool has **trip overview** and **day-wise schedule**.

- Differentiators: email import, deep map integration.

- For MVP, focus on **clean day-wise planning**, not automation.

### **Step 4 - MVP scope with MoSCoW**

**4.1 Feature dump**

Raw ideas:

- Create trip with title, location, dates.

- Add days automatically between start and end dates.

- Add activities with time, title, notes, and basic location text.

- Simple day-wise list view.

- Edit and delete activities.

- Mark activities as "must do" or "optional".

- Basic AI: suggest 3 activities per day based on city and theme.

- Share read-only link of itinerary.

- Export to PDF.

- Map view with pins.

- Attach booking references (PNR, hotel confirmation).

**4.2 MoSCoW table (filled)**

  -------------------------------------------- ------- ------- ------- ------- --------------------- --------------------------------------------------
                  **Feature**                   **M**   **S**   **C**   **W**   **Differentiator?**                     **Why here**
    Create trip (title, destination, dates)       ☑       ☐       ☐       ☐             \-             Without trip object, nothing else makes sense.
   Auto-generate days between start/end dates     ☑       ☐       ☐       ☐             \-                    Core to "itinerary" experience.
      Add activities (time, title, notes)         ☑       ☐       ☐       ☐             \-                         Heart of the planner.
             View schedule day-wise               ☑       ☐       ☐       ☐             \-                     Users need a clear daily plan.
             Edit/delete activities               ☑       ☐       ☐       ☐             \-              Basic CRUD, otherwise app frustrates users.
     Mark activities as must-do / optional        ☐       ☑       ☐       ☐             \-                      Nice clarity, but not core.
      AI suggestion: 3 activities per day         ☐       ☑       ☐       ☐             ⭐             Differentiator, but secondary to base planner.
              Share read-only link                ☐       ☑       ☐       ☐             \-            People travel with others, sharing is important.
                 Export to PDF                    ☐       ☐       ☑       ☐             \-                     Nice to have for offline use.
                    Map view                      ☐       ☐       ☑       ☐             \-                 Useful, but not needed for first demo.
           Attach booking references              ☐       ☐       ☑       ☐             \-                   Useful, can come after base flow.
         Email import (auto from inbox)           ☐       ☐       ☐       ☑             \-               Heavy build, not needed for hackathon MVP.
  -------------------------------------------- ------- ------- ------- ------- --------------------- --------------------------------------------------

**4.3 Final MVP scope for the hackathon**

- **Must-have flow:\**
  User creates a trip, days auto-generate, user adds and edits activities per day, and sees a clean day-wise itinerary.

- **Should-haves (max 2):\**

  - Mark activities as must-do or optional.

  - AI suggestion that proposes 3 activities per day for a given city and theme.

- **Parked features:\**

  - Export to PDF.

  - Map view.

  - Attach booking references.

  - Email import.

## **PHASE 2 - BUILDING (Example)**

### **Step 5 - Architecture: screens, flows, data, backend**

**5.1 Big picture architecture**

- Front-end:

  - Trip list screen.

  - Trip detail screen (day-wise view).

  - Activity editor modal or page.

- Back-end / automations:

  - API to create/read/update/delete trips and activities.

  - AI endpoint to generate activity suggestions.

- Data store:

  - Supabase with tables: users, trips, days, activities.

- External services:

  - OpenAI API for activity suggestions.

**5.2 Screens & actions table**

  ------------------- ----------------- ------------------------------------------------- --------------------------------
    **Screen name**    **Who uses it**                   **Key actions**                           **Data shown**
       Trip List       Logged-in user          Create new trip, open existing trip         Trip title, destination, dates
      Trip Detail      Logged-in user         View days, add activity, edit, delete             Days with activities
    Activity Editor    Logged-in user    Add/edit time, title, notes, must/optional flag    Activity fields for one day
   AI Suggestions UI   Logged-in user     Ask AI for suggestions, accept into itinerary      Suggested activities list
  ------------------- ----------------- ------------------------------------------------- --------------------------------

### **Step 6 - PRD with AI (example output summary)**

**Goal:\**
Help busy professionals create and manage simple day-wise itineraries for trips in under 10 minutes.

**Users:\**
Primary: 25-35 year old working professionals, planning 3-7 day trips.

**Scope (M + selected S):**

- Create and manage trips with destination and dates.

- Auto-generate days for each trip.

- Add, edit, and delete activities per day.

- Mark activities as must-do or optional.

- View full itinerary in a clean day-wise layout.

- AI suggests 3 activities per day for a city and theme.

- Share read-only link of itinerary.

**Out of scope (for hackathon):**

- Map view with pins.

- Email import.

- Complex collaboration.

**Core flows:**

- Create trip → auto days → add activities.

- Edit activity.

- Delete activity.

- AI suggest → pick items → add to day.

**Data model (main entities):**

- Trip: id, user_id, title, destination, start_date, end_date.

- Day: id, trip_id, date, index.

- Activity: id, day_id, start_time, title, notes, priority, created_at.

(For the learner, the PRD comes from the actual LLM, this is just a sample.)

### **Step 7 - Platform optimisation: starting prompt for Bolt**

**Chosen tool:** Bolt + Supabase + OpenAI.

**Sample starting prompt (ready to paste into Bolt)**

> Build a responsive web app called "TripThreads" for planning travel itineraries.
> Users sign in and manage trips.
> A **Trip** has: title, destination (city name), start_date, end_date.
> When a new trip is created, auto-generate Day records for each date between start_date and end_date.
>
> Screens:

1.  Trip List: show all trips for the logged-in user in cards with title, destination, dates, and a button to open trip.

2.  Trip Detail: show the trip summary on top, and then a column for each day in order. Inside each day, show a list of activities.

3.  Activity Editor: modal or panel to add/edit an activity with fields: start_time (HH:MM), title, notes, priority (must-do or optional).

> A **Day** has: id, trip_id, date, index.
> An **Activity** has: id, day_id, start_time, title, notes, priority.
>
> Core flows:

- Create trip → auto-generate days.

- Add/edit/delete activities under each day.

- Mark priority as "must-do" or "optional".

> Add an "Ask AI for ideas" button in Trip Detail.
> When clicked, open a panel where the user enters: city, trip theme (e.g. food, culture, adventure), and day index.
> Call OpenAI API and return 3 suggested activities with title and short description.
> Let the user select suggestions to add directly as new activities on that day.
>
> Use Supabase for auth and database.
> Focus on a clean, simple layout.

### **Step 8 - Day 1 & Day 2 execution (example outcome)**

**End of Day 1 (for learner):**

- Ideation completed.

- Architecture sketched.

- PRD created in a doc.

- Starting prompt for Bolt ready.

**End of Day 2 (for learner):**

- Bolt project created.

- Supabase tables set up.

- Trip List and Trip Detail screens working.

- Can create a trip, see days, and manually add/edit/delete activities.

## **PHASE 3 - BACKEND, AUTOMATIONS, DEMO (Example)**

### **Step 9 - Database and CRUD**

**Primary entities:**

1.  trips

    - id

    - user_id

    - title

    - destination

    - start_date

    - end_date

2.  days

    - id

    - trip_id

    - date

    - index

3.  activities

    - id

    - day_id

    - start_time

    - title

    - notes

    - priority

**CRUD coverage**

  ------------ ------------ ---------- ------------ ------------ ---------------------------------
   **Entity**   **Create**   **Read**   **Update**   **Delete**              **Notes**

     trips          ☑           ☑           ☑            ☑         Done via Trip List and editor

      days          ☑           ☑           ☐            ☐        Auto-create, no edit needed now

   activities       ☑           ☑           ☑            ☑         Edit/delete from Trip Detail
  ------------ ------------ ---------- ------------ ------------ ---------------------------------

Gap identified:

- No need to edit days in MVP, so left as is.

### **Step 10 - Automations and AI enhancements**

**Backend & automations**

  ------------------------------------ -------------------- ------------------------------------------------------------------
          **Trigger (event)**           **Tool / service**                        **What should happen**
            New trip created                Bolt + DB          Insert trip, auto-generate days between start and end dates
   "Ask AI for ideas" button clicked          OpenAI         Send city, theme, and day index, get 3 suggestions, show to user
   User confirms selected suggestions       Bolt + DB          Insert each chosen suggestion as a new activity for that day
  ------------------------------------ -------------------- ------------------------------------------------------------------

**Wow AI feature (example)**

- Name: **AI Day Planner\**

- What it does: Suggests 3 activities tailored to city and theme for a chosen day.

- Prompt idea:
  
  
  "Suggest 3 short, practical activities in \[city\] for a \[theme\] trip. Each suggestion must fit into a half-day and be easy for young professionals. Return as JSON: title, short_description."

### **Step 11 - Testing and iteration loop**

**Scenario test**

> A user is planning a 4-day trip to Goa with a "chill and food" theme. They should be able to create the trip, see 4 days generated, manually add breakfast and beach slots, and then ask AI for ideas for Day 2 and add them.

**Bug/gap log (sample)**

  -------- -------------------------------------- ------------------- --------------------------------------------------------------- ------------
   **\#**                **Issue**                     **Where**                          **Prompt used to fix**                       **Fixed?**
     1         Activities not sorted by time          Trip Detail      "Sort activities in each day column by start_time ascending."       Y
     2        Priority tag not visible in list        Trip Detail            "Show priority as a colored label next to title."             Y
     3      AI suggestions panel closes on error   AI Suggestions UI    "Handle errors gracefully and show error message instead."         Y
  -------- -------------------------------------- ------------------- --------------------------------------------------------------- ------------

**Stability checklist**

- Must-have flow works twice in a row without breaking.

- Activities save correctly.

- AI suggestions add activities correctly or fail gracefully.

### **Step 12 - Demo and reflection**

**Demo script**

1.  **User and problem:\**
    "TripThreads is for busy young professionals who feel stressed planning trips because their plans are scattered across chats and notes."

2.  **What was built:\**
    "Built a simple web app where you can create a trip, generate days automatically, and plan a clean day-wise itinerary."

3.  **Live walkthrough:\**

    - Show trip creation for "Goa, 4 days".

    - Show days generated.

    - Add a few manual activities.

    - Hit "Ask AI for ideas" for Day 2, add suggestions to the itinerary.

    - Scroll the full plan.

4.  **Close:\**
    "Next step is to add map view and better sharing, but even today you can plan a full trip in under 10 minutes."

**Reflection (example)**

- What worked:

  - Users liked the clean day-wise view and AI ideas button.

- Issues:

  - Some confusion on how to edit trip dates.

- Next 7-day plan:

  - Add map view and simple sharing link.

  - Improve onboarding copy for first-time users.

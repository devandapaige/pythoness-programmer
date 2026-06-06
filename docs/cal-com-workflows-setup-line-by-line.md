# Cal.com workflows — line-by-line setup guide

Operator manual for Software Psychic session emails on [cal.com/pythoness](https://cal.com/pythoness). Work through this top to bottom once; use the master checklist at the end to confirm nothing was missed.

**Related docs**

- Event descriptions and intake questions: [`src/docs/Cal.com Events Copy Guide.md`](../src/docs/Cal.com%20Events%20Copy%20Guide.md)
- Overview (why Cal.com, not Resend): [`cal-com-client-workflows.md`](./cal-com-client-workflows.md)

**Plan note:** Custom workflows with multiple steps usually require a **paid Cal.com plan** (Team or above). Free tier is limited to a default reminder. If a control below is missing, check your plan or Cal.com’s [Workflows help](https://cal.com/help/workflows/workflowsoverview).

---

## Before you start

1. **Remove the site webhook** (if you added it during the Resend experiment):  
   Cal.com → **Settings → Developer → Webhooks** → delete  
   `https://www.pythonessprogrammer.com/api/cal/webhook`

2. **Netlify:** do **not** set `BOOKING_WEBHOOK_ENABLED=true`.

3. **Confirm event slugs** (Event Types → each event → URL slug):

   | Display name | Slug | Price |
   |--------------|------|-------|
   | 20-Minute Async Reflection | `async` | $75 |
   | 20-Minute Live Reading | `20min` | $95 |
   | 60-Minute Deep Dive | `60min` | $255 |

4. **Naming convention for workflows** (keeps the Workflows list scannable):

   `[async] 36h delivery reminder`  
   `[20min] 24h session reminder`  
   `[60min] 25d follow-up nudge`

---

## How Cal.com workflow screens map to this doc

When you click **Workflows → + New workflow** (or **Start from scratch**), you typically set:

| Cal.com UI label | What to choose |
|------------------|----------------|
| **Workflow name** | Use names from this doc (e.g. `[async] 36h delivery reminder`) |
| **Trigger** / **When this happens** | e.g. *Before the event starts*, *After the event ends*, *When a new event is booked* |
| **Timing** | e.g. *24 hours*, *1 hour*, *36 hours*, *5 days* — relative to the trigger |
| **Event types** | Select **only one** tier per workflow (`async`, `20min`, or `60min`) |
| **Action** | **Send email to attendee** (all workflows in this guide) |
| **Email subject** | Paste from each workflow block below |
| **Email body** | Paste from each workflow block below |

**Variables** Cal.com replaces automatically (use as-is):

| Variable | Meaning |
|----------|---------|
| `{EVENT_NAME}` | Event type title |
| `{EVENT_DATE}` | Date of booking |
| `{EVENT_TIME}` | Start time in attendee timezone |
| `{EVENT_END_TIME}` | End time |
| `{ATTENDEE}` | Booker name |
| `{ATTENDEE_FIRST_NAME}` | First name |
| `{LOCATION}` | Meeting link or location string |
| `{ORGANIZER}` | Your name |

If your Cal.com version uses `{EVENT_START_TIME}` instead of `{EVENT_TIME}`, substitute — the intent is the same.

---

## Part 1 — Event type messages (not Workflows)

These are **built-in** booking emails Cal.com sends at confirmation. Set them **before** building Workflows.

Repeat for **each** event type: **Event Types → [event] →** scroll to **Advanced** (or **Emails** / **Notifications**, depending on UI version).

### 1A. All three events — Advanced email toggles

For **async**, **20min**, and **60min**:

1. Open the event type.
2. Go to **Advanced**.
3. Find **Disable default confirmation emails for attendees** → leave **OFF** (guests should receive Cal.com confirmation + verification).
4. Find **Disable default confirmation emails for host** → your choice (ON if you only want booker mail in Cal.com inbox via organizer notifications; OFF is fine too).
5. **Save**.

### 1B. Async (`async`) — confirmation copy

Still on the **async** event type, find **Confirmation** / **After booking message** / **Thank you page message** (wording varies):

**Paste:**

```
You're booked for an Async Reflection. The time you selected is when you'll receive your private video—I'll email the link by then. Not a live meeting.

If you haven't already, please complete the intake so I can record your reading. Watch whenever you're ready.
```

**Save.**

### 1C. Live 20 (`20min`) — confirmation copy

**Paste:**

```
You're booked. We'll start and end with a tarot pull. Come as you are—no prep required. See you at {EVENT_TIME}.
```

**Save.**

### 1D. Deep 60 (`60min`) — confirmation copy

**Paste:**

```
You're booked for a 60-minute deep dive. We'll use tarot and reflection to unpack patterns and build a path forward—plus you have the option to book a 20-minute follow-up within 30 days. See you soon.
```

**Save.**

---

## Part 2 — Async workflows (`async`)

You will create **2 workflows** plus **1 manual process** for video delivery.

---

### Workflow ASYNC-1: 36-hour delivery reminder

1. **Workflows → + New workflow**
2. **Name:** `[async] 36h delivery reminder`
3. **Trigger:** **Before the event starts**
4. **Timing:** **36 hours** before start  
   *(If 36h is not offered, use **48 hours** — close enough.)*
5. **Event types:** select **only** `20-Minute Async Reflection` / slug **`async`**
6. **Action:** **Send email to attendee**
7. **Subject:**

   ```
   Reminder: your async video arrives soon
   ```

8. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Reminder: Your Async Reflection video will be delivered to your email by {EVENT_TIME} on {EVENT_DATE}.

   This is not a live meeting—nothing to join at that time. You'll receive a private video link by email.

   If intake isn't complete yet, please finish it so I can record on time.

   — Amanda / Pythoness Programmer
   https://www.pythonessprogrammer.com/async
   ```

9. **Save** / **Turn workflow on**

---

### Workflow ASYNC-2: 5-day follow-up after delivery slot

Uses **After the event ends** = end of the **delivery window** Cal.com has on the calendar (when the async slot ends, not when you send the video).

1. **Workflows → + New workflow**
2. **Name:** `[async] 5d follow-up`
3. **Trigger:** **After the event ends**
4. **Timing:**  
   - If Cal.com offers delay: **5 days** after event ends  
   - If only **Immediately** is available: use **Immediately** and keep the copy soft (see note below)
5. **Event types:** **only** `async`
6. **Action:** **Send email to attendee**
7. **Subject:**

   ```
   Hope the video helped
   ```

8. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Hope your Async Reflection video landed somewhere useful. If you want to continue in conversation, live sessions are here:

   20-minute live reading ($95): https://cal.com/pythoness/20min
   60-minute deep dive ($255): https://cal.com/pythoness/60min

   — Amanda / Pythoness Programmer
   ```

9. **Save**

**Note:** If this fires before you've sent the video (because the slot ended but you're still recording), either delay the workflow timing or disable ASYNC-2 until you're consistently delivering before slot end. Most operators send the video **before** the booked delivery time so the 5-day follow-up still makes sense.

---

### ASYNC-3: Video delivery (manual — not a Workflow)

Cal.com cannot attach your Loom/Drive link automatically when the recording is ready.

**When the video is ready:**

1. Cal.com → **Bookings** → open the booking
2. Use **Email attendee** / **Message attendee** (or your usual mail client)
3. **Subject:**

   ```
   Your Async Reflection video is ready
   ```

4. **Body:**

   ```
   Hi [first name],

   Your Async Reflection is ready. Watch at your own pace—you can rewatch whenever you need.

   [paste private video link]

   Reflection, not rescue. Reply if something in the video is unclear.

   — Amanda / Pythoness Programmer
   ```

5. Send **before** the delivery deadline the client booked

---

## Part 3 — Live 20 workflows (`20min`)

Create **4 workflows**.

---

### Workflow LIVE20-1: 24-hour reminder

1. **+ New workflow**
2. **Name:** `[20min] 24h reminder`
3. **Trigger:** **Before the event starts**
4. **Timing:** **24 hours**
5. **Event types:** **only** `20min` / **20-Minute Live Reading**
6. **Action:** **Send email to attendee**
7. **Subject:**

   ```
   Reminder: your live reading is tomorrow
   ```

8. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Reminder: Your 20-minute live reading is tomorrow at {EVENT_TIME} ({EVENT_DATE}).

   We'll start and end with a tarot pull. No prep needed.

   Join link: {LOCATION}

   — Amanda / Pythoness Programmer
   ```

9. **Save**

---

### Workflow LIVE20-2: 1-hour reminder

1. **Name:** `[20min] 1h reminder`
2. **Trigger:** **Before the event starts**
3. **Timing:** **1 hour**
4. **Event types:** **only** `20min`
5. **Action:** **Send email to attendee**
6. **Subject:**

   ```
   Your session is in 1 hour
   ```

7. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Your 20-minute live reading is in 1 hour. See you soon.

   Join link: {LOCATION}

   — Amanda
   ```

8. **Save**

---

### Workflow LIVE20-3: Thank-you (after session)

1. **Name:** `[20min] thank you`
2. **Trigger:** **After the event ends**
3. **Timing:** **Immediately**
4. **Event types:** **only** `20min`
5. **Action:** **Send email to attendee**
6. **Subject:**

   ```
   Thank you for today's session
   ```

7. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Thank you for today's session. I hope the reflection landed somewhere useful.

   If you want to go deeper later: https://cal.com/pythoness/60min

   — Amanda / Pythoness Programmer
   ```

8. **Save**

---

### Workflow LIVE20-4: Follow-up (~36 hours after session)

1. **Name:** `[20min] 36h follow-up`
2. **Trigger:** **After the event ends**
3. **Timing:** **36 hours** after end *(or **2 days** if that's the closest option)*  
   *(If no delay is available, merge this copy into LIVE20-3 or send manually.)*
4. **Event types:** **only** `20min`
5. **Action:** **Send email to attendee**
6. **Subject:**

   ```
   Following up from your session
   ```

7. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Checking in after our session. If anything is still circling, you can book again anytime:

   https://cal.com/pythoness

   — Amanda
   ```

8. **Save**

---

## Part 4 — Deep 60 workflows (`60min`)

Create **5 workflows** (same as live 20, plus 25-day nudge).

---

### Workflow DEEP60-1: 24-hour reminder

1. **Name:** `[60min] 24h reminder`
2. **Trigger:** **Before the event starts** → **24 hours**
3. **Event types:** **only** `60min` / **60-Minute Deep Dive**
4. **Action:** **Send email to attendee**
5. **Subject:**

   ```
   Reminder: your deep dive is tomorrow
   ```

6. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Reminder: Your 60-minute deep dive is tomorrow at {EVENT_TIME} ({EVENT_DATE}).

   We'll start with a tarot pull. Your optional 20-minute follow-up within 30 days is available when you're ready.

   Join link: {LOCATION}

   — Amanda / Pythoness Programmer
   ```

7. **Save**

---

### Workflow DEEP60-2: 1-hour reminder

1. **Name:** `[60min] 1h reminder`
2. **Trigger:** **Before the event starts** → **1 hour**
3. **Event types:** **only** `60min`
4. **Action:** **Send email to attendee**
5. **Subject:** `Your deep dive is in 1 hour`
6. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Your 60-minute deep dive is in 1 hour. See you soon.

   Join link: {LOCATION}

   — Amanda
   ```

7. **Save**

---

### Workflow DEEP60-3: Thank-you (after session)

1. **Name:** `[60min] thank you`
2. **Trigger:** **After the event ends** → **Immediately**
3. **Event types:** **only** `60min`
4. **Action:** **Send email to attendee**
5. **Subject:** `Thank you for today's deep dive`
6. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Thank you for today's deep dive. I hope the reflection landed somewhere useful.

   Remember: you have an optional 20-minute follow-up within 30 days if you want to check in on what's landing.

   Book follow-up: https://cal.com/pythoness/20min

   — Amanda / Pythoness Programmer
   ```

7. **Save**

---

### Workflow DEEP60-4: Follow-up (~36 hours after session)

1. **Name:** `[60min] 36h follow-up`
2. **Trigger:** **After the event ends** → **36 hours** (or **2 days**)
3. **Event types:** **only** `60min`
4. **Action:** **Send email to attendee**
5. **Subject:** `Following up from your deep dive`
6. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   Checking in after our session. If you promised yourself resources or a next step, this is your nudge to take the smallest piece that fits your capacity.

   Optional 20-min follow-up (within 30 days): https://cal.com/pythoness/20min

   — Amanda
   ```

7. **Save**

---

### Workflow DEEP60-5: 25-day optional follow-up nudge

1. **Name:** `[60min] 25d follow-up nudge`
2. **Trigger:** **After the event ends**
3. **Timing:** **25 days** after end *(or **26 days** / **4 weeks** if 25 is not listed)*
4. **Event types:** **only** `60min`
5. **Action:** **Send email to attendee**
6. **Subject:**

   ```
   Optional follow-up window closing soon
   ```

7. **Body:**

   ```
   Hi {ATTENDEE_FIRST_NAME},

   A few days left to use your optional 20-minute follow-up from your deep dive if you want to check in.

   Book: https://cal.com/pythoness/20min

   — Amanda / Pythoness Programmer
   ```

8. **Save**

---

## Part 5 — Workflows you should NOT create

Do **not** add Workflows that duplicate what Cal.com already sends unless you disabled the default:

- **Booking confirmed** — handled by event confirmation message (Part 1)
- **Booking cancelled** — Cal.com system cancellation email (leave on)
- **Booking rescheduled** — Cal.com system reschedule email (leave on)

Do **not** re-enable the site Resend webhook while these Cal.com workflows are active.

---

## Part 6 — Test each tier

### Async test

1. Incognito → book **async** with your email, slot **3+ days out**
2. Confirm Cal.com **confirmation + verification** email
3. Confirm you do **not** get a second confirmation from `sessions@pythonessprogrammer.com` (Resend path disabled)
4. Optional: cancel booking → Cal.com cancellation email only

### Live 20 test

1. Book **20min** slot **25+ hours out**
2. Confirmation arrives
3. After 24h (or check Cal.com workflow run log if visible), reminder sends

### Deep 60 test

Spot-check one booking before your next real client; confirm DEEP60-1 and DEEP60-2 are attached to **`60min` only**.

---

## Master checklist

### Event types (Part 1)

- [ ] `async` — confirmation copy pasted; default guest confirmation **enabled**
- [ ] `20min` — confirmation copy pasted; default guest confirmation **enabled**
- [ ] `60min` — confirmation copy pasted; default guest confirmation **enabled**
- [ ] Prices: $75 / $95 / $255

### Async workflows

- [ ] ASYNC-1 `[async] 36h delivery reminder`
- [ ] ASYNC-2 `[async] 5d follow-up`
- [ ] ASYNC-3 manual video delivery process documented / bookmarked

### Live 20 workflows

- [ ] LIVE20-1 `[20min] 24h reminder`
- [ ] LIVE20-2 `[20min] 1h reminder`
- [ ] LIVE20-3 `[20min] thank you`
- [ ] LIVE20-4 `[20min] 36h follow-up` *(or merged into LIVE20-3 if no delay)*

### Deep 60 workflows

- [ ] DEEP60-1 `[60min] 24h reminder`
- [ ] DEEP60-2 `[60min] 1h reminder`
- [ ] DEEP60-3 `[60min] thank you`
- [ ] DEEP60-4 `[60min] 36h follow-up`
- [ ] DEEP60-5 `[60min] 25d follow-up nudge`

### Infrastructure

- [ ] Site webhook **removed** from Cal.com Developer settings
- [ ] `BOOKING_WEBHOOK_ENABLED` **not** true on Netlify

---

## Quick reference — workflow count

| Tier | Workflows | Manual steps |
|------|-----------|--------------|
| Async | 2 | Video delivery email when recording is ready |
| Live 20 | 4 | — |
| Deep 60 | 5 | — |
| **Total** | **11** | **1 manual (async delivery)** |

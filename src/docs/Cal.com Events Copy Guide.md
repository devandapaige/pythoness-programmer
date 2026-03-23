# Cal.com Events Copy Guide — Pythoness Programmer

> **Archived — scheduling stack moved to Zoom Scheduler.**  
> Day-to-day event copy, Stripe payments, and setup instructions now live in **[`Zoom Scheduler Copy Guide.md`](./Zoom%20Scheduler%20Copy%20Guide.md)**. Keep this file only if you need historical Cal.com wording or a side-by-side during migration.

---

Use this guide when creating or updating your Cal.com event types for Software Psychic sessions. Keep copy consistent with the site and the [Site Copy & Voice Guide](./Site%20Copy%20&%20Voice%20Guide.md). Updated March 2026.

**Set prices in the Cal.com dashboard** to match the site: **$75** (async video), **$95** (live 20 min), **$225** (deep dive 60 min).

---

## Voice alignment

- **Reflection, not rescue:** Sessions are for understanding patterns and what your brain needs, not emergency fixes.
- **Central question:** "What is this struggle trying to teach you?" (still useful for live framing; async focuses on one question delivered as a recorded video.)
- **Levity:** So you don't make it a **third** time (you've already made it—let's not repeat it).
- **Inclusion:** Judgment-free, LGBTQIA+ and sex-worker affirming.
- **Guide, not guru:** I don't have all the answers; I sit with you and reflect.
- **Audience:** Neurodivergent business owners; software, strategy, and creative decisions. **Professional intuitive counsel**, not fortune-telling.

---

## Affiliate referral tracking (hidden `ref` field)

Use a **single hidden booking field** on each paid event type so partner-specific links pass a stable code (Option B). You reconcile commissions outside Cal (e.g. **20%** of qualifying paid bookings, paid manually or semi-manually via **Stripe**). Partner-facing copy and payout options live on the site at **`/affiliate-program`** ([`src/app/affiliate-program/page.tsx`](../app/affiliate-program/page.tsx)).

### Why this approach

- **No duplicate event types** per partner—one async, one live 20, one deep 60.
- The **`ref`** value is stored on the booking (visible to hosts in booking details).
- Partners get predictable URLs: same path, different query string.

Official Cal pattern: hidden **Short text** question + **Identifier** matching the URL parameter name. See [UTM parameter tracking](https://cal.com/help/bookings/utm-tracking) (section on hidden booking fields for custom parameters).

### Setup (repeat for each event: `async`, `20min`, `60min`)

1. Open the **event type** → **Advanced** → **Booking questions** (see [booking questions](https://cal.com/event-types/booking-questions)).
2. **Add a question**
   - **Type:** Short text  
   - **Identifier:** `ref` (must match exactly—this is the query key)  
   - Toggle **Hidden** on  
   - **Required:** No  
   - Label can be internal-only (e.g. “Referral partner code”)—guests won’t see it if the field is hidden.
3. **Save** and repeat for the other two event types so behavior is identical everywhere affiliates send traffic.

### Partner link format

Give each approved partner a **stable slug** (lowercase, no spaces), e.g. `jane` or `studio_north`.

**Example partner links**

- `https://cal.com/pythoness/async?ref=jane`
- `https://cal.com/pythoness/20min?ref=jane`
- `https://cal.com/pythoness/60min?ref=jane`

When someone books using that URL, Cal captures `ref=jane` on the booking. You verify paid amount in Cal/Stripe and apply your **20%** commission rule for that partner.

**Test:** Open each URL in a private window, complete a test booking (or cancel before pay if your workflow allows), and confirm `ref` appears on the booking record.

### Operations & payouts (manual / semi-manual)

- **Source of truth:** Export or review bookings monthly; filter by **`ref`** (or search booking details in Cal).
- **Commission:** **20%** of the **paid** session price for qualifying bookings attributed to that `ref` (define in your affiliate agreement: new vs returning clients, refunds, no-shows).
- **Stripe:** Pay partners via **Stripe** (manual transfer, invoice, or Connect-style flow if you add it later). Until automation exists, a spreadsheet + calendar reminder is enough for a small cohort (~5 partners).
- **Documentation:** Keep a table: partner slug, legal name, contact email, payout method, start date, any custom notes.

### Checklist (affiliate workflow)

- [ ] Hidden **`ref`** field exists on **async**, **20min**, and **60min** event types with the same identifier everywhere.
- [ ] Each partner has three bookmarkable links (async / live / deep) with their `?ref=` slug.
- [ ] You’ve done a live test booking with `?ref=test` and see the value on the booking.
- [ ] Written affiliate terms cover commission %, payment timing, refunds, disclosure, and credit vs cash (aligned with the **`/affiliate-program`** page).

---

## 20-Minute Live Reading

**Event name (title):**  
`20-Minute Live Reading` or `Software Psychic — 20 min live`

**Location/URL slug (if editable):**  
`20min` (matches current cal.com/pythoness/20min)

**Description (what invitees see when booking):**

*Cal’s editor is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Real-time video or voice:** interactive tarot and intuitive counsel for one focused decision or stuck point.

We start and end with a tarot pull. In between, we move together—naming what’s loud in the system, testing what fits your capacity and values, and making room for follow-up questions in the moment. I bring technical and business context without the hustle-culture script.

**What to expect**

- Tarot pull at start and end  
- Live back-and-forth on software, strategy, or creative direction  
- Pattern recognition and next-step clarity  
- You stay in charge of what you implement  

**Best for:** time-sensitive decisions; when you process better out loud; when you want live exchange alongside strategic reflection.

**Reflection, not rescue. $95.**

---

**Suggested intake questions (if you use Cal.com custom questions):**

- What pronouns should I use for you in your reading and emails? (e.g. she/her, they/them, he/him—or “use my name only”)
- What is the one decision, question, or stuck point you want to focus on?
- What have you already tried? (brief is fine)
- Anything else you want me to know before we meet? (optional)

**Confirmation / thank-you message (after booking):**

> You’re booked. We’ll start and end with a tarot pull. Come as you are—no prep required. See you at [time].

**Reminder message (24h or 1h before):**

> Reminder: Your 20-minute live reading is [time]. We’ll open with tarot and stay focused on your question. No prep needed.

---

## 60-Minute Deep Dive

**Event name (title):**  
`60-Minute Deep Dive` or `Software Psychic — 60 min deep dive`

**Location/URL slug (if editable):**  
`60min` (matches current cal.com/pythoness/60min)

**Description (what invitees see when booking):**

*Cal’s editor is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Extended intuitive business counsel.** Includes an optional **20-minute follow-up consultation within 30 days**.

We start and end with a tarot pull and spend the hour beneath the surface: recurring blocks across tech, operations, and creative work; what productivity culture sold you versus what your brain needs; strategic options that fit how you actually operate. Optional 20-minute follow-up within 30 days when you want to check in on what’s landing.

**What to expect**

- Tarot pull at start and end  
- Deep pattern work and strategic framing  
- Neurodivergent-friendly angles on tools and business choices  
- Optional 20-minute follow-up consultation within 30 days  

**Best for:** major transitions, intertwined decisions, foundational questions about how you want to run the work.

**Reflection, not rescue. $225.**

---

**Suggested intake questions:**

- What pronouns should I use for you in your reading and emails? (e.g. she/her, they/them, he/him—or “use my name only”)
- What patterns or decisions keep looping for you?
- What have you already tried or changed that didn't stick?
- What would a good outcome feel like after this session? (optional)

**Confirmation / thank-you message:**

> You’re booked for a 60-minute deep dive. We’ll use tarot and reflection to unpack patterns and build a path forward—plus you have the option to book a 20-minute follow-up within 30 days. See you soon.

**Reminder message:**

> Reminder: Your 60-minute deep dive is [time]. We’ll start with a tarot pull. Your optional 20-minute follow-up within 30 days is available when you’re ready.

---

## 20-Minute Async Reflection (video)

**Event name (title):**  
`20-Minute Async Reflection` or `Async Reflection — video`

**Location/URL slug (if editable):**  
`async` (matches current cal.com/pythoness/async)

**Description (what invitees see when booking):**

*Cal’s editor is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Private tarot-guided video** on one focused question—software, business strategy, or creative direction. **No live call.**

This is asynchronous. You complete the intake; I record your personalized reading with a tarot pull at start and end, and you receive a **private video link by email** by your delivery deadline. **Delivery:** within 3 business days of a complete intake, or by the deadline you select when booking—match this sentence to how you configure the event in Cal.

**What you’ll receive**

- Private video recording—not a live meeting (nothing to join at the scheduled time)  
- Tarot pull at start and end; reflection in plain language (no tarot knowledge required on your side)  
- Pattern naming and next-step angles that fit your capacity  

**How it works**

1. Book and choose your delivery deadline (when your video will arrive).  
2. Complete intake questions—the more context, the more specific the reading.  
3. Receive your private video link by the agreed time.  

**Important**

- Not a live session—you’re booking a delivery deadline, not a meeting slot  
- Non-refundable once booked; confirm via email so delivery reaches you  
- Professional intuitive counsel—not therapy, legal, or financial advice  

**$75.**

---

**Suggested intake questions:**

- What pronouns should I use for you in your reading and emails? (e.g. she/her, they/them, he/him—or “use my name only”)
- What is the single question or situation you want this reading to address?
- Relevant links or context (project, stack, business stage)—optional but helpful.
- What have you already tried? (optional)

**Confirmation / thank-you message:**

> You’re booked for an Async Reflection. The time you selected is when you’ll receive your private video—I’ll email the link by then. Not a live meeting. If you haven’t already, please complete the intake so I can record your reading. Watch whenever you’re ready.

**Reminder message (optional; e.g. 24–48h before delivery):**

> Reminder: Your Async video will be delivered to your email by [date/time]. If intake isn’t complete yet, please finish it so I can record on time.

---

## Cal.com Workflows: Reminders, Follow-ups, and Automation

Use these as a blueprint when setting up Cal.com workflows (or similar automation). Adjust timing and channels (email vs in-app) to match what Cal.com supports.

### 20-Minute Live Reading

| When | Type | Copy / purpose |
|------|------|----------------|
| **24h before** | Reminder | "Reminder: Your 20-minute live reading is tomorrow at [time]. We'll start with a tarot pull. No prep needed." |
| **1h before** (optional) | Reminder | "Your session is in 1 hour. See you soon." |
| **Right after** | Follow-up | Thank them; one-line takeaway if useful. Optional: note any follow-up resources you'll send. |
| **Within 24–48h** | Follow-up (optional) | Send promised resources or summary if you offered that in session. |

### 60-Minute Deep Dive

| When | Type | Copy / purpose |
|------|------|----------------|
| **24h before** | Reminder | "Reminder: Your 60-minute deep dive is tomorrow at [time]. We'll start with a tarot pull. Optional 20-minute follow-up within 30 days is available when you're ready." |
| **1h before** (optional) | Reminder | "Your deep dive is in 1 hour. See you soon." |
| **Right after** | Follow-up | Thank them; summarize framework or themes. Remind how to book the optional 20-minute follow-up within 30 days. |
| **Within 24–48h** | Follow-up | Written summary, resources, roadmap as promised. CTA for optional 20-minute follow-up. |
| **~25–28 days after** (optional) | Nudge | "A few days left to use your optional 20-minute follow-up if you want to check in." |

### 20-Minute Async Reflection (video)

| When | Type | Copy / purpose |
|------|------|----------------|
| **At booking** | Confirmation | Emphasize: the time they chose is when they'll **receive the video link**—not a live meeting time. |
| **24–48h before delivery** | Reminder (optional) | "Your Async video will arrive by [time]. Complete intake if you haven't." |
| **When you send the video** | Delivery email | Short note with link; watch at your pace. Optional: invite them to book live if they want to go deeper. |
| **Optional, 3–7 days after** | Follow-up | "Hope the video helped. Live 20-minute and 60-minute sessions are on the site if you want to continue in conversation." |

### Workflow checklist

- [ ] **Reminders** are set for each event type (at least 24h before live; async optional before delivery).
- [ ] **Async** reminders say **video delivered by [time]**, not "meeting at [time]."
- [ ] **Follow-up** after live sessions matches what you promise in session.
- [ ] **60-min:** Optional nudge before the 30-day follow-up window closes.
- [ ] **Prices** in Cal match the site: $75 / $95 / $225.

---

## Cal.com About / Profile Description

Use this in your Cal.com profile or "about" section so booking visitors see the same positioning as your site.

**Suggested copy:**

I’m Amanda — the **Pythoness Programmer / Software Psychic**. Late-identified neurodivergent, Senior Software Engineer with 15+ years across communications, systems, and code. I work with **neurodivergent business owners** on software decisions, strategy, and creative projects.

This is **reflection, not rescue:** tarot-informed intuitive counsel and technical context so you can trust your judgment and choose your next step. Live sessions start and end with a tarot pull; async is a **private video** you watch on your own time. You don’t need to know tarot—it’s a structure for insight, not fortune-telling.

**Judgment-free, affirming space** (LGBTQIA+ & SW affirming). Not therapy, legal, or financial advice.

**Book the tier that fits:** async video (**$75**), live 20 min (**$95**), or deep dive 60 min (**$225**).

---

## Checklist when updating Cal.com

- [ ] Event **titles** align with the site: **20-Minute Async Reflection**, **20-Minute Live Reading**, **60-Minute Deep Dive**.
- [ ] **Prices** in the dashboard are **$75**, **$95**, **$225**.
- [ ] **Descriptions** use reflection language, neurodivergent business owner framing, and **professional intuitive counsel** (not "predictions").
- [ ] **60-min** copy includes **optional 20-minute follow-up consultation within 30 days**.
- [ ] **Async** copy states **private video** delivery by the selected time, **non-refundable** once booked, **no live meeting**, confirm via email.
- [ ] **Workflows** (reminders, delivery email) match **video** async—not written text.
- [ ] **Cal.com about/profile** reflects Software Psychic positioning and current tiers.
- [ ] **Affiliate:** hidden **`ref`** field on all three event types; partner links use `?ref=slug`; commission tracking process documented.

---

## Quick reference: phrases to use

| Use | Avoid |
|-----|-------|
| Reflection session / intuitive counsel | Troubleshooting-only / fix-it-only framing |
| What this struggle is trying to teach you | "I'll tell you what to do" as the whole pitch |
| So you don't make it a third time | So you don't make the same mistake twice |
| Tarot pull at start and end (live and async video) | |
| Private video / delivery by [time] (async) | Implies a live call at the booked time |
| Judgment-free, affirming (LGBTQIA+ & SW affirming) | Generic "inclusive" only |

---

*Keep this guide next to the [Site Copy & Voice Guide](./Site%20Copy%20&%20Voice%20Guide.md) and [AboutMeRewrite](./AboutMeRewrite.md) so all client-facing copy stays aligned.*

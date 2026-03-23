# Zoom Scheduler Copy Guide — Pythoness Programmer

Use this guide when creating or updating **Zoom Scheduler** scheduling links for Software Psychic sessions. Payments run through **Stripe** inside Zoom Scheduler (see Zoom’s current admin flow in [Zoom Scheduler support](https://support.zoom.com/hc/en/category?id=kb_category&kb_category=9a27b21a8720391089a37408dabb35c5)). Keep positioning aligned with the site and the [Site Copy & Voice Guide](./Site%20Copy%20&%20Voice%20Guide.md).

**Public pricing (match Stripe / Scheduler):** **$75** (async video), **$95** (live 20 min), **$255** (deep dive 60 min).

**Why Zoom Scheduler + Stripe:** Native Stripe checkout on the booking flow, reminders via Zoom Scheduler, and—at current published rates—lower per-seat scheduler cost than many standalone schedulers (compare plans on [Zoom Scheduler pricing](https://zoom.us/pricing/scheduler)). Confirm fees, taxes, and regional availability in your Zoom and Stripe dashboards.

---

## Voice alignment

- **Reflection, not rescue:** Sessions are for understanding patterns and what your brain needs, not emergency fixes.
- **Central question:** "What is this struggle trying to teach you?" (useful for live framing; async is one question delivered as a recorded video.)
- **Levity:** So you don't make it a **third** time (you've already made it—let's not repeat it).
- **Inclusion:** Judgment-free, LGBTQIA+ and sex-worker affirming.
- **Guide, not guru:** I don't have all the answers; I sit with you and reflect.
- **Audience:** Neurodivergent business owners; software, strategy, and creative decisions. **Professional intuitive counsel**, not fortune-telling.

---

## Setup overview (operator checklist)

Do these in **your** Zoom account; exact menu names can change—use [Get started with Zoom Scheduler](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058092) and search the help center for **Stripe** if the path moves.

1. **Zoom Scheduler** is available as an add-on or bundled with some Zoom Workplace plans ([pricing](https://zoom.us/pricing/scheduler)).
2. **Connect Stripe** for paid bookings: in Scheduler / billing settings, complete Stripe onboarding so clients pay when they book (Zoom’s docs describe **Take payment with Stripe** as a Scheduler capability).
3. Create **three separate scheduling links** (or three “event types” / appointment templates—terminology varies) for:
   - **20-Minute Async Reflection (video)** — $75  
   - **20-Minute Live Reading** — $95  
   - **60-Minute Deep Dive** — $255  
4. Set **duration** to **20 min**, **20 min**, and **60 min** respectively. For **async**, the booked time should represent your **delivery commitment** (when the private video will be ready), not a live session—say so clearly in the title and description (see below).
5. **Calendar:** Connect the calendar(s) Scheduler should respect for availability.
6. **Reminders:** Use Scheduler’s **email and/or SMS** reminders; paste the copy from this guide into the templates Zoom provides.
7. **Website:** Live site booking URLs are centralized in [`src/config/booking.ts`](../config/booking.ts) (defaults: **hub** `https://scheduler.zoom.us/pythoness`, **async** `/async`, **live 20** `/20min`, **deep 60** `/60min`). Override with **`NEXT_PUBLIC_BOOKING_*`** in `.env.local` if paths change. Keep **`content/home/*.mdx`** `ctaLink` / hero `href` values in sync with the same base (`scheduler.zoom.us/pythoness/...`).

---

## Async vs live (important)

- **Live sessions:** Attendee books a real-time **Zoom** (or your configured video) session. Standard Scheduler behavior.
- **Async video:** There is **no live meeting** at the booked time. The slot is **when the private video will be delivered by**—intake should already be complete before they book. Make the booking page title and description explicit so people don’t wait in an empty Zoom. If Scheduler forces a meeting link, clarify in confirmation email that the link may be unused—**your** workflow should match what you promise on the page.

---

## Form fields (intake + affiliates)

Under **Booking page options** / **Form fields** (wording may vary), add **custom questions** so intake matches your practice.

**Intake before booking (all session types)**  
Configure your flow so clients **complete intake before they can book**—e.g. required fields on the booking page, or a step before time selection. Nothing should be gated on “finish intake after you pay.”

### Master intake fields (use on all three scheduling links)

Add these as **custom questions** in Zoom Scheduler (exact labels are suggestions—mirror tone across async, live 20, and deep 60).

| # | Suggested field label (guest-facing) | Type | Notes |
|---|--------------------------------------|------|--------|
| 1 | **What pronouns should I use for you in your reading and emails?** | Short text | **Include on every event type.** Example helper text: `e.g. she/her, they/them, he/him, xe/xem—or write “use my name only” or “any.”` Mark **required** if your workflow needs it; if you keep it optional, nudge in helper text so most people fill it in. |
| 2 | **What is the one decision, question, or stuck point you want to focus on?** | Long or short text | Core focus for the session. |
| 3 | **What have you already tried?** | Short text | “Brief is fine.” |
| 4 | **Anything else you want me to know?** | Short text | Optional. |

**Async — add or emphasize (in addition to the master fields)**

| Suggested field label | Type | Notes |
|------------------------|------|--------|
| **What is the single question or situation you want this reading to address?** | Long text | Can mirror #2 above if you prefer one field—don’t duplicate if one “focus” field is enough. |
| **Relevant links or context** (project, stack, business stage) | Short text | Optional. |

**Deep 60 — swap or add (layer on top of master fields)**

Use the **master fields**, or replace #2–3 with deeper prompts if you want a distinct deep-dive intake:

- **What patterns or decisions keep looping for you?**
- **What have you already tried or changed that didn’t stick?**
- **What would a good outcome feel like after this session?** (optional)

Keep **pronouns** on this link either way.

Per-session copy blocks below repeat the **full intake list** for each tier so you can paste without cross-referencing.

**Affiliate program (~5 partners)**

- Add an optional **short text** field: **Referral partner code** (or **How did you hear about this?**). Partners ask clients to enter their code, or you map known partners manually.  
- If Zoom adds **scheduling tracking fields** or URL parameters that pre-fill custom fields, align with [Zoom’s tracking-field documentation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067020) and test in a sandbox booking. Until then, **manual code entry + monthly reconciliation** is fine for a small program. Partner terms: [`/affiliate-program`](../app/affiliate-program/page.tsx).

**Commission snapshot:** **20%** of qualifying paid bookings attributed to a partner; payout via **Stripe** (manual or semi-manual) or credit toward your own sessions per [`/affiliate-program`](../app/affiliate-program/page.tsx).

---

## 20-Minute Live Reading

**Scheduling link name (title):**  
`20-Minute Live Reading` or `Software Psychic — 20 min live`

**Duration:** 20 minutes  

**Price (Stripe):** $95  

**Description (what bookers see):**

*Zoom Scheduler’s booking page is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Real-time video or voice:** interactive tarot and intuitive counsel for one focused decision or stuck point.

We start and end with a tarot pull. In between, we move together—naming what's loud in the system, testing what fits your capacity and values, and making room for follow-up questions in the moment. I bring technical and business context without the hustle-culture script.

**What to expect**

- Tarot pull at start and end  
- Live back-and-forth on software, strategy, or creative direction  
- Pattern recognition and next-step clarity  
- You stay in charge of what you implement  

**Best for:** time-sensitive decisions; when you process better out loud; when you want live exchange alongside strategic reflection.

**Reflection, not rescue. $95.**

---

**Intake questions (paste into Zoom Scheduler form fields)**

1. **What pronouns should I use for you in your reading and emails?** (short text — see master table for helper text)  
2. **What is the one decision, question, or stuck point you want to focus on?**  
3. **What have you already tried?** (brief is fine)  
4. **Anything else you want me to know before we meet?** (optional)

---

**Confirmation email (after booking):**

> You're booked. We'll start and end with a tarot pull. Come as you are—no prep required. See you at [time].

**Reminder (24h or 1h before):**

> Reminder: Your 20-minute live reading is [time]. We'll open with tarot and stay focused on your question. No prep needed.

---

## 60-Minute Deep Dive

**Scheduling link name (title):**  
`60-Minute Deep Dive` or `Software Psychic — 60 min deep dive`

**Duration:** 60 minutes  

**Price (Stripe):** $255  

**Description (what bookers see):**

*Zoom Scheduler’s booking page is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Extended intuitive business counsel.** Includes an optional **20-minute follow-up consultation within 30 days**.

We start and end with a tarot pull and spend the hour beneath the surface: recurring blocks across tech, operations, and creative work; what productivity culture sold you versus what your brain needs; strategic options that fit how you actually operate. Optional 20-minute follow-up within 30 days when you want to check in on what's landing.

**What to expect**

- Tarot pull at start and end  
- Deep pattern work and strategic framing  
- Neurodivergent-friendly angles on tools and business choices  
- Optional 20-minute follow-up consultation within 30 days  

**Best for:** major transitions, intertwined decisions, foundational questions about how you want to run the work.

**Reflection, not rescue. $255.**

---

**Intake questions (paste into Zoom Scheduler form fields)**

1. **What pronouns should I use for you in your reading and emails?** (short text — see master table for helper text)  
2. **What patterns or decisions keep looping for you?**  
3. **What have you already tried or changed that didn’t stick?**  
4. **What would a good outcome feel like after this session?** (optional)  
5. **Anything else you want me to know?** (optional)

*If you prefer a shorter form, use the **master intake fields** (#1–4 in the table above) instead of 2–5; always keep **pronouns**.**

---

**Confirmation email:**

> You're booked for a 60-minute deep dive. We'll use tarot and reflection to unpack patterns and build a path forward—plus you have the option to book a 20-minute follow-up within 30 days. See you soon.

**Reminder:**

> Reminder: Your 60-minute deep dive is [time]. We'll start with a tarot pull. Your optional 20-minute follow-up within 30 days is available when you're ready.

---

## 20-Minute Async Reflection (video)

**Scheduling link name (title):**  
`20-Minute Async Reflection (video — no live call)`  

**Duration:** Use Scheduler’s 20-minute option if that’s the closest match, **or** the minimum duration Zoom allows—**the label and description carry the real promise** (private video by deadline, not a live call).

**Price (Stripe):** $75  

**Description (what bookers see):**

*Zoom Scheduler’s booking page is usually plain text—paste this as-is, or mirror the same structure with line breaks and bullets.*

**Private tarot-guided video** on one focused question—software, business strategy, or creative direction. **No live call.**

This is asynchronous. **Intake is required before you can book.** I record your personalized reading with a tarot pull at start and end, and you receive a **private video link by email** by the **time of the booking slot you selected**. That slot is your **delivery time**, not a live meeting.

**What you'll receive**

- Private video recording—not a live meeting (nothing to join at the scheduled time)  
- Tarot pull at start and end; reflection in plain language (no tarot knowledge required on your side)  
- Pattern naming and next-step angles that fit your capacity  

**How it works**

1. Complete the intake (required before booking).  
2. Book a slot—the time you choose is when your private video will be **delivered by**.  
3. Receive your private video link by email by that time.  

**Important**

- Not a live session—you're booking **when your video will be ready**, not a call to join  
- Non-refundable once booked; confirm via email so delivery reaches you  
- Professional intuitive counsel—not therapy, legal, or financial advice  

**$75.**

---

**Intake questions (paste into Zoom Scheduler form fields)**

1. **What pronouns should I use for you in your reading and emails?** (short text — see master table for helper text)  
2. **What is the single question or situation you want this reading to address?**  
3. **What have you already tried?** (optional)

Add if you want more context:

4. **Relevant links or context** (project, stack, business stage) (optional)  
5. **Anything else you want me to know?** (optional)

*If you use one combined “focus” field instead of #2 and #3, merge them—keep **pronouns** on this link.*

---

**Confirmation email:**

> You're booked for an Async Reflection. The time you selected is when you'll receive your private video—I'll email the link by then. Not a live meeting. Your intake was completed before booking; watch whenever you're ready.

**Reminder (optional; e.g. 24–48h before delivery):**

> Reminder: Your Async video will be delivered to your email by [date/time] (the slot you chose). There's nothing to join live.

---

## Zoom Scheduler workflows (reminders & follow-ups)

| Session | When | Purpose |
|--------|------|---------|
| **Live 20** | 24h before | Reminder + tarot / no prep |
| **Live 20** | 1h before (optional) | Short reminder |
| **Deep 60** | 24h before | Reminder + optional follow-up within 30 days |
| **Async** | After booking | Clarify: time = **delivery**, not live join |
| **Async** | 24–48h before delivery | Optional nudge: video arrives by [time]; no live meeting |

Tune copy in Scheduler’s **notification** settings. Add a **follow-up** email after live sessions if you promise resources by email.

---

## Scheduler profile / bio (short)

Use on your branded booking profile if Zoom exposes a bio field:

I'm Amanda — the **Pythoness Programmer / Software Psychic**. Late-identified neurodivergent, Senior Software Engineer with 15+ years across communications, systems, and code. I work with **neurodivergent business owners** on software decisions, strategy, and creative projects.

This is **reflection, not rescue:** tarot-informed intuitive counsel and technical context so you can trust your judgment and choose your next step. Live sessions start and end with a tarot pull; async is a **private video** you watch on your own time. You don't need to know tarot—it's a structure for insight, not fortune-telling.

**Judgment-free, affirming space** (LGBTQIA+ & SW affirming). Not therapy, legal, or financial advice.

**Book the tier that fits:** async video (**$75**), live 20 min (**$95**), or deep dive 60 min (**$255**).

---

## Checklist when updating Zoom Scheduler

- [ ] Three scheduling links exist with correct **durations** and **Stripe prices** ($75 / $95 / $255).  
- [ ] **Async** copy states **private video**, **intake before booking**, **delivery by the selected booking slot**, **non-refundable**, **no live meeting**.  
- [ ] **60-min** copy includes **optional 20-minute follow-up within 30 days**.  
- [ ] **Form fields** cover intake (required before booking), including **pronouns** on all three links; optional **referral partner code** if running affiliates.  
- [ ] **Confirmation + reminder** templates match this guide.  
- [ ] **Website and footer** point to **Zoom Scheduler URLs** (not old Cal links) after cutover.  
- [ ] Stripe payouts, refunds, and tax settings match your accountant’s guidance.  

---

## Quick reference: phrases to use

| Use | Avoid |
|-----|-------|
| Reflection session / intuitive counsel | Troubleshooting-only framing |
| What this struggle is trying to teach you | "I'll tell you what to do" as the whole pitch |
| Tarot pull at start and end (live and async video) | |
| Private video / delivery by [time] (async) | Implying a live call at the booked time |
| Judgment-free, affirming (LGBTQIA+ & SW affirming) | Generic "inclusive" only |

---

*Supersedes Cal.com-specific setup for day-to-day operations. Legacy Cal copy is preserved in [`Cal.com Events Copy Guide.md`](./Cal.com%20Events%20Copy%20Guide.md) for reference only.*

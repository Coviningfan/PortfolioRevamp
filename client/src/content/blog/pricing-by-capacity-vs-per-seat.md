---
title: "Pricing by Capacity vs. Per-Seat: Why Phone System Pricing Models Matter"
description: "Per-seat pricing was invented for software you sit at a desk to use. Phone systems and AI receptionists do not work that way. Here is why capacity-based pricing is almost always the better model for business communications."
date: "2026-05-23"
author: "DSX Edge Team"
category: "Communications"
readTime: "6 min read"
tags:
  - Pricing
  - 3CX
  - Implementation
keywords:
  - 3CX pricing
  - phone system pricing
  - per-seat vs capacity
  - business VoIP cost
takeaways:
  - Per-seat pricing punishes you for having a team — even when most of your team rarely makes outbound calls.
  - Capacity-based pricing charges for simultaneous calls, which is how phone systems actually consume resources.
  - 3CX uses capacity-based pricing, which is one of the structural reasons DSX deployments come in 40–65% cheaper.
  - For AI receptionist work, per-call or per-minute usage layered on a capacity-based platform is the only model that scales fairly.
---

Picking a business phone system in 2026 is mostly an exercise in decoding pricing pages. Some vendors charge $25 per user per month. Some charge $40. Some charge $89 with "AI" in the name. None of them are actually telling you what your bill will be.

There is a simpler way to think about this, and it is the same way the underlying technology actually consumes resources: **capacity**.

## Per-seat pricing is a software billing model, not a telecom one

Per-seat pricing came out of SaaS. The logic made sense for tools like email, CRM, and project management — every user gets their own account, their own data, their own workspace. More users meant more storage, more compute, more support load. Charging per seat was a clean approximation of cost.

For phone systems, that logic falls apart instantly.

A 30-person construction company does not have 30 simultaneous calls. They have, at peak, maybe 6. The other 24 employees spend their workday on the job site with their personal phones, never touching the office extension. But under per-seat pricing, you are paying $25 × 30 = $750 every month for those 24 employees to not use the phone.

Per-seat is a fiction that benefits the vendor.

## Capacity-based pricing matches how a phone system actually works

The 3CX licensing model — and by extension the DSX platform built on it — prices by **simultaneous calls (SCs)**, not seats. You buy a license that supports, say, 16 concurrent calls. Anyone in the company can use any of the 16 channels at any time. If your peak is 8, you are paying for headroom. If it briefly spikes to 17, the 17th gets queued.

What this gets you, in plain English:

- **You can have an unlimited number of extensions.** Add staff, vendors, seasonal employees, shop floor extensions, conference rooms — they all get their own number and voicemail at no per-seat cost.
- **You pay for the actual physical bottleneck.** Simultaneous calls is the real resource. Channels into and out of the PSTN, transcoding capacity, recording bandwidth — they all scale with concurrent calls, not user count.
- **You can right-size.** Most businesses run at 30–40% peak utilization. If you are over-provisioned, the upgrade or downgrade is a license change, not a rip-and-replace.

This is one of the structural reasons the case studies on the [DSX Edge home page](/) show 46–65% cost reductions. We are not doing accounting tricks — we are running customers on a pricing model that actually matches how their phone usage works.

## Where capacity pricing breaks (and the honest answer)

Capacity is the right primary axis, but it is not the only axis. Two things you should watch:

### 1. Heavy outbound dialing teams

If you run a 20-person sales floor that dials all day, you will need a lot of simultaneous-call capacity *and* you will benefit from features (auto-dialer, dispositioning, screen pops) that are typically priced separately. The base capacity license is still cheaper per dial than per-seat models, but plan for the contact-center add-ons.

### 2. AI usage is its own meter

AI voice agents consume real compute — modern voice synthesis, transcription, intent parsing, CRM round-trips. That work does not fit cleanly into a capacity license. The honest pricing model is **capacity for the phone platform + per-call or per-minute for the AI layer**.

That is exactly how we structure DSX Edge engagements. The platform side is capacity-priced (predictable, low). The AI side is usage-priced (you pay only for calls the AI actually handles). We talk about why a per-call AI rate beats answering-service per-minute pricing in [AI Receptionist vs. Cheap Answering Service](/blog/ai-receptionist-vs-answering-service).

## A realistic example

Take a 25-person law firm with 3 attorneys, 4 paralegals, an office manager, and the rest support staff. Peak inbound is 7 concurrent calls during the lunch hour. After-hours and weekend volume is roughly 15 calls a day.

**Per-seat model, $30/user/month:** 25 × $30 = **$750/month**, before any AI, before any add-ons. AI receptionist priced per-seat on top of that adds another $15–$25/user, easily another $375.

**Capacity model (8 SC license) + DSX Edge AI on after-hours and overflow:** roughly **$220/month** for the platform + ~$110/month for AI usage at typical volume = **$330/month all-in**.

Same firm. Same functionality. Less than half the cost, with strictly more capability (AI receptionist, transcription, structured CRM updates).

The per-seat vendor is not lying to you. They are just pricing for a software model that does not describe what a phone system actually is.

## The other reason this matters: scalability

When you hire two paralegals, the per-seat model raises your bill by $60. The capacity model raises it by zero. When you let a seasonal contractor go, the per-seat bill drops; the capacity bill stays the same (you can also downsize the SC license at renewal, but the variance per individual hire is dramatically smaller).

For businesses with seasonal staffing, multiple locations, or fluctuating headcount, that smoother cost curve compounds. We see this in particular with construction, HVAC, holiday-driven retail, and any business with a sales floor that flexes — exactly the customer profiles that show up in our case studies.

## The 3CX angle

3CX has used capacity-based licensing since long before it was fashionable to talk about, and they have stuck with it through every platform release including [V20 Update 8](/blog/3cx-v20-update-8-what-it-means-for-business). It is one of the underlying reasons partners can offer competitive pricing on the platform — the per-customer license cost is honest.

It is also one of the practical reasons a Platinum partner relationship matters. Capacity-based licensing has volume tiers; Platinum partners can offer pricing that smaller resellers literally cannot match. We explained the tier system in [3CX Platinum Partner: What It Means](/blog/3cx-platinum-partner-what-it-means).

## What to ask any vendor

When you are quoted by a phone system vendor, three questions cut through the noise:

1. **Am I being priced per seat or per simultaneous call?** If per seat, ask what happens if half my staff barely uses the phone. The answer should bother you.
2. **What is included vs. add-on?** Recording, transcription, mobile apps, queues, AI — write down the all-in number, not the headline number.
3. **What does my bill look like at 1.5x my current headcount?** This is where per-seat math gets ugly fast.

A vendor that prices honestly will answer all three without flinching. A vendor that does not will give you a different headline number and route you to a sales rep.

> Your phone system should not just ring. It should work.

[Get an honest capacity-based quote from DSX →](/contact)

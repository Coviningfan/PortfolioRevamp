---
title: "On-Prem Transcription and Stereo Recording for Legal and Regulated Workflows"
description: "Legal, financial, and other regulated workflows need call audio they actually control — bit-perfect, two-channel, on-prem, with verifiable provenance. Here is how to do that on 3CX without compromising the AI layer."
date: "2026-05-21"
author: "DSX Edge Team"
category: "Compliance"
readTime: "8 min read"
tags:
  - Compliance
  - Legal
  - 3CX
  - Recording
keywords:
  - 3CX stereo recording
  - on-prem transcription
  - legal call recording
  - regulated call workflow
takeaways:
  - Stereo (two-channel) recording captures each side of the call on its own audio track — required for clean transcription, disputed-conversation defense, and forensic analysis.
  - On-prem transcription means audio and text never leave your controlled environment, which is the cleanest answer to "where does my data live?" for regulated workflows.
  - 3CX supports stereo recording natively and can route to on-prem transcription engines; the AI layer sits behind the same boundary.
  - This combination is what makes AI receptionists deployable in legal, financial, and regulated-industry contexts where cloud-only transcription is a non-starter.
---

There is a category of business where the standard "record everything to vendor cloud, transcribe with whoever has the best API" approach simply is not acceptable. Law firms, financial advisors, insurance defense practices, debt collection, regulated brokerages, and any business that might end up litigating the contents of a phone call all need something more rigorous: **audio they actually control, captured in a format that survives scrutiny, transcribed by an engine they own**.

Most "AI receptionist" products cannot meet that bar. The architecture is wrong from day one — audio gets streamed to a hosted endpoint, transcribed in someone else's cloud, then returned. For a regulated workflow that is a non-starter.

The good news: it is genuinely solvable on 3CX, and the AI layer does not have to be sacrificed to do it. Here is what that deployment looks like in practice.

## Why stereo recording matters

A standard mono recording mixes both sides of the conversation into a single audio track. That is fine for "did we say what we said we said." It is terrible for:

- **Automated transcription accuracy.** Every speech-to-text engine works dramatically better when each speaker is on their own channel. Overlap, interruptions, and crosstalk all become tractable.
- **Speaker diarization.** "Who said what" should not require the AI to guess. Two channels make it trivial.
- **Disputed-conversation defense.** If counsel ever needs to demonstrate that a specific phrase was uttered by the customer, not your agent, a stereo recording is the only honest answer. A mono recording lets the other side argue about overlap.
- **Quality and coaching.** Reviewing a call where you can mute one side is a fundamentally different exercise than reviewing a mixed track.

3CX supports stereo recording natively in V20. You enable it per queue or per extension, and the resulting WAV file contains the agent on one channel and the caller on the other. The disk cost is roughly 2x mono. The analytical value is roughly 10x.

## Why on-prem transcription matters for regulated work

The cleanest answer to "where does my recorded audio go?" is "nowhere it does not already live." When transcription runs on infrastructure you control — in your 3CX tenant, in your data center, in your AWS / Azure account — the audit story is short and convincing.

When transcription runs through a hosted API, the audit story gets long fast. Where is the audio buffered? For how long? Does the vendor train models on it? What is the breach notification SLA? Which sub-processors touch it? You can answer all of those questions — many vendors are perfectly responsible operators — but the cumulative cost of answering them, and the residual risk that any one answer changes next quarter, is the reason regulated buyers prefer on-prem.

The implementation pattern we use:

1. 3CX writes the call to a stereo WAV in tenant-scoped storage. Encryption at rest is on. Audit log records the write.
2. A transcription worker running inside the same tenant picks up the WAV, transcribes both channels, and writes a structured JSON sidecar (utterances, timestamps, speaker labels) next to the original audio.
3. The sidecar is what downstream systems (CRM, case management, the AI layer) read. The original WAV is the immutable source of truth.

Nothing leaves the tenant. No external API holds your audio. The forensic story is one sentence: *"Audio and text live in our 3CX tenant in our data center under our retention policy."* That sentence is what makes the deployment defensible.

The data center side of that story is one of the reasons we host out of the [Citadel Campus](/data-center) — Tier IV-class, audited, with the controls regulated buyers expect.

## Where does the AI go?

This is the question that trips most regulated-industry buyers. They want AI receptionists. They also want their audio to stay home. Can those two things coexist?

Yes, if you architect them correctly.

The pattern:

- **Live calls** go through the AI voice agent in real time. The agent runs inside the same tenant boundary as the recording engine. PHI / privileged content does not leave the tenant during the conversation.
- **Recording** captures the full stereo audio of the call (including the AI's side of the conversation, which becomes useful evidence later).
- **On-prem transcription** runs after the call, producing the structured sidecar.
- **The AI's downstream work** (CRM update, case file write, follow-up email draft) consumes the structured sidecar — not raw audio over a third-party API.

This is materially different from a cloud-only AI receptionist where audio is streamed continuously to a hosted endpoint. It is also more expensive — you are running real compute inside your tenant for transcription — but it is the only architecture that survives a serious vendor security review at most regulated firms.

The platform-level support for this got significantly cleaner in [3CX V20 Update 8](/blog/3cx-v20-update-8-what-it-means-for-business). The AI routing primitives in Update 8 explicitly support routing to in-tenant agents, and the transcription engine can be pointed at a local endpoint instead of the hosted default.

## A realistic legal-practice deployment

Picture a 30-attorney litigation firm. They want an AI receptionist for new intake and existing-client routing, but the partners (correctly) draw a hard line: no privileged conversation leaves the firm's controlled environment.

The deployment looks like this:

- **3CX tenant** hosted in the firm's dedicated environment within our multi-tenant platform, as described in [Multi-Tenant 3CX, Explained for Business Owners](/blog/multi-tenant-3cx-explained).
- **Stereo recording** enabled on every queue. WAVs land in tenant-scoped storage with a 7-year retention policy aligned to the firm's matter management rules.
- **On-prem transcription** worker runs in the same tenant. It produces speaker-separated transcripts with timestamps, written to the matter file via the firm's existing case management API.
- **AI receptionist** routes new intake calls to a new-client workflow (conflict pre-check via the case management system, basic intake fields, calendaring), routes existing-client calls to the responsible attorney's queue with the matter context attached, and routes opposing-counsel calls into a controlled handoff that the firm's litigation partners specified explicitly.
- **No raw audio** leaves the tenant at any point. The AI agent consumes structured intent signals during the call and the on-prem transcript after.

The result is an AI receptionist the firm's GC approved without rewriting the firm's outside-counsel guidelines or risking work-product privilege. That is what makes the difference between a regulated firm signing the contract and walking away.

## What this rules out

The architecture above is incompatible with a few common AI vendor patterns. If you are a regulated firm, treat these as red flags:

- **Vendors that require streaming audio to their hosted API for the AI to function.** Even with a BAA, the audit story is harder, and many regulated firms simply will not approve it.
- **Transcription pricing that depends on a hosted endpoint.** If on-prem is "available on the enterprise plan, contact sales," the architecture probably is not designed for it.
- **AI vendors who cannot articulate the difference between mono and stereo recording.** It signals they have not done regulated work.
- **Anyone who says "we're SOC 2, so we're fine for legal."** SOC 2 is necessary, not sufficient. Privilege is a different conversation.

The right vendor will not flinch at any of these questions. We see them every week.

## Tying it back to AI receptionists more broadly

The legal / regulated deployment is the most rigorous version of a pattern that applies to a lot of businesses — financial services, insurance defense, anyone with a real audit obligation. The same architecture works in lighter forms for medical practices (see [HIPAA and 3CX AI Receptionists for Medical Offices](/blog/hipaa-3cx-ai-receptionist-medical-offices)) and for any business that just wants the assurance that their call data lives somewhere they can point to on a map.

It also explains why we did not build DSX Edge as a pure SaaS. A pure SaaS forces every customer onto the vendor's hosted endpoints. An implementation-led model lets us put the AI on the customer's side of the boundary when the workflow requires it — and that is the difference between selling to a software-buying SMB and serving a regulated practice. That distinction is the entire thesis on the [What is DSX Edge?](/ai) page.

## What to ask if you are evaluating this for your firm

1. **Will the recording be stereo, by default, on every relevant queue?**
2. **Where does the audio live, who can read it, and what is the retention?**
3. **Where does transcription run — on-prem in our tenant or in a vendor cloud?**
4. **Does the AI agent require streaming audio to an external endpoint, or does it run inside our tenant boundary?**
5. **What is the sub-processor list, and is every one of them under contract that allows your engagement model?**

A serious partner answers all five clearly and gives you the architecture diagram in writing. That is the price of admission for regulated work.

> Cloud is infrastructure. Intelligence is the work — and in regulated environments, the work has to happen inside the boundary you control.

[Talk to DSX about a regulated-workflow AI deployment →](/contact)

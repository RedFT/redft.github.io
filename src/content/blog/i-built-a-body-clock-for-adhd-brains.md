---
title: I Built a Body Clock for ADHD Brains
pubDate: 2026-02-15
description: I built an app because I keep forgetting to drink water. It turns out thousands of other people have the same problem.
tags: [personal, software, adhd]
---

Last week I built a phone app because I keep forgetting to drink water.

The problem is that ADHD brains don't register hunger, thirst, or fatigue until it's an emergency. I've gone entire workdays without eating because nobody told me it was lunch. So I built a set of meters that deplete in real time. Hunger, thirst, energy, social, fun. Each one drains at a different rate. Tap to reset. The bar goes from green to yellow to red. The app is a "guilt-free need tracker for brains that can't feel their own signals."

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem auto;max-width:600px;">
<a href="/images/bodyclock-dashboard-2.png" target="_blank"><img src="/images/bodyclock-dashboard-2.png" alt="Body Clock with paused timers" style="width:100%;border-radius:12px;" /></a>
<a href="/images/bodyclock-new-meter.png" target="_blank"><img src="/images/bodyclock-new-meter.png" alt="Adding a new meter" style="width:100%;border-radius:12px;" /></a>
<a href="/images/bodyclock-app.png" target="_blank"><img src="/images/bodyclock-app.png" alt="Body Clock dashboard" style="width:100%;border-radius:12px;" /></a>
<a href="/images/bodyclock-settings.png" target="_blank"><img src="/images/bodyclock-settings.png" alt="Body Clock settings" style="width:100%;border-radius:12px;" /></a>
</div>

I found out later that Reddit has threads with thousands of upvotes asking for exactly this. "App like Finch, but not infantile." "ADHD feels like you're a Sim and the player isn't choosing actions." It was nice to know I wasn't the only one.

I built it in React Native. iOS and Android widgets, colored bars, an emoji picker, custom depletion rates, a full test suite.

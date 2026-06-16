---
title: My Accidental Local AI Setup
pubDate: 2026-01-15
description: The accidental path from a desktop chat app to running AI coding agents on self-hosted models.
---

## [The Jan Discovery](#the-jan-discovery)

I found Jan by accident. It is a desktop app that downloads models from Hugging Face and runs them on your GPU. I installed it, loaded a 7B model, and watched it generate its first response. No API key. No credit card. No data leaving my machine. It felt like discovering you can brew your own coffee instead of buying it, except the coffee is a language model and the brewing involves gigabytes of weights.

<a href="/images/jan-screenshot.png" target="_blank"><img src="/images/jan-screenshot.png" alt="Screenshot of the Jan desktop app showing the chat interface with a local LLM" style="width:75%;border-radius:8px;margin:1.5rem auto;display:block;" /></a>

I tested it with story generation. The results were not great. Not comically bad, just uncanny. Early text-to-speech vibes. The models were not there yet for creative writing. But for chat and basic Q&A, it was serviceable. Good enough to be interesting, not good enough to be useful. The sweet spot where hobbies live.

The useful thing I learned was that underneath the UI, Jan was just running llama.cpp, a C++ inference engine that runs LLMs on consumer hardware. Once I realized that, I figured I could skip the app and talk to the engine directly. The fancy coffee machine was just a pump and a heater I could buy separately.

## [The Server Split](#the-server-split)

Once I knew the real engine was llama.cpp, I had an obvious thought: why run the model on my laptop when my desktop has a 1080 Ti with 11GB of VRAM? The kind of question that seems reasonable at the time and leads to spending a Saturday setting up Nginx.

<a href="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop" target="_blank"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop" alt="A data center aisle lined with server racks and organized cables" style="width:75%;border-radius:8px;margin:1.5rem auto;display:block;" /></a>

I set up llama-server on the desktop, put Nginx in front of it with a self-signed SSL cert, and pointed Jan's custom endpoint at it. Jan did not care where the model lived. All it needed was an OpenAI-compatible API. Suddenly my MacBook could drive a 7B model running on a machine in the other room. A small win, but it felt bigger than it was. I had built a client-server AI architecture in my apartment.

## [The Agent Awakening](#the-agent-awakening)

A chat interface is one thing. An AI that writes code for you is another.

OpenCode is an AI coding agent that runs in the terminal. Give it a task and it reads your codebase, edits files, and runs commands to get it done. Crucially, it works with any OpenAI-compatible API, which meant I could point it at my local server instead of paying for one.

I pointed OpenCode at my llama-server endpoint. Same model, same GPU, but now I had an agent that could actually do things. The first task I gave it was to refactor a tangled Python class. It read the file, traced the imports, made the edit, and ran the tests, all without me touching the keyboard. I sat there watching my own computer write code for me. It felt like hiring a junior developer who works for electricity.

The 1080 Ti chugged along at 25-30 tokens per second on Q4_K_M. It was enough. Slow enough that I would grab coffee, fast enough that I would stay in flow. The whole setup was held together with config files I barely understood, but it worked. That is the nice thing about building your own infrastructure. When it works, you feel clever. When it breaks, you learn something.

<a href="/images/local-llm-architecture.svg" target="_blank"><img src="/images/local-llm-architecture.svg" alt="Architecture diagram of the early setup: laptop clients (Jan, OpenCode) connect via HTTPS through Nginx reverse proxy to llama-server running on a desktop with a single GTX 1080 Ti" style="width:75%;border-radius:8px;margin:1.5rem auto;display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));" /></a>

## [Adding a Second GPU](#adding-a-second-gpu)

One GPU worked. So naturally I wanted to try two.

I added an RTX 6000 with 24GB. I hit every NVML driver mismatch along the way. Learned more about CUDA toolkit versions than I ever wanted to. I read forum posts from 2019 that sort of mentioned my error before trailing off without a solution. I eventually got both cards talking to the same llama.cpp instance. Getting two GPUs to split a model between them was oddly satisfying, though probably not in a way that makes sense to most people.

<a href="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop" target="_blank"><img src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=800&auto=format&fit=crop" alt="A PC build with a visible XFX Radeon RX 6700 XT graphics card and liquid cooling" style="width:75%;border-radius:8px;margin:1.5rem auto;display:block;" /></a>

From there the rabbit hole kept going. I found llama-swap, which lets you hot-swap models without restarting the server. I set up Speaches for self-hosted speech-to-text and TTS. I used Kimaki for tunneling local dev servers. Each one built on the previous. Each one introduced a new way for things to break. And each one was worth it.

The full setup, from laptop to nginx to llama-server to a beat-up 1080 Ti, was ridiculous and fun at the same time. Janky, slow, occasionally unreliable. But it was mine. Every token came from hardware I owned, using models I chose, through infrastructure I built.

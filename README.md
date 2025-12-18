# RSU Safe Harbor Calculator (Logic Engine)

A privacy-focused, offline-capable logic engine to calculate IRS Underpayment Penalties for high earners with RSUs (Restricted Stock Units).

## 🚀 Live Calculator
**Use the hosted, privacy-verified version of this tool here:**
👉 **[RSU Safe Harbor Checker](https://rsusafeharbor.com)**

## The Problem
Tech workers often face a "Double Taxation" surprise. Employers withhold RSUs at a flat **22%**, but many engineers are in the **32%, 35%, or 37%** tax brackets. This often triggers the **IRS Underpayment Penalty**.

Most existing calculators require you to upload sensitive salary data to a server. This project calculates your Safe Harbor status (100% vs 110% rule) entirely **client-side**.

## How the Math Works (IRS Pub 505)
This engine implements the **Safe Harbor Rule**:
1. If your Prior Year AGI was **under $150k**: You must pay **100%** of last year's tax.
2. If your Prior Year AGI was **over $150k**: You must pay **110%** of last year's tax.

## License
MIT License. Feel free to audit the `tax-logic.ts` file to verify the calculations.

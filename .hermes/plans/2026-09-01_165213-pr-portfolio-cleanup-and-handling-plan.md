# Portfolio PR Cleanup and Handling Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Reconcile every merged PR, stale remote branch, and unpublished local workstream in `leegordo/portfolio`, preserve anything valuable, and leave the repository with a safe repeatable PR gate.

**Architecture:** Treat remote `main` (`12210781313c6eff5be09cde9b146d2317cbc987`) as the current product baseline. First preserve divergent local work, then close or delete superseded branches, split the one potentially valuable unpublished branch into public-site code and private work-finding material, and finally add PR validation before changing branch protection.

**Tech Stack:** Git/GitHub CLI, Next.js 14 App Router, TypeScript, npm, GitHub Actions, GitHub Pages.

---

## Portfolio verdict

There is **no open PR queue**: GitHub reports zero open PRs, and PRs #1–#5 are already merged. The real work is repository reconciliation: five stale remote branches, five linked worktrees, a divergent local `main`, one dirty legacy copy worktree, and one unpublished work-finding branch that must not be merged wholesale into the public portfolio.

## Current state and evidence

- Repository: `https://github.com/leegordo/portfolio`
- Current remote baseline: `origin/main` at `1221078` (`content: refocus journal on client value (#5)`)
- Latest Pages deployment for that SHA: successful
- GitHub Pages build type: `workflow`; retain `gh-pages` until the Pages source configuration is deliberately migrated or proven disposable
- Branch protection on `main`: absent
- CI on PRs: absent; the existing `.github/workflows/deploy.yml` runs only after pushes to `main`
- Required local gates from `CLAUDE.md`: `npm run lint`, `npm run build`
- Canonical worktree is clean but checked out on merged PR #4's deleted remote branch
- Another linked worktree has `main` four commits ahead and 52 behind `origin/main`; it must not be reset until its commits are backed up
- `/Users/openclaw/Projects/Portfolio-Peggy` contains 15 modified files on a stale pre-redesign branch; it must not be pruned until its full binary patch is preserved and reviewed

## PR and branch disposition

### Historical PRs

| PR | State | Disposition |
|---|---|---|
| #1 — Remove TinaCMS, update LL case study, clean assets | Merged | Archive as complete; delete lingering `chore/local-updates` after readback confirms the merged commit remains reachable from `main` |
| #2 — Rewrite portfolio copy in Lee's voice | Merged | Archive as complete; delete lingering `copy/peggy-humanize-v2` after preserving/removing its clean linked worktree |
| #3 — Remove decorative eyebrow numbering | Merged | No branch cleanup required; use this as a content/design invariant for future work |
| #4 — Publish agentic design journal | Merged | Remove the clean `content/agentic-ai-journal` worktree/branch only after this plan is copied to a surviving current-base workspace |
| #5 — Refocus journal on client value | Merged | Treat as the latest content baseline; no further PR action |

### Remote branches without open PRs

| Branch | Evidence | Verdict | Action |
|---|---|---|---|
| `claude/website-redesign-modern-e52y4b` | Zero commits ahead; commit is already an ancestor of `main` | **CLOSE** | Delete remote branch |
| `claude/remove-ai-case-study-atA0L` | One commit ahead, 49 behind; it removes `content/current-projects.mdx` and AI assets that no longer exist on `main` | **CLOSE** | Delete remote branch; do not open a PR |
| `cursor/reposition-site-ft-hiring` | Two commits ahead, 30 behind; `/services` and Nokia 2016–2018 are already present, while its “US-based” copy is inaccurate and the old layout is superseded | **CLOSE** | Delete remote branch; do not cherry-pick or open a PR |
| `chore/local-updates` | Merged by PR #1 and fully behind current `main` | **CLOSE** | Delete remote branch after reachability check |
| `copy/peggy-humanize-v2` | Merged by PR #2 and fully behind current `main` | **CLOSE** | Delete remote branch after clean worktree removal |
| `gh-pages` | Pages API still reports it as the configured source despite workflow deployments | **HOLD** | Retain until a separate Pages-source migration is explicitly approved and verified |

### Local-only workstreams

| Workstream | Verdict | Reason |
|---|---|---|
| Local divergent `main` / `copy/peggy-humanize` at `e9f6917` | **CLOSE AFTER ARCHIVE** | Four old commits are 52 behind and include a 134 MB MOV plus files removed by later redesigns. Preserve as a bundle, then retire rather than attempting a PR. |
| Dirty `/Users/openclaw/Projects/Portfolio-Peggy` | **HOLD** | Fifteen stale copy edits may contain useful wording, but several target files no longer exist on current `main`. Preserve a patch, compare semantically, salvage only unique copy, then retire the worktree. |
| `work/finding-kit-20260828` | **HOLD / SPLIT** | The branch mixes deployable service pages with target research, outreach drafts, application materials, review screenshots, and a speculative Pencil artifact. It must never become one public PR. |

## Proposed PR sequence

1. **PR A — Add pull-request validation**
   - Add `.github/workflows/validate.yml` for `pull_request` targeting `main`.
   - Run `npm ci`, `npm run lint`, `npm run build`, and `git diff --check`.
   - Keep deployment in `.github/workflows/deploy.yml` push-only.
   - Merge this first, then require its check in branch protection.

2. **PR B — Optional fixed-scope service offers**
   - Create only after Lee approves the offers, prices, timelines, and positioning.
   - Rebuild from current `origin/main`; do not merge or rebase the entire work-finding branch.
   - Port only the four site files introduced by commit `8c69c3f`:
     - `app/services/[slug]/page.tsx`
     - `app/services/page.tsx`
     - `content/pages/services.json`
     - `lib/content.ts`
   - Remove decorative numbering such as `01—03` and per-offer `index` presentation to preserve the invariant established by PR #3.
   - Replace Figma-specific deliverables with Pencil.dev or tool-neutral wording, consistent with the current design workflow.
   - Reconcile the three low fixed prices with the existing `$2,500` sprint and `$4,500/mo` retainer so the site does not present contradictory value anchors.
   - Keep research, target lists, outreach, screenshots, application drafts, and speculative artifacts out of this PR.

3. **No public PR for the rest of `work/finding-kit-20260828`**
   - Move or archive `work-finding-kit/**` in a private/local project.
   - Move or archive `designs/work-finding/**` separately unless Lee explicitly chooses to publish the LangWatch specimen.
   - If the specimen is later published, use a dedicated content PR with current evidence rechecked, a clear independent-demo disclaimer, and no unrelated sales/application material.

## Step-by-step execution plan

### Task 1: Preserve every unpublished state before cleanup

**Objective:** Make destructive cleanup reversible without publishing stale or private content.

**Files:**
- Create outside the repo: a dated backup directory containing Git bundles and a binary patch
- Do not modify product files

**Steps:**

1. Re-read `git worktree list --porcelain` and `git status --short --branch` in all five worktrees.
2. Create a Git bundle containing `main`, `copy/peggy-humanize`, and `work/finding-kit-20260828`.
3. Export `/Users/openclaw/Projects/Portfolio-Peggy` with `git diff HEAD --binary` so staged and unstaged edits are captured together.
4. Record `sha256` checksums for the bundle and patch.
5. Verify the bundle with `git bundle verify` and verify the patch is non-empty.
6. Do not include `.env`, credentials, generated `.next`, or `out` content.

**Acceptance:** Every divergent branch and dirty diff can be restored before any branch, worktree, or ref is deleted.

### Task 2: Establish a clean current-base management worktree

**Objective:** Stop using deleted or divergent branches as the operational checkout.

**Steps:**

1. Fetch `origin` and verify `origin/main` still equals the pinned or newer expected SHA.
2. Preserve the old local `main` under an archive branch or the verified bundle before moving it.
3. Create a fresh worktree from current `origin/main` on a dedicated branch such as `chore/pr-reconciliation`.
4. Copy this plan into that surviving workspace before removing `/Users/openclaw/Projects/Portfolio-Agentic-Blog`.
5. Re-run `git status --short --branch` and confirm the fresh worktree starts clean except for the plan file if it is intentionally retained.

**Acceptance:** Cleanup proceeds from current remote `main`; no work happens from `405c806` or `e9f6917`.

### Task 3: Add PR validation before enforcing policy

**Objective:** Ensure future PRs receive checks before merge.

**Files:**
- Create: `.github/workflows/validate.yml`
- Do not modify: `.github/workflows/deploy.yml` except in a separate follow-up if duplication becomes a measured problem

**Steps:**

1. Create a branch from current `main`.
2. Add a Node 20 PR workflow with npm cache and frozen `npm ci` install.
3. Run lint, static export build, and `git diff --check` as named steps.
4. Run the same commands locally.
5. Open PR A and verify GitHub reports the new check on the PR head.
6. Merge only after the check passes.
7. Enable branch protection on `main` requiring a PR and the exact validation check; do not require a nonexistent review count unless Lee wants that solo-repo friction.
8. Push a harmless test branch or use the next real PR to verify direct unvalidated merges are blocked as intended.

**Acceptance:** Every new PR receives lint/build validation before merge; production deployment remains post-merge.

### Task 4: Reconcile and retire already-merged PR branches

**Objective:** Remove remote and local branch debris without losing history.

**Steps:**

1. Re-query open PRs; abort cleanup if any new PR appeared.
2. For `chore/local-updates` and `copy/peggy-humanize-v2`, verify their PR merge records and that their changes are reachable from current `main`.
3. Remove the clean `Portfolio-Peggy-current` worktree.
4. Remove the clean merged-journal worktree only after this plan survives elsewhere.
5. Delete the two merged remote branches.
6. Delete obsolete clean local branches only after `git worktree list` proves no worktree uses them.

**Acceptance:** PRs #1–#5 remain reachable in GitHub history, while merged branch refs no longer clutter the repository.

### Task 5: Close stale unassociated remote branches

**Objective:** Prevent obsolete agent branches from being mistaken for pending work.

**Steps:**

1. Re-run compare API checks against current `main` for all three branches.
2. Confirm `content/current-projects.mdx` and the removed AI image assets remain absent.
3. Confirm current `main` still contains `/services` and Nokia `2016–2018`.
4. Confirm current location copy remains truthful to Heredia, Costa Rica rather than the stale “US-based” claim.
5. Delete:
   - `claude/website-redesign-modern-e52y4b`
   - `claude/remove-ai-case-study-atA0L`
   - `cursor/reposition-site-ft-hiring`
6. Read back the remote branch list and verify only intended branches remain.

**Acceptance:** No obsolete remote branch is left looking like an unreviewed PR candidate.

### Task 6: Reconcile the dirty Peggy worktree

**Objective:** Rescue unique language without reviving the obsolete site architecture.

**Steps:**

1. Compare its binary patch against current `origin/main` by intent, not by applying it wholesale.
2. Discard changes targeting removed routes/content such as `current-projects.mdx` or old product pages unless there is a current equivalent.
3. For surviving topics—hero, about, contact, footer, and case-study copy—prepare a small table of unique wording versus wording already superseded by PRs #2, #4, and #5.
4. If no clearly stronger unique copy remains, mark the workstream **CLOSE**.
5. If useful copy remains, create one narrow content PR from current `main`, touch only current files, run Peggy/humanization review, lint, build, and mobile checks.
6. After either merge or rejection, remove the dirty worktree only after the patch backup verifies.

**Acceptance:** No stale code is applied; any rescued copy lands as a current-base content PR with explicit review.

### Task 7: Split the work-finding branch safely

**Objective:** Separate public portfolio code from private commercial/application material.

**Steps:**

1. Preserve the original branch in the verified bundle.
2. Move/archive these outside the public portfolio before any PR:
   - `work-finding-kit/**`
   - `work-finding-kit/kraken/**`
   - `work-finding-kit/outreach/**`
   - `work-finding-kit/research/**`
   - `work-finding-kit/review/**`
3. Keep `designs/work-finding/langwatch-review-checkpoint.pen` and its PNG private unless Lee explicitly approves publication.
4. Present the three service offers as a product decision: approve, revise, or reject prices/scope.
5. If approved, create PR B from current `main` and port only the four service implementation/content files.
6. Remove decorative numbering, update Figma references, reconcile pricing, and review copy against the current portfolio voice.
7. Add focused route/content tests if a test harness is introduced; otherwise rely on static generation plus deterministic route checks.
8. Verify desktop and 375px layouts for `/services` and each generated service route.

**Acceptance:** No prospect research, outreach draft, job application, or private review bundle is exposed through a public PR.

### Task 8: Verify repository end state

**Objective:** Prove the cleanup did not lose work or break the site.

**Commands:**

- `gh pr list --state open --limit 100`
- `gh api repos/leegordo/portfolio/branches --paginate`
- `git worktree list --porcelain`
- `git status --short --branch` in every surviving worktree
- `npm ci`
- `npm run lint`
- `npm run build`
- `git diff --check`

**Steps:**

1. Confirm the expected open PR count and disposition.
2. Confirm only `main`, `gh-pages`, active PR branches, and deliberately archived branches remain remotely.
3. Confirm no worktree points to a deleted branch.
4. Confirm no unpublished patch or bundle failed verification.
5. Confirm lint/build pass on the exact candidate SHA.
6. After each authorized merge, verify the merged commit is reachable from `origin/main` and the Pages workflow succeeds.
7. Smoke-check `https://leegordon.design` only after a production merge; PR checks alone are not deployment proof.

## Files likely to change

- `.github/workflows/validate.yml` — new PR gate
- Optional PR B only:
  - `app/services/[slug]/page.tsx`
  - `app/services/page.tsx`
  - `content/pages/services.json`
  - `lib/content.ts`
- This plan: `.hermes/plans/2026-09-01_165213-pr-portfolio-cleanup-and-handling-plan.md`

## Tests and validation

- Required on every code/content PR: `npm ci`, `npm run lint`, `npm run build`, `git diff --check`
- Required for service-offer PR: verify generated service routes, unknown-slug 404 behavior, internal links, metadata, no horizontal overflow at 375px, keyboard focus visibility, and reduced-motion behavior
- Required after merge: successful `Deploy Next.js site to Pages` run for the merged `main` SHA and a live-site smoke check

## Risks and tradeoffs

- **Data loss:** Multiple linked worktrees contain divergent or dirty work. Backup and verification must precede cleanup.
- **Accidental publication:** The work-finding branch contains outreach, target research, and job-application material inappropriate for the public portfolio.
- **Positioning conflict:** The proposed $350/$650/$950 offers may undercut the existing $2,500 sprint and $4,500/month retainer.
- **Design-system regression:** The candidate service pages reintroduce decorative numbering, contradicting merged PR #3 and Lee's stated preference.
- **Workflow mismatch:** Candidate copy promises Figma deliverables, while the current canonical design workflow is Pencil.dev.
- **Pages outage risk:** Do not delete `gh-pages` merely because deployment now uses Actions; the Pages API still lists that branch as source metadata.
- **Solo-repo friction:** Requiring external approval on every PR may be unnecessary; require CI first and add reviewer rules only if Lee wants them.

## Decisions needed before execution

1. Approve or reject publication of the three fixed-scope service offers, including prices and turnaround times.
2. Decide whether the LangWatch Pencil specimen should remain private, move to another repo, or become a standalone portfolio artifact.
3. Decide whether branch protection should require one human approval or only passing checks for this solo repository.

## Definition of done

- Zero unclassified PRs or candidate branches
- All unpublished local work backed up and recoverable
- Merged and superseded branches removed without losing history
- Private work-finding/application material excluded from the public portfolio
- PR validation runs automatically on every future PR
- `main` passes lint/build and deploys successfully
- Surviving worktrees are clean, current, and attached to intentional branches

# Branch Protection Setup Guide

This document outlines how to configure branch protection rules for the e-commerce-demo repository to enforce code quality and collaboration standards.

## Branch Protection Rules

### Main Branch (`main`)
**Purpose:** Production-ready code, highest quality standards

**Required Settings:**
- ✅ Require pull request reviews before merging
  - Required number of approvals: 1
  - Dismiss stale pull request approvals when new commits are pushed
  - Require review from Code Owners (if CODEOWNERS file exists)
  - Restrict who can dismiss pull request reviews (repository admins only)

- ✅ Require status checks to pass before merging
  - Require branches to be up to date before merging
  - Status checks that must pass:
    - `frontend-lint`
    - `frontend-build`
    - `frontend-test`
    - `security-scan`
    - `all-checks`

- ✅ Require conversation resolution before merging
- ✅ Require signed commits (optional, but recommended)
- ✅ Require linear history
- ❌ Allow force pushes: **DISABLED**
- ❌ Allow deletions: **DISABLED**

### Dev Branch (`dev`)
**Purpose:** Development integration branch, moderate quality standards

**Required Settings:**
- ✅ Require status checks to pass before merging
  - Status checks that must pass:
    - `frontend-lint`
    - `frontend-build`
    - `frontend-test`
    - `security-scan`

- ✅ Require conversation resolution before merging
- ❌ Allow force pushes: **DISABLED**
- ❌ Allow deletions: **DISABLED**

## How to Configure

1. Go to your repository on GitHub: https://github.com/midega-g/e-commerce-demo
2. Click on **Settings** tab
3. In the left sidebar, click **Branches**
4. Under "Branch protection rules", click **Add rule**
5. Configure for each branch as specified above

## Enforcement

- **Main branch:** All changes must go through pull requests. Direct pushes are blocked.
- **Dev branch:** Pull requests are recommended but not strictly required for fast iteration.
- **Feature branches:** No protection - developers can push directly for active development.

## Benefits

- **Code Quality:** Automated tests and linting prevent bugs
- **Security:** Dependency scanning and security checks
- **Collaboration:** Required reviews ensure knowledge sharing
- **Stability:** Protected main branch prevents accidental breaking changes

## Troubleshooting

If CI checks are failing:
1. Check the Actions tab for detailed error logs
2. Fix any linting or test failures locally
3. Push fixes to your branch
4. CI will re-run automatically

For branch protection issues:
1. Ensure you're pushing to the correct branch
2. Create pull requests for protected branches
3. Wait for required approvals and status checks
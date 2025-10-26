+++
title = "Git Flow & Branching Strategy"
description = "Our simplified Git workflow and branching strategy"
date = 2025-01-27T10:00:00+00:00
updated = 2025-01-27T10:00:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Simplified Git workflow for rapid development and reliable releases"
toc = true
top = false
+++

This simplified Git Flow balances rapid iteration with reliable releases. It's designed to scale with our team and project complexity.

---

## 🎯 **Git Flow Overview**

We use a **simplified Git Flow** that prioritizes:

- **🚀 Rapid Development**: Quick feature development and bug fixes
- **🔄 Continuous Integration**: Regular merges to main branch
- **📦 Reliable Releases**: Stable release branches for production
- **🛡️ Quality Gates**: Code review and testing before deployment

---

## 🌿 **Branch Structure**

### **Main Branches**

#### **`main` (Production)**
- **Purpose**: Production-ready code, always deployable
- **Protection**: Requires PR approval and CI/CD passing
- **Deployment**: Automatic deployment to production

#### **`develop` (Integration)**
- **Purpose**: Integration branch for features and bug fixes
- **Protection**: Requires PR approval
- **Deployment**: Automatic deployment to staging

### **Supporting Branches**

#### **Feature Branches**
- **Naming**: `gitusername/ticketnumber/scope-description` (e.g., `john/1234/user-authentication`)
- **For non-issue work**: `gitusername/0/scope-description`
- **Source**: `develop`
- **Target**: `develop`
- **Lifetime**: Until feature is complete and tested

#### **`release/*` (Release Preparation)**
- **Naming**: `release/version-number` (e.g., `release/v1.2.0`)
- **Source**: `develop`
- **Target**: `main` and `develop`

#### **`hotfix/*` (Critical Fixes)**
- **Naming**: `hotfix/descriptive-name` (e.g., `hotfix/security-patch`)
- **Source**: `main`
- **Target**: `main` and `develop`

---

## 🔄 **Development Workflow**

### **1. Feature Development**

```bash
# Start new feature (using our naming convention)
git checkout develop
git pull origin develop
git checkout -b john/1234/user-authentication

# Develop and commit
git add .
git commit -m "feat: add user authentication system

- Implement JWT-based authentication
- Add login/logout functionality
- Include password reset capability

Closes #123"

# Push and create PR
git push origin john/1234/user-authentication
# Create PR to develop branch
```

### **2. Release Process**

```bash
# Create release branch
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0

# Final testing and bug fixes
git commit -m "fix: resolve final release issues"
git push origin release/v1.2.0

# Create PR to main branch
# After approval: merge to main, tag, and merge back to develop
```

### **3. Hotfix Process**

```bash
# Critical bug in production
git checkout main
git pull origin main
git checkout -b hotfix/security-patch

# Fix the issue
git commit -m "fix: patch critical security vulnerability

- Fix SQL injection in user input
- Add input validation
- Update security headers

Closes #456"

# Create PR to main
# After approval: merge to main, tag, and merge to develop
```

---

## 📝 **Commit Message Standards**

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **Commit Types**

- **`feat`**: New feature
- **`fix`**: Bug fix
- **`docs`**: Documentation changes
- **`style`**: Code style changes
- **`refactor`**: Code refactoring
- **`test`**: Adding or updating tests
- **`chore`**: Maintenance tasks

### **Examples**

```bash
# Feature
git commit -m "feat(auth): add OAuth2 authentication

- Implement Google OAuth2 provider
- Add social login buttons

Closes #123"

# Bug fix
git commit -m "fix(api): resolve user creation race condition

- Add database transaction wrapper
- Implement proper error handling

Fixes #456"
```

---

## 🚀 **Release Management**

### **Release Versioning**

We follow [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes, incompatible API changes
- **MINOR**: New functionality, backward compatible
- **PATCH**: Bug fixes, backward compatible

### **Release Process**

1. **Planning**: Review completed features in `develop`
2. **Preparation**: Create release branch, final testing
3. **Deployment**: Merge to `main`, tag, deploy to production
4. **Post-Release**: Monitor production, merge back to `develop`

---

## 🛡️ **Branch Protection Rules**

### **Main Branch Protection**
- **Require PR**: All changes must go through pull requests
- **Require Reviews**: At least 1 approval required
- **Require Status Checks**: CI/CD must pass

### **Develop Branch Protection**
- **Require PR**: All changes must go through pull requests
- **Require Reviews**: At least 1 approval required
- **Require Status Checks**: CI/CD must pass

### **Feature Branch Guidelines**
- **Naming Convention**: `gitusername/ticketnumber/scope-description`
- **Lifetime**: Keep branches short-lived (1-2 weeks max)
- **Size**: One feature per branch, keep changes focused
- **Cleanup**: Delete branches after merging

---

## 🚨 **Emergency Procedures**

### **Critical Bug in Production**
1. **Assess Impact**: Determine severity and scope
2. **Create Hotfix**: Branch directly from `main`
3. **Quick Fix**: Implement minimal fix to resolve issue
4. **Testing**: Basic testing to ensure fix works
5. **Deploy**: Merge to `main` and deploy immediately
6. **Document**: Update changelog and release notes

---

## 📚 **Best Practices**

### **Do's**
- ✅ **Keep branches short-lived** (1-2 weeks maximum)
- ✅ **Write clear commit messages** following conventional format
- ✅ **Test thoroughly** before creating PRs
- ✅ **Review code promptly** when assigned

### **Don'ts**
- ❌ **Commit directly to main/develop** (always use PRs)
- ❌ **Leave branches open** for extended periods
- ❌ **Merge without testing** or code review
- ❌ **Use force push** on shared branches
- ❌ **Ignore CI/CD failures** or warnings

---

## 💡 **Practical Examples**

### **Example 1: New Feature Development**

```bash
# 1. Start feature from GitHub issue #1234
git checkout develop
git pull origin develop
git checkout -b sarah/1234/payment-integration

# 2. Develop feature
git add .
git commit -m "feat(payment): add Stripe payment integration

- Implement Stripe checkout flow
- Add payment success/failure handling
- Include webhook processing

Closes #1234"

# 3. Push and create PR
git push origin sarah/1234/payment-integration
# Create PR to develop branch with proper labels
```

### **Example 2: Bug Fix**

```bash
# 1. Start bug fix from GitHub issue #5678
git checkout develop
git pull origin develop
git checkout -b mike/5678/fix-login-bug

# 2. Fix the bug
git add .
git commit -m "fix(auth): resolve login redirect loop

- Fix infinite redirect in OAuth callback
- Add proper error handling for failed auth
- Update session management

Fixes #5678"

# 3. Push and create PR
git push origin mike/5678/fix-login-bug
```

### **Example 3: Non-Issue Work**

```bash
# 1. Start non-issue work (refactoring, cleanup, etc.)
git checkout develop
git pull origin develop
git checkout -b alex/0/refactor-api-validation

# 2. Make changes
git add .
git commit -m "refactor(api): improve input validation

- Centralize validation logic
- Add better error messages
- Reduce code duplication"

# 3. Push and create PR
git push origin alex/0/refactor-api-validation
```

### **Example 4: Hotfix**

```bash
# 1. Critical production issue
git checkout main
git pull origin main
git checkout -b hotfix/security-vulnerability

# 2. Fix the issue
git add .
git commit -m "fix(security): patch XSS vulnerability

- Sanitize user input in profile display
- Add CSP headers
- Update input validation

Fixes #9999"

# 3. Push and create PR to main
git push origin hotfix/security-vulnerability
# After merge: merge back to develop and delete branch
```

---

*This Git Flow strategy evolves with our team and project needs. Regular retrospectives help us identify areas for improvement and adapt our workflow accordingly.*


+++
title = "Pull Request Templates & Guidelines"
description = "Standardized PR templates and review guidelines for consistent development workflow"
date = 2025-01-27T10:00:00+00:00
updated = 2025-01-27T10:00:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"
+++

## 🎯 **PR Templates Overview**

We use **standardized PR templates** to ensure consistency and completeness in our pull requests. Our templates are organized by type of change to make them easier to find and use.

---

## 📋 **Available Templates**

For detailed templates with usage guidelines, visit our [PR Templates section](@/docs/engineering/templates/_index.md):

- 🎫 **[Git Issue Ticket](@/docs/engineering/templates/git-issue-ticket.md)** - Creating GitHub issues and tickets
- 📝 **[PR Template](@/docs/engineering/templates/pr-template.md)** - All pull requests (frontend & backend)
- 🔍 **[Spike/Feature R&D](@/docs/engineering/templates/spike-feature-rd.md)** - Research and exploration
- 🐛 **[Bug Reporting](@/docs/engineering/templates/bug-reporting.md)** - Reporting bugs and issues

---

## 📝 **General PR Template**

For quick reference, here's our general template that can be used for any type of change:

```markdown
## 📝 Description

Brief description of what this PR accomplishes and why it's needed.

## 🎯 Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update (handbook, readme, instructions)
- [ ] 🎨 Code style update (formatting, missing semi colons, etc; no logic change)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement (no feature itself)
- [ ] ✅ Test addition or update 
- [ ] 🔧 Configuration in the repo change
- [ ] 🚀 CI/CD or deployment change

## 🔗 Related Issues
Closes #[issue number]
Fixes #[issue number]
Related to #[issue(s) number]

## 🧪 Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing completed

## 📸 Screenshots / Video / Evidence working (if applicable)
Add audio/visuals as needed

## 📋 Self-Checklist [Not on actual template]
- [ ] Pre-commit is green
- [ ] Code follows our style guidelines
- [ ] Self-review of task completed
- [ ] PR is open in draft ASAP for feedback
- [ ] Granular & conventional commits
- [ ] Documentation updated (if applicable)
- [ ] Tests added/updated (if applicable)
- [ ] No console errors or warnings introduced
- [ ] No TODOs without explanation or follow-up tickets
- [ ] Performance impact considered
- [ ] Security implications reviewed
- [ ] Holistic-platform implications reviewed
- [ ] PR template is ready to be shared & green!

## 🚀 Deployment Notes

Any special deployment considerations or database migrations needed.

## 📚 Additional Context

Any additional information that reviewers should know about this change. 
- SQL to be run:
  ```sql
  ALTER TABLE users ADD COLUMN email_verified BOOLEAN DEFAULT FALSE;
  UPDATE users SET email_verified = TRUE WHERE created_at < '2024-01-01';
  ```

- BASH commands to be run:
  ```bash
  npm run build:production
  docker-compose restart api-service
  ```

- JSON schemas:
  ```json
  {
    "type": "object",
    "properties": {
      "userId": {"type": "string"},
      "preferences": {
        "type": "object",
        "properties": {
          "notifications": {"type": "boolean"}
        }
      }
    }
  }
  ```
```

---

## 📋 **PR Review Guidelines**

### **For Authors**

#### **Before Creating PR**
- [ ] Code is complete and functional
- [ ] Tests are written and passing
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No debugging code or console logs

#### **PR Description**
- [ ] Clear, concise description
- [ ] Issue numbers linked
- [ ] Screenshots included (if applicable)
- [ ] Testing steps documented
- [ ] Deployment notes added

### **For Reviewers**

#### **Review Focus Areas**
- **Functionality**: Does the code do what it's supposed to do?
- **Code Quality**: Is the code readable and maintainable?
- **Testing**: Are there adequate tests?
- **Security**: Any security vulnerabilities?
- **Performance**: Any performance implications?
- **Accessibility**: Accessibility requirements met?

#### **Review Response Time**
- **Urgent Issues**: Respond within 4 hours
- **Normal PRs**: Respond within 24 hours
- **Large Changes**: Respond within 48 hours

#### **Review Feedback**
- **Be Constructive**: Provide specific, actionable feedback
- **Ask Questions**: Clarify unclear implementations
- **Suggest Alternatives**: Offer better approaches when possible
- **Focus on Code**: Critique the code, not the person

---

## 🚫 **Common PR Issues to Avoid**

### **Don't Do This**

- ❌ **Large PRs**: Keep changes focused and manageable
- ❌ **Unrelated Changes**: One logical change per PR
- ❌ **Incomplete Work**: Don't submit work-in-progress
- ❌ **Missing Tests**: Always include relevant tests
- ❌ **Poor Descriptions**: Vague or missing descriptions
- ❌ **Ignoring Feedback**: Address reviewer comments
- ❌ **Force Pushing**: Don't rewrite history on shared branches

### **Do This Instead**

- ✅ **Small, Focused PRs**: One feature or fix per PR
- ✅ **Complete Changes**: Fully implemented and tested
- ✅ **Clear Descriptions**: Explain what and why
- ✅ **Comprehensive Testing**: Cover all scenarios
- ✅ **Address Feedback**: Respond to all comments
- ✅ **Clean History**: Maintain clear commit history

---

## 🔄 **PR Lifecycle**

### **1. Creation**
- Create feature branch from `develop`
- Implement changes with clear commits
- Write comprehensive PR description
- Request appropriate reviewers

### **2. Review Process**
- Reviewers provide feedback
- Address all comments and suggestions
- Update code as needed
- Re-request review when ready

### **3. Approval & Merge**
- All reviewers approve
- CI/CD checks pass
- Merge to target branch
- Delete feature branch

### **4. Post-Merge**
- Monitor deployment
- Verify functionality
- Update related documentation
- Close related issues

---

## 📊 **PR Metrics & KPIs**

### **Key Metrics to Track**

- **PR Size**: Average lines of code per PR
- **Review Time**: Time from creation to first review
- **Merge Time**: Time from creation to merge
- **Review Quality**: Number of review rounds
- **Rejection Rate**: Percentage of PRs rejected

### **Target Benchmarks**

- **PR Size**: <500 lines of code
- **First Review**: <24 hours
- **Merge Time**: <3 days
- **Review Rounds**: <2 rounds
- **Rejection Rate**: <5%

---

## 🔮 **Future Improvements**

### **Short-term Goals**

- **Automated PR Templates**: GitHub integration
- **Review Assignment**: Automatic reviewer assignment
- **Quality Gates**: Automated quality checks
- **PR Analytics**: Better metrics and insights

### **Long-term Vision**

- **AI-Powered Reviews**: Automated code review assistance
- **Smart Templates**: Context-aware template suggestions
- **Review Automation**: Automated review processes
- **Integration**: Better CI/CD and deployment integration

---

*These PR templates and guidelines ensure consistency and quality in our development workflow. They evolve with our team needs and project requirements.*

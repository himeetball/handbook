+++
title = "PR Template"
description = "Unified pull request template for both frontend and backend changes"
date = 2025-01-27T10:00:00+00:00
updated = 2025-10-26T01:20:44+01:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"
+++

## 📝 **PR Template**

### **Unified Template for Frontend & Backend**

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
- [ ] Cross-browser testing (frontend)
- [ ] API testing (backend)

## 📸 Screenshots / Video / Evidence working (if applicable)

Add audio/visuals as needed

## 📋 Self-Checklist

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

### SQL to be run (if applicable):
```sql
ALTER TABLE users ADD COLUMN email_verified BOOLEAN DEFAULT FALSE;
UPDATE users SET email_verified = TRUE WHERE created_at < '2024-01-01';
```

### BASH commands to be run (if applicable):
```bash
npm run build:production
docker-compose restart api-service
```

### JSON schemas (if applicable):
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

## 📝 **Usage Guidelines**

### **When to Use This Template**

- **All PRs**: Use this template for every pull request
- **Frontend Changes**: React, Vue, Angular, CSS, HTML changes
- **Backend Changes**: API, database, server-side logic changes
- **Full-Stack Changes**: Changes affecting both frontend and backend

### **Best Practices**

- **Complete Description**: Explain what and why
- **Link Issues**: Always link related issues
- **Comprehensive Testing**: Test all scenarios
- **Self-Review**: Review your own code first
- **Documentation**: Update docs when needed

### **Success Criteria**

- All checklist items completed
- Tests pass
- Code follows style guidelines
- Documentation updated
- Ready for review

---

*This unified template works for both frontend and backend changes, ensuring consistency across all PRs.*

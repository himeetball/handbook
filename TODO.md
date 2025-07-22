# MeetBall Handbook TODOs

## Code Block Rendering Issues

### 🔧 High Priority
- [ ] **Fix line-by-line code block rendering** 
  - **Issue**: Code blocks are rendered with individual `<span>` elements for each line
  - **Impact**: Makes text selection awkward and unnatural
  - **Research**: Duckquill theme has same issue, need to find better solution
  - **Goal**: Unified code block rendering for smooth text selection
  - **Files affected**: Syntax highlighting, Zola theme templates

### 🎨 UI/UX Improvements
- [x] ✅ Add copy buttons to code blocks
- [x] ✅ Use clipboard icons instead of "Copy" text
- [x] ✅ Create example preview shortcode for markdown guide
- [x] ✅ Scale down preview boxes with proper margins
- [x] ✅ Enable LaTeX/KaTeX math rendering

### 📝 Content
- [ ] Add more language examples to markdown guide
- [ ] Create deployment documentation
- [ ] Add troubleshooting section

---
*Last updated: [Current Date]*
*Repository: https://github.com/thesummeet/handbook*
# Git Terminal Quick Guide

### **Scenario 1: Undoing a Commit to Main and Moving Changes to Another Feature Branch**

```bash
# Ensure you are on the main branch
git checkout main

# Undo the last commit, keeping changes
git reset --soft HEAD~1

# Create a new feature branch
git checkout -b feature-branch

# Commit the changes to the new branch
git add .
git commit -m "Moved changes to feature-branch"
```

---

### **Scenario 2: Pulling and Merging Main into a Feature Branch Before a Pull Request**

```bash
# Switch to the feature branch
git checkout feature-branch

# Pull the latest changes from main
git pull origin main

# If there are conflicts, resolve them in a text editor

# After resolving conflicts, stage and commit the merge
git add .
git commit -m "Merged main into feature-branch"
```

---

### **Scenario 3: Committing Changes to a Feature Branch**

```bash
# Ensure you are on the feature branch
git checkout feature-branch

# Stage changes for commit
git add .

# Write a clear commit message and commit changes
git commit -m "Your clear and concise commit message"
```

---

### **Scenario 4: Creating a New Feature Branch from an Updated Main Branch**

```bash
# Switch to the main branch
git checkout main

# Update the main branch
git pull origin main

# Create a new feature branch from the updated main branch
git checkout -b new-feature-branch
```

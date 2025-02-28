## One-Time Setup

1. **Create a Repository**

   - One team member should create the repository and add all teammates as collaborators.

2. **Branching Strategy**

   - Use only the `main` branch (no `develop` branch, no 'team-member-name" branches).
   - Protect the `main` branch on GitHub:
     - Go to **Settings** → **Branches** → **Branch protection rules**
     - Enable **Require pull request reviews before merging**
     - Enable **Require status checks to pass before merging** (if applicable)

3. **Project Skeleton Setup**

   - Before creating feature branches, establish the basic structure of the frontend and backend:
     - At a minimum, create the necessary folders.
     - Implement a dummy backend endpoint.
     - Set up a dummy frontend component or page.
   - Submit a single PR for this initial setup.

4. **Ready to Work**
   - Once the skeleton is merged, teammates can break off into separate tasks.

---

## When Starting a New Feature

- Always create a **new branch** for each feature:
  ```sh
  git checkout main
  git pull origin main  # Ensure you're up to date
  git checkout -b feature-branch-name
  ```
- Work on your feature within this branch.

---

## Best Practices While Developing

- Commit and test your code incrementally.
- Keep changes small and manageable.

---

## When Your Feature is Complete

1. **Sync with the Latest Changes**

   - Before submitting a PR, ensure your branch is up to date with `main`:
     ```sh
     git checkout main
     git pull origin main
     git checkout feature-branch-name
     git merge main
     ```
   - Resolve any merge conflicts if needed.

2. **Code Review & Merging**

   - Push your changes and create a pull request on GitHub:
     ```sh
     git push origin feature-branch-name
     ```
   - Only merge when teammates are available to review.
   - Ideally, involve a TA or instructor in the review process.

3. **Pull Requests (PRs)**

   - Always use PRs for merging code.
   - Ensure your PR is reviewed and approved before merging.

4. **Clean Up**
   - After merging( be super sure your code is in main), delete the branch to keep the repository clean:
     ```sh
     git branch -d feature-branch-name  # Delete locally
     git push origin --delete feature-branch-name  # Delete remotely
     ```
   - **Old branches can cause problems** if left undeleted.

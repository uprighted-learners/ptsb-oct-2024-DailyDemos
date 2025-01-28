# GitHub Desktop Quick Guide

## Scenario 1: Undoing a Commit to Main and Moving Changes to Another Feature Branch

1. **Open GitHub Desktop**

   - Ensure the `main` branch is selected.

2. **Undo the Commit**

   - Go to the "History" tab.
   - Right-click on the latest commit and select **"Undo Commit"**.

3. **Create a New Feature Branch**

   - Click on "Branch" in the menu bar and select **"New Branch"**.
   - Name the new branch (e.g., `feature-branch`) and create it from `main`.

4. **Move Changes to the Feature Branch**
   - Switch to the newly created branch.
   - The undone changes will appear in the "Changes" tab.
   - Commit these changes to the feature branch.

---

## Scenario 2: Pulling and Merging Main into a Feature Branch Before a Pull Request

1. **Switch to the Feature Branch**

   - In GitHub Desktop, select your feature branch.

2. **Pull Changes from Main**

   - Click on "Branch" in the menu bar and select **Update From main**.

3. **Resolve Merge Conflicts (if any)**

   - If there are conflicts, GitHub Desktop will notify you.
   - Follow the prompts to open a text editor, resolve conflicts, and save changes.

4. **Commit the Merge**
   - Once conflicts are resolved (if any) in VSCode, and return to GitHub Desktop and commit the merge.

---

## Scenario 3: Committing Changes to a Feature Branch

1. **Switch to the Feature Branch**

   - Ensure you are on the feature branch where you want to commit changes.

2. **Stage Changes**

   - In the "Changes" tab, review the files you’ve modified.
   - Check the boxes next to the files you want to include in the commit.

3. **Write a Commit Message**

   - Enter a clear and concise commit message in the message box above the Description Text Field

4. **Commit Changes**
   - Click the **"Commit to {branch-name}"** button.

---

## Scenario 4: Creating a New Feature Branch from an Updated Main Branch

1. **Switch to the Main Branch**

   - In GitHub Desktop, select the `main` branch.

2. **Update the Main Branch**

   - Click **"Fetch Origin"** and then **"Pull Origin"** to ensure `main` is up to date.

3. **Create a New Feature Branch**

   - Click on "Branch" in the menu bar and select **"New Branch"**.
   - Name the new branch and create it from `main`.

4. **Switch to the New Branch**
   - After creating the branch, GitHub Desktop will automatically switch to it.
   - Begin making changes as needed.

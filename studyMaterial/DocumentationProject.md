# Documentation learning journey BEFEDA
### Project: Handbook Documentation 
### Altimetrik Matías Charco 2023

### Technical document Handbook
​​
#

## Documentation Git

# HU 49

	PERSONAL INTRODUCTION I GOT FROM SALESFORCE:
Collaborate to Win
Modern version control systems are designed to help address problems that teams face when collaborating.

Solving the problem of working together takes more than just a great VCS like Git—it also requires you to step back and assess your approach. Breaking down silos and embracing more perspectives and conversations can enable you and your team to deliver better software. There are tools and workflows designed for the express purpose of improving communication and overall quality.



2	KEY TERMS USING GITHUB: 
•	Repositories: A collection of source files used to compile your project.

•	Commits: A snapshot of your project as it existed at a specific point in time. You create commits as you work on your project to indicate points when you added and removed discrete units of work.

•	Branch: A series of commits that represent the changes in your project over time. Every repository has a default branch, which contains the production-ready version of your code. Create additional branches when you’re working on new features, fixing bugs, or making other changes to your project. These branches keep your experimental code separate from your tested production code.

•	Merge: The combined history of two or more branches. Most of the time, you’ll merge your feature branch into the default or deployed branch of the repository in order to move the features into production.

•	Tag: A pointer to a specific commit, which provides a persistent reference to an event. Typically, tags are used with semantic versioning to represent points when your application was released.
•	Issues:  Have general discussions about your project, make plans for new features, and discuss bugs. An issue is only a discussion, no actual changes to code take place here.
•	Pull requests:  A pull request is a package of commits you’re requesting to be merged into the default branch. A pull request provides a place to discuss the changes you’re proposing and invite other team members to comment and complete code reviews. Pull requests also help you see the result of automated tests and many other cool integrations.

# !IMPORTANT commands

First wee configure local: 
git config –system
git config --global
git config—local
git config --global user.name "First Last"
git config --global user.email you@email.com
git branch myfeaturebranch //CREATE BRANCH
git checkout myfeaturebranch  
The local and remote repositories only interact when you run one of the four network commands in Git: git clone, git fetch, git pull, and git push.
Retrieve a full copy of the repository from GitHub: git clone <CLONE-URL>. Replace <CLONE-URL>with the clone URL you copied above. You should see something like this:

To send changes:
1.	Type git push -u origin myfeaturebranch
2.	When asked, enter your GitHub username and then your password.

(Best practices for of course will be allways commit -> Pull request)


# HU 48
Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

Note that all of the commands presented below merge into the current branch. The current branch will be updated to reflect the merge, but the target branch will be completely unaffected. Again, this means that git merge is often used in conjunction with git checkout for selecting the current branch and git branch -d for deleting the obsolete target branch.

How it works
Git merge will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches. The following examples in this document will focus on this branch merging pattern. In these scenarios, git merge takes two commit pointers, usually the branch tips, and will find a common base commit between them. Once Git finds a common base commit it will create a new "merge commit" that combines the changes of each queued merge commit sequence.

Say we have a new branch feature that is based off the main branch. We now want to merge this feature branch into main.


The Rebase Option
As an alternative to merging, you can rebase the feature branch onto main branch using the following commands:

git checkout feature
git rebase main


This moves the entire feature branch to begin on the tip of the main branch, effectively incorporating all of the new commits in main. But, instead of using a merge commit, rebasing re-writes the project history by creating brand new commits for each commit in the original branch.


The major benefit of rebasing is that you get a much cleaner project history. First, it eliminates the unnecessary merge commits required by git merge.

https://www.atlassian.com/git/tutorials/merging-vs-rebasing
https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase



# HU # 58 https://trello.com/c/I8HE3dwr/58-git-branching-strategies-and-flows

What is Gitflow?
Gitflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches.
Gitflow can be used for projects that have a scheduled release cycle and for the DevOps best practice of continuous delivery. This workflow doesn’t add any new concepts or commands beyond what’s required for the Feature Branch Workflow.

Gitflow is really just an abstract idea of a Git workflow. This means it dictates what kind of branches to set up and how to merge them together. We will touch on the purposes of the branches below.

Develop and main branches
Instead of a single main branch, this workflow uses two branches to record the history of the project. The main branch stores the official release history, and the develop branch serves as an integration branch for features. It's also convenient to tag all commits in the main branch with a version number.
The first step is to complement the default main with a develop branch. A simple way to do this is for one developer to create an empty develop branch locally and push it to the server:
git branch develop
git push -u origin develop
This branch will contain the complete history of the project, whereas main will contain an abridged version. Other developers should now clone the central repository and create a tracking branch for develop.
Feature branches
Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of main, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with main.


Creating a feature branch
Without the git-flow extensions:
git checkout develop
git checkout -b feature_branch
When using the git-flow extension:
git flow feature start feature_branch
Continue your work and use Git like you normally would.

Release branches


Making release branches is another straightforward branching operation. Like feature branches, release branches are based on the develop branch. A new release branch can be created using the following methods.


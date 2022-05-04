# Health check surveys

The practice of surveying technical teams on the "health" of their projects was [masterminded by Spotify](//engineering.atspotify.com/2014/09/squad-health-check-model/) as a means of monitoring how their technical teams are doing.

We have adapted this practice to our own needs. Every few months, we send an online survey to every internal contributor to our software projects. The questions change over time, but they always cover 10 broad indicators of project health. These are described below.

The health check surveys provide numerous benefits:

- They serve as an early-warning system for projects that are steadily going off course, allowing management to respond and change their focus — for example by diverting resources to the teams most under strain — long before problems escalate.
- They help teams themselves to autonomously learn and improve, by reflecting on what they're doing that's working, and not working.

Health check surveys are reinforced by [retrospectives](/practices/retrospectives) and [workshops](/practices/workshops), which have similar aims.

## Questions

All questions should be score 1 to 5, where 1 is "strongly agree" and 5 is "strongly disagree".

1.  **Delivery** \
    The customers, product owners, and other stakeholders seem to be happy with what's being delivered. The product delivers real value to its users.

2.  **Mission** \
    I have a clear, high-level picture of the project's objectives and the near-term roadmap.

3.  **Requirements** \
    I understand what we are delivering, and why. The requirements are well documented, using suitable artifacts (eg user stories, acceptance tests). The requirements change, but nothing more than would be expected for a project of this level of complexity.

4.  **Quality** \
    The product is engineered to a level of quality that is suitable given the product's business domain and the customers' expectations. Overall, the solution is necessary and efficient, neither over-engineered nor under-engineered. For example, the coverage and levels of automated tests, and the amount of documentation, is just about right. Technical debt is logged and kept to a manageable level. The technical team focuses on the key quality metrics — eg security, performance — that are defined by the product owner.

5.  **Architecture** \
    I understand the architecture of the application, and I can easily explain it. The architecture is suitable for the business case and for this stage of the product's lifespan. The product is built with appropriate languages and third party frameworks, libraries and services.

6.  **Tools and infrastructure** \
    We use good quality tools and the project is well supported with "devops" infrastructure that automates, as much as practically possible, many repeatable aspects of the engineering lifecycle. We can build runtime environments on-demand efficiently and reliably, and releases are easy and mostly automated. We can ship new features to production efficiently. In general, delivery is achieved at a steady, maintainable pace.

7.  **Resourcing, roles and responsibilities** \
    The project is appropriately resourced with people with the required technical expertise. There are just the right amount of business analysts, developers, testers, and system administrators. We have a good mix of senior and junior technicians in each of those sub-domains.

8.  **Roles and responsibilities** \
    Within each team, there is good clarity on who is responsible for what, and there are also well defined boundaries between the responsibilities of the teams.

9.  **Process** \
    The ways of working — the engineering process lifecycle — is suitable for the project and team. The practices and "ceremonies" are sufficient for the project, but don't distract from "getting stuff done". Technical discussions ae useful and productive, and focused on the project requirements. I am confident in the quality assurance procedures across the project. For example, bugs are found early — most of the time well before they hit production — and get fixed quickly. The feedback loop is tight and robust.

10. **Culture** \
    We get sufficient, timely support from other areas of the business. Everyone collaborates well together. There are no jerks. While we focus on delivering business value, we have sufficient freedom to learn and experiment, and to make mistakes and fail without blame.

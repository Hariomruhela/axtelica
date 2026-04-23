export const caseStudies = [
  {
    industry: "Banking",
    title: "Regional Bank Reduces Fraud Detection Latency by 70%",
    challenge:
      "A mid-tier regional bank relied on batch-processed transaction monitoring that flagged fraudulent activity hours after the fact. Fragmented data across core banking, payments, and CRM systems meant analysts investigated stale signals — leading to high false positive rates and customer impact.",
    solution:
      "Axtelica deployed a real-time transaction monitoring layer using Axtream, integrating data streams from five source systems into a unified fraud intelligence view. A decision intelligence layer applied contextual rules and anomaly scoring in real time, triggering automated alerts and review workflows via the Workflow Agent.",
    products: [
      "Axtream — real-time KPI monitoring and data integration",
      "Decision Intelligence — contextual fraud scoring and alert logic",
      "Workflow Agent — automated routing to analyst queues with case context pre-populated",
    ],
    metrics: [
      { value: "70%", label: "Reduction in detection latency" },
      { value: "45%", label: "Decrease in false positives" },
      { value: "3 weeks", label: "Time to first live deployment" },
      { value: "5", label: "Source systems integrated" },
    ],
  },
  {
    industry: "Insurance",
    title: "Insurance Carrier Automates 80% of Routine Claims Validation",
    challenge:
      "A large property and casualty insurer had a claims processing backlog driven by manual document review and validation. Each claim required multiple handoffs across teams to verify policy data, assess completeness, and route for approval. Error rates were high and cycle times were growing quarter on quarter.",
    solution:
      "Axtelica implemented an intelligent claims validation pipeline using the Validation Agent to apply business rules against incoming claim data — automatically flagging exceptions, missing fields, and policy mismatches. The Workflow Agent handled routing logic, eliminating manual handoffs for straight-through cases. Axtream provided real-time visibility into claims pipeline health.",
    products: [
      "Validation Agent — automated completeness and business rule checks",
      "Workflow Agent — straight-through routing for validated claims",
      "Axtream — live operational dashboard for claims pipeline KPIs",
    ],
    metrics: [
      { value: "80%", label: "Claims processed without manual touch" },
      { value: "60%", label: "Reduction in cycle time" },
      { value: "40%", label: "Fewer validation errors" },
      { value: "4 weeks", label: "Deployment timeline" },
    ],
  },
  {
    industry: "Pharma",
    title:
      "Global Pharma Company Achieves Single Source of Truth for Regulatory Data",
    challenge:
      "A global pharmaceutical company struggled to reconcile clinical trial, commercial, and safety data spread across regional systems. Data inconsistencies were causing delays in regulatory submissions and creating compliance risk. Commercial analytics teams worked from reports that were often 2–3 versions behind the current data state.",
    solution:
      "Axtelica built a unified data integration and quality platform that standardized and reconciled data flows from seven enterprise systems. The Validation Agent continuously monitors data integrity across clinical and commercial datasets, surfacing anomalies before they reach reporting pipelines. Axtream provides compliance teams with a live data quality scorecard and audit trail.",
    products: [
      "Data Integration & Streaming — unification of 7 source systems",
      "Data Quality & Trust — continuous validation and reconciliation",
      "Axtream — live data quality scorecard and regulatory audit visibility",
    ],
    metrics: [
      { value: "95%", label: "Data accuracy improvement" },
      { value: "7", label: "Systems unified into one view" },
      { value: "50%", label: "Faster regulatory report generation" },
      { value: "Zero", label: "Compliance gaps in last 2 audits" },
    ],
  },
];
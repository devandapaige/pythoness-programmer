export const sections = [
  {
    title: "Project Setup & Architecture",
    subsections: [
      {
        title: "Initial Project Structure",
        prompts: [
          "Create a clear, organized [React/Next.js/Node.js] project structure with visual separation between components",
          "Design a predictable architecture for [feature] with consistent patterns I can follow throughout",
          "Set up a TypeScript project with helpful error messages and autocomplete support"
        ]
      },
      {
        title: "Database & API Design",
        prompts: [
          "Design a database schema for [feature] with clear documentation for each relationship",
          "Create a RESTful API with consistent naming patterns and predictable responses",
          "Set up GraphQL schema with strong typing that will help prevent errors later"
        ]
      },
      {
        title: "Authentication & Security",
        prompts: [
          "Implement JWT authentication with step-by-step error handling for each possible failure point",
          "Add input validation that provides clear, specific error messages for users",
          "Create a role-based access system with visual indicators of current permission level"
        ]
      }
    ]
  },
  {
    title: "Flow State Maintenance",
    bgColor: "bg-brand-purple-dark/30",
    subsections: [
      {
        title: "Breaking Down Complex Tasks",
        prompts: [
          "Let's implement this feature in small, completable chunks that each take less than 30 minutes",
          "Create a minimal working version of [feature], then we'll enhance it one capability at a time",
          "Help me identify the smallest possible first step for implementing [feature]"
        ]
      },
      {
        title: "Handling Overwhelm",
        prompts: [
          "Simplify this code to reduce cognitive load while maintaining functionality",
          "Refactor this function into smaller, single-purpose functions with descriptive names",
          "Create a visual map of how these components interact so I can see the whole system"
        ]
      },
      {
        title: "Focus Assistance",
        prompts: [
          "Add clear comments that will help me remember what this code does when I return to it",
          "Generate a checklist of remaining tasks for this feature so I can track progress",
          "Help me create a time-boxed plan for implementing this feature in manageable sessions"
        ]
      }
    ]
  },
  {
    title: "Frontend Development",
    subsections: [
      {
        title: "Component Design",
        prompts: [
          "Create a visually structured component with clear separation between sections",
          "Implement this UI with consistent spacing and alignment that reduces visual noise",
          "Design a responsive layout that maintains visual stability across screen sizes"
        ]
      },
      {
        title: "State Management",
        prompts: [
          "Set up state management with clear visual feedback for each state change",
          "Implement form validation that provides immediate, specific feedback",
          "Create a custom hook that handles loading states with visual indicators"
        ]
      },
      {
        title: "Accessibility Focus",
        prompts: [
          "Add proper keyboard navigation with visual focus indicators",
          "Ensure this component works with screen readers and has appropriate ARIA attributes",
          "Implement color contrast that meets WCAG standards and reduces visual strain"
        ]
      }
    ]
  },
  {
    title: "Backend Development",
    bgColor: "bg-brand-purple-dark/30",
    subsections: [
      {
        title: "API Implementation",
        prompts: [
          "Create middleware that provides detailed, helpful error messages",
          "Implement pagination with clear visual indicators of current position",
          "Set up logging that makes it easy to trace request flow through the system"
        ]
      },
      {
        title: "Error Handling",
        prompts: [
          "Add comprehensive error handling with specific, actionable error messages",
          "Implement graceful fallbacks for each potential failure point",
          "Create a consistent error response format that makes debugging easier"
        ]
      },
      {
        title: "Testing & Validation",
        prompts: [
          "Generate tests that verify each step of this process works independently",
          "Implement input validation with clear feedback about what's wrong and how to fix it",
          "Set up automated tests that can run in small batches to avoid overwhelming output"
        ]
      }
    ]
  },
  {
    title: "Debugging Assistance",
    subsections: [
      {
        title: "Error Analysis",
        prompts: [
          "This error occurs when [description]. Break down what's happening step by step",
          "Explain this error message in plain language and suggest possible solutions",
          "Help me trace the flow of data through this function to find where it's breaking"
        ]
      },
      {
        title: "Visual Debugging",
        prompts: [
          "Add console.log statements at key points with visually distinct formatting",
          "Generate a visual representation of this data structure so I can understand it better",
          "Create a flowchart of this algorithm to help me see where the logic is failing"
        ]
      },
      {
        title: "Pattern Recognition",
        prompts: [
          "Identify any patterns in these errors that might indicate a systemic issue",
          "Compare this working code with the broken code and highlight key differences",
          "Help me understand the underlying principle that's causing these similar bugs"
        ]
      }
    ]
  },
  {
    title: "Reflection & Learning",
    bgColor: "bg-brand-purple-dark/30",
    subsections: [
      {
        title: "Knowledge Building",
        prompts: [
          "Explain how this [concept/pattern] works using analogies and visual examples",
          "Break down this complex concept into smaller, more digestible parts",
          "Help me understand this implementation by connecting it to concepts I already know"
        ]
      },
      {
        title: "Documentation",
        prompts: [
          "Create clear documentation for this function with examples of inputs and outputs",
          "Generate a README that explains this project's structure and how components relate",
          "Document this API with examples that show exactly how to use each endpoint"
        ]
      }
    ]
  },
  {
    title: "Accommodating Different Cognitive Styles",
    subsections: [
      {
        title: "For Processing Differences",
        prompts: [
          "Explain this again using a different approach - visual/spatial rather than sequential",
          "Break this down into concrete steps rather than abstract concepts",
          "Help me understand this by connecting it to a real-world example I can visualize"
        ]
      },
      {
        title: "For Executive Function Support",
        prompts: [
          "Create a checklist for implementing this feature with clear stopping points",
          "Help me prioritize these tasks based on dependencies and complexity",
          "Set up a structured approach for this task with clear transitions between steps"
        ]
      },
      {
        title: "For Sensory Considerations",
        prompts: [
          "Simplify this UI to reduce visual complexity while maintaining functionality",
          "Refactor this code to improve readability with consistent formatting and spacing",
          "Create a color scheme that reduces eye strain and maintains clear visual hierarchy"
        ]
      }
    ]
  }
] 
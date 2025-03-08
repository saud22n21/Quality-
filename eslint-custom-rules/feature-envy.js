module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "Detect Feature Envy",
        category: "Code Smells",
        recommended: true,
      },
      schema: [], // No options
    },
    create(context) {
      return {
        MethodDefinition(node) {
          const externalAccesses = [];
          // Traverse the method body and count accesses to external class members
          // This is a simplified example; you'd need to implement the logic fully
          if (externalAccesses.length > 3) {
            context.report({
              node,
              message: "Feature Envy detected: This method accesses too many external class members.",
            });
          }
        },
      };
    },
  };
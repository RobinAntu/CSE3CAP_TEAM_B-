const admin = require("firebase-admin");
const { OpenAI } = require("openai");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions/v2");

// Initialize Firebase Admin SDK
admin.initializeApp();

exports.getAISuggestions = onCall({ secrets: ["OPENAI_API_KEY"] }, async (request) => {
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = request.data.prompt;

    if (!prompt) {
        throw new HttpsError('invalid-argument', 'The function must be called with a "prompt" argument.');
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        tools: [
          {
            type: "function",
            function: {
              name: "create_subject",
              description: "Create a new subject",
              parameters: {
                type: "object",
                properties: {
                  course_code: {
                    type: "string",
                    description: "The course code, e.g. CS101",
                  },
                  title: {
                    type: "string",
                    description: "The title of the course, e.g. Introduction to Computer Science",
                  },
                },
                required: ["course_code", "title"],
              },
            },
          },
          {
            type: "function",
            function: {
              name: "add_assessment_to_subject",
              description: "Add an assessment to a subject",
              parameters: {
                type: "object",
                properties: {
                  course_code: {
                    type: "string",
                    description: "The course code of the subject to add the assessment to, e.g. CS101",
                  },
                  title: {
                    type: "string",
                    description: "The title of the assessment, e.g. Midterm Exam",
                  },
                  deadline: {
                    type: "string",
                    description: "The deadline for the assessment, in ISO 8601 format",
                  },
                },
                required: ["course_code", "title", "deadline"],
              },
            },
          },
          {
            type: "function",
            function: {
              name: "add_fixed_slot_to_subject",
              description: "Add a fixed slot to a subject, e.g. a lecture or tutorial",
              parameters: {
                type: "object",
                properties: {
                  course_code: {
                    type: "string",
                    description: "The course code of the subject to add the slot to, e.g. CS101",
                  },
                  type: {
                    type: "string",
                    enum: ["lecture", "tutorial", "lab"],
                    description: "The type of slot",
                  },
                  day: {
                    type: "string",
                    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    description: "The day of the week",
                  },
                  start_time: {
                    type: "string",
                    description: "The start time of the slot, in HH:mm format",
                  },
                  end_time: {
                    type: "string",
                    description: "The end time of the slot, in HH:mm format",
                  },
                },
                required: ["course_code", "type", "day", "start_time", "end_time"],
              },
            },
          },
          {
            type: "function",
            function: {
              name: "create_task",
              description: "Create a new task",
              parameters: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    description: "The title of the task",
                  },
                  course_code: {
                    type: "string",
                    description: "The course code of the subject to associate the task with, e.g. CS101",
                  },
                  due_date: {
                    type: "string",
                    description: "The due date of the task, in ISO 8601 format",
                  },
                },
                required: ["title", "course_code", "due_date"],
              },
            },
          },
          {
            type: "function",
            function: {
              name: "create_study_session",
              description: "Create a new study session",
              parameters: {
                type: "object",
                properties: {
                  task_title: {
                    type: "string",
                    description: "The title of the task to associate the study session with",
                  },
                   course_code: {
                    type: "string",
                    description: "The course code of the subject to associate the task with, e.g. CS101",
                  },
                  start_time: {
                    type: "string",
                    description: "The start time of the study session, in ISO 8601 format",
                  },
                  end_time: {
                    type: "string",
                    description: "The end time of the study session, in ISO 8601 format",
                  },
                },
                required: ["task_title", "course_code", "start_time", "end_time"],
              },
            },
          },
          {
            type: "function",
            function: {
              name: "add_task_to_subject",
              description: "Add a task to a subject",
              parameters: {
                type: "object",
                properties: {
                  course_code: {
                    type: "string",
                    description: "The course code of the subject to add the task to, e.g. CS101",
                  },
                  title: {
                    type: "string",
                    description: "The title of the task, e.g. 'Read Chapter 1'",
                  },
                  due_date: {
                    type: "string",
                    description: "The due date of the task, in ISO 8601 format",
                  },
                },
                required: ["course_code", "title", "due_date"],
              },
            },
          },
        ]
      });

      const message = response.choices[0].message;

      if (message.tool_calls) {
        const tool_call = message.tool_calls[0];
        const function_name = tool_call.function.name;
        const function_args = JSON.parse(tool_call.function.arguments);

        if (function_name === "create_subject") {
          return {
            tool: "create_subject",
            arguments: function_args,
          };
        } else if (function_name === "add_assessment_to_subject") {
          return {
            tool: "add_assessment_to_subject",
            arguments: function_args,
          };
        } else if (function_name === "add_fixed_slot_to_subject") {
          return {
            tool: "add_fixed_slot_to_subject",
            arguments: function_args,
          };
        } else if (function_name === "create_task") {
          return {
            tool: "create_task",
            arguments: function_args,
          };
        } else if (function_name === "create_study_session") {
          return {
            tool: "create_study_session",
            arguments: function_args,
          };
        } else if (function_name === "add_task_to_subject") {
            return {
                tool: "add_task_to_subject",
                arguments: function_args,
            };
        }
      }

      return {
        suggestions: message.content,
      };
    } catch (error) {
      logger.error("Error calling OpenAI:", error);
      throw new HttpsError(
        "internal",
        "An error occurred while fetching AI suggestions."
      );
    }
});

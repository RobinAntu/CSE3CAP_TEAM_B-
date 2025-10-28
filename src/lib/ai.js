export class AI {
    async generateText(prompt) {
      console.log("AI Prompt:", prompt);
      
      // Check if the prompt is for schedule generation
      if (prompt.startsWith("Given the following candidate study slots")) {
        // This is for the scheduler
        return new Promise(resolve => {
          setTimeout(() => {
            // We'll return a sample of chosen indexes. In a real scenario, the AI would choose these.
            const chosenIndexes = [0, 2, 4, 6, 8]; 
            resolve(chosenIndexes);
          }, 1500); // Simulate a slightly longer processing time for a more realistic feel
        });
      } else {
        // This is for the AI coach
        return new Promise(resolve => {
          setTimeout(() => {
            const suggestions = [
              {
                text: "I see you have a 'Market Report' due soon for BUSN301. I suggest scheduling a study session for it.",
                tool_calls: [
                  {
                    name: 'add_study_session',
                    arguments: {
                      task_title: 'Submit Market Report',
                      start_time: new Date(Date.now() + 2 * 86400000).toISOString(),
                      end_time: new Date(Date.now() + 2 * 86400000 + 3600000).toISOString(),
                    }
                  }
                ]
              },
              {
                text: "You have a midterm for MATH201 coming up. I suggest adding a 'Practice Exam' task to your to-do list.",
                tool_calls: [
                  {
                    name: 'add_task_to_subject',
                    arguments: {
                      title: 'Practice Exam',
                      course_code: 'MATH201'
                    }
                  }
                ]
              }
            ];

            const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
            resolve(suggestion);
          }, 1000);
        });
      }
    }
}

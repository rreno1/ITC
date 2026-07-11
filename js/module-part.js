(function setupModuleParts() {
  function buildDefinitionQuestions(lessons) {
    const terms = lessons.flatMap(lesson => lesson.definitions.map(definition => ({
      ...definition,
      category: lesson.category
    })));

    return terms.map((term, index) => {
      const distractors = [];
      for (let offset = 1; distractors.length < 3; offset++) {
        const candidate = terms[(index + offset) % terms.length];
        if (candidate.term !== term.term && !distractors.some(item => item.term === candidate.term)) {
          distractors.push(candidate);
        }
      }
      return {
        category: term.category,
        question: `Which description best matches ${term.term}?`,
        options: [term.definition, ...distractors.map(item => item.definition)],
        answer: 0,
        explanation: `${term.term}: ${term.definition}`
      };
    });
  }

  function buildCoursePart(config) {
    const source = window.CC101_MODULE_DATA;
    if (!source || !Array.isArray(config.lessonIndexes)) {
      throw new Error('A topic source and lesson indexes are required to build a course part.');
    }

    const lessons = config.lessonIndexes.map((sourceIndex, index) => {
      const lesson = source.lessons[sourceIndex];
      if (!lesson) throw new Error(`Missing source lesson ${sourceIndex} for ${config.id}.`);
      return {
        ...lesson,
        definitions: lesson.definitions.map(item => ({ ...item })),
        examples: lesson.examples.slice(),
        paragraphs: lesson.paragraphs.slice(),
        review: lesson.review.slice(),
        image: index === 0 ? {
          src: config.image,
          alt: config.imageAlt,
          credit: config.imageCredit || ''
        } : null
      };
    });

    const selectedTasks = (config.taskIndexes || [])
      .map(index => source.activity.tasks[index])
      .filter(Boolean)
      .map(task => ({ ...task }));
    const activityTasks = [...selectedTasks, ...(config.extraTasks || [])];
    const sourceQuestions = (config.sourceQuizIndexes || [])
      .map(index => source.quiz[index])
      .filter(Boolean)
      .map(question => ({
        ...question,
        options: question.options.slice()
      }));
    const generatedQuestions = buildDefinitionQuestions(lessons);
    const quiz = [...config.appliedQuestions, ...sourceQuestions, ...generatedQuestions].slice(0, 15);

    if (quiz.length !== 15) {
      throw new Error(`${config.id} must produce exactly 15 quiz questions.`);
    }

    window.CC101_MODULE_DATA = {
      id: config.id,
      courseTitle: 'Introduction to Computing',
      title: config.title,
      subtitle: config.subtitle,
      description: config.description,
      objectives: config.objectives,
      lessons,
      activity: {
        title: config.activityTitle,
        intro: config.activityIntro,
        tasks: activityTasks,
        reflection: config.reflection || source.activity.reflection.slice()
      },
      quiz,
      summary: {
        intro: config.summaryIntro,
        points: config.summaryPoints,
        review: config.summaryReview,
        next: config.next
      }
    };
  }

  window.buildCoursePart = buildCoursePart;
})();

const h = React.createElement;
const { useState } = React;

function AuthCard({ title, children, footer }) {
  const nodes = [h('h2', null, title)];
  if (children) nodes.push(...children);
  if (footer) nodes.push(h('div', { className: 'auth-footer' }, footer));
  return h('div', { className: 'auth-card' }, nodes);
}

function LoginPage({ onSignup, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const footer = h('span', null,
    "Don't have an account? ",
    h('button', { id: 'show-signup', onClick: onSignup }, 'Sign up')
  );
  return h(AuthCard, { title: 'Welcome Back', footer }, [
    h('label', null, 'Email', h('input', {
      id: 'login-email', type: 'email', value: email,
      onInput: e => setEmail(e.target.value)
    })),
    h('label', null, 'Password', h('input', {
      id: 'login-password', type: 'password', value: password,
      onInput: e => setPassword(e.target.value)
    })),
    h('button', { id: 'login-button', onClick: onLogin }, 'Login')
  ]);
}

function SignupPage({ onLogin, onSignupComplete }) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const footer = h('span', null,
    'Already have an account? ',
    h('button', { id: 'show-login', onClick: onLogin }, 'Log in')
  );
  const complete = () => onSignupComplete();
  return h(AuthCard, { title: 'Create Account', footer }, [
    h('label', null, 'First Name', h('input', {
      id: 'signup-first', value: first, onInput: e => setFirst(e.target.value)
    })),
    h('label', null, 'Last Name', h('input', {
      id: 'signup-last', value: last, onInput: e => setLast(e.target.value)
    })),
    h('label', null, 'Email', h('input', {
      id: 'signup-email', type: 'email', value: email,
      onInput: e => setEmail(e.target.value)
    })),
    h('label', null, 'Password', h('input', {
      id: 'signup-password', type: 'password', value: password,
      onInput: e => setPassword(e.target.value)
    })),
    h('button', { id: 'signup-button', onClick: complete }, 'Sign Up')
  ]);
}

function Shell({ children, setPage }) {
  return h('div', { className: 'app-shell' }, [
    h('nav', { className: 'sidebar' }, [
      h('h1', { className: 'logo' }, 'Study Flex'),
      h('ul', null, [
        h('li', null, h('button', { id: 'nav-home', onClick: () => setPage('home') }, 'Home')),
        h('li', null, h('button', { id: 'nav-wizard', onClick: () => setPage('wizard') }, 'Input Wizard')),
        h('li', null, h('button', { id: 'nav-settings', onClick: () => setPage('settings') }, 'Settings'))
      ])
    ]),
    h('main', { className: 'content' }, children)
  ]);
}

function Calendar({ plan, sessions }) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const events = {};
  days.forEach((d) => (events[d] = []));
  plan.forEach((p) => {
    const [day, time] = p.slot.split(' ');
    if (!events[day]) events[day] = [];
    events[day].push(`${time} ${p.task}`);
  });
  sessions.forEach((s) => {
    if (!events[s.day]) events[s.day] = [];
    events[s.day].push({ time: s.time, title: s.title, type: s.type });
  });
  return h(
    'table',
    { className: 'calendar' },
    [
      h(
        'thead',
        null,
        h('tr', null, days.map((d) => h('th', { key: d }, d)))
      ),
      h(
        'tbody',
        null,
        h(
          'tr',
          null,
          days.map((d) =>
            h(
              'td',
              { key: d },
              events[d].map((e, i) =>
                typeof e === 'string'
                  ? h('div', { key: i, className: 'session' }, e)
                  : h(
                      'div',
                      { key: i, className: `session ${e.type}` },
                      `${e.time} ${e.title}`
                    )
              )
            )
          )
        )
      ),
    ]
  );
}

function HomePage({ plan, sessions, addSession, generatePlan, onTask }) {
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('Mon');
  const [time, setTime] = useState('');
  const [type, setType] = useState('study');
  const submit = () => {
    if (!title || !time) return;
    addSession({ title, day, time, type });
    setTitle('');
    setTime('');
  };
  return h('div', { className: 'home' }, [
    h('h2', null, 'Home'),
    h(Calendar, { plan, sessions }),
    h('div', { className: 'session-form' }, [
      h('h3', null, 'Add Session'),
      h('label', null, 'Title', h('input', {
        id: 'session-title',
        value: title,
        onInput: (e) => setTitle(e.target.value),
      })),
      h('label', null, 'Day', h('select', {
        id: 'session-day',
        value: day,
        onInput: (e) => setDay(e.target.value),
      }, ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d)=>h('option',{key:d,value:d},d)))),
      h('label', null, 'Time', h('input', {
        id: 'session-time',
        type: 'time',
        value: time,
        onInput: (e) => setTime(e.target.value),
      })),
      h('label', { className: 'session-type' }, 'Type', h('select', {
        id: 'session-type',
        value: type,
        onInput: (e) => setType(e.target.value),
      }, [
        h('option', { value: 'study' }, 'Study'),
        h('option', { value: 'class' }, 'Class'),
      ])),
      h('button', { id: 'add-session', type: 'button', onClick: submit }, 'Add'),
    ]),
    h('div', { className: 'dash-actions' }, [
      h(
        'button',
        { id: 'generate-plan', onClick: generatePlan },
        plan.length ? 'Regenerate Plan' : 'Generate Plan'
      ),
      h('button', { id: 'task-detail', onClick: onTask }, 'Task Detail')
    ])
  ]);
}

function SettingsPage({ onBack }) {
  return h('div', { className: 'settings' }, [
    h('h3', null, 'Settings'),
    h('p', null, 'Preference placeholders for demo.'),
    h('button', { id: 'settings-back', onClick: onBack }, 'Back')
  ]);
}

function InputWizardPage({ onBack }) {
  const [course, setCourse] = useState('');
  const [midterm, setMidterm] = useState('');
  const [project, setProject] = useState('');
  const finish = () => {
    const tasks = [
      { name: `${course} Midterm`, deadline: midterm, difficulty: 'medium', weight: 30 },
      { name: `${course} Final Project`, deadline: project, difficulty: 'hard', weight: 70 }
    ];
    const preferences = { availability: ['Mon 9AM', 'Tue 1PM', 'Wed 3PM', 'Thu 10AM', 'Fri 2PM'] };
    saveUserData({ tasks, preferences });
    onBack();
  };
  return h('div', { className: 'wizard' }, [
    h('h3', null, 'Input Wizard'),
    h('label', null, 'Course Name', h('input', {
      id: 'wizard-course', value: course, onInput: e => setCourse(e.target.value)
    })),
    h('label', null, 'Midterm Deadline', h('input', {
      id: 'wizard-midterm', type: 'date', value: midterm, onInput: e => setMidterm(e.target.value)
    })),
    h('label', null, 'Final Project Deadline', h('input', {
      id: 'wizard-project', type: 'date', value: project, onInput: e => setProject(e.target.value)
    })),
    h('button', { id: 'wizard-finish', onClick: finish }, 'Save'),
    h('button', { id: 'wizard-back', onClick: onBack }, 'Cancel')
  ]);
}

function TaskDetailPage({ onBack }) {
  return h('div', { className: 'task-detail' }, [
    h('h3', null, 'Task Detail'),
    h('p', null, 'Placeholder task information.'),
    h('button', { id: 'task-back', onClick: onBack }, 'Back')
  ]);
}

function App() {
  const [page, setPage] = useState('login');
  const [plan, setPlan] = useState([]);
  const [sessions, setSessions] = useState(getStoredData().sessions || []);

  const generatePlanAndShow = () => {
    const db = getStoredData();
    const tasks = db.tasks || [];
    const user = { email: 'john@example.com' };
    const availability = computeAvailability(db.sessions || [], db.preferences || {});
    const data = { tasks, preferences: { availability } };
    setPlan(generatePlan(user, data));
  };

  const addSession = (session) => {
    const updated = [...sessions, session];
    setSessions(updated);
    saveUserData({ sessions: updated });
  };

  if (page === 'login') return h(LoginPage, { onSignup: () => setPage('signup'), onLogin: () => setPage('home') });
  if (page === 'signup') return h(SignupPage, { onLogin: () => setPage('login'), onSignupComplete: () => setPage('home') });

  return h(Shell, { setPage }, [
    page === 'home' && h(HomePage, { plan, sessions, addSession, generatePlan: generatePlanAndShow, onTask: () => setPage('task') }),
    page === 'wizard' && h(InputWizardPage, { onBack: () => setPage('home') }),
    page === 'settings' && h(SettingsPage, { onBack: () => setPage('home') }),
    page === 'task' && h(TaskDetailPage, { onBack: () => setPage('home') })
  ]);
}

ReactDOM.createRoot(document.getElementById('root')).render(App);

import dva from 'dva';
import rat from './router'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(rat);

// 5. Start
app.start('#app');
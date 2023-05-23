import { Router } from './router/Router';
import { RouterSwitch } from './router/RouterSwitch';
import { Room } from './components/room';
import { Sidebar } from './components/sidebar';
import { Routes } from './routes';
import { WorkInProgress } from './components/work-in-progress';

export const App = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <header className="relative flex items-center justify-center border-b-2 border-solid border-gray-800 p-1">
        <input className="w-[500px] border border-solid border-gray-300" placeholder="Search {Workspace}" />
        <div className="absolute right-4 top-2/4 -translate-y-2/4">user</div>
      </header>

      <main className="flex flex-1">
        <Sidebar />

        <RouterSwitch>
          <Router pattern={Routes.threads}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.later}>
            <WorkInProgress />
          </Router>
          <Router exact pattern={Routes.direct}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.mentions}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.drafts}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.connect}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.files}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.apps}>
            <WorkInProgress />
          </Router>
          <Router pattern={Routes.channels('\\d')}>
            <Room />
          </Router>
          <Router pattern={Routes.directs('\\d')}>
            <Room />
          </Router>
        </RouterSwitch>
      </main>
    </div>
  );
};

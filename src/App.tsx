import { Sidebar } from './components/sidebar';

export const App = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <header className="relative flex items-center justify-center border-b-2 border-solid border-gray-800 p-1">
        <input className="w-[500px] border border-solid border-gray-300" placeholder="Search {Channel}" />
        <div className="absolute right-4 top-2/4 -translate-y-2/4">user</div>
      </header>

      <main className="flex flex-1">
        <Sidebar />

        <section className="flex flex-1 flex-col">
          <div className="relative flex items-center border-b-[1px] border-gray-300 p-2">
            <p className="text-lg font-semibold"># general</p>
            <p className="ml-4 text-gray-600">Base channel with all general information</p>
            <div className="absolute right-4 top-2/4 -translate-y-2/4">users</div>
          </div>

          <div className="flex flex-1 flex-col p-3">
            <div className="mt-auto grid gap-3">
              <div className="flex items-start">
                <div className="h-[40px] w-[40px] rounded-sm bg-gray-400" />
                <div className="ml-1">
                  <p className="font-semibold leading-[14px]">User 1</p>
                  <p className="mt-1">Hello guys! What's status of the current epic?</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-[40px] w-[40px] rounded-sm bg-gray-400" />
                <div className="ml-1">
                  <p className="font-semibold leading-[14px]">User 2</p>
                  <p className="mt-1">Hey! We are doing our best...</p>
                </div>
              </div>
            </div>
            <footer className="mt-4">
              <input className="w-full border border-solid border-gray-300" placeholder="Message #general" />
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export const App = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <header className="relative flex items-center justify-center border-b-2 border-solid border-gray-800 p-1">
        <input className="w-[500px] border border-solid border-gray-300" placeholder="Search {Channel}" />
        <div className="absolute right-4 top-2/4 -translate-y-2/4">user</div>
      </header>

      <main className="flex flex-1">
        <nav className="h-full w-[300px] border-r-2 border-solid border-gray-800 pl-2">
          <h1 className="inline-flex pb-2 pt-2 text-xl">Channel</h1>

          <span className="relative right-2 flex h-[1px] w-[calc(100%+0.5rem)] bg-gray-300"></span>

          <ul className="grid gap-1 pb-3 pt-3">
            <li>Threads</li>
            <li>Later</li>
            <li>Direct messages</li>
            <li>Mentions & reactions</li>
            <li>Drafts & sent</li>
            <li>Slack connect</li>
            <li>Files</li>
            <li>Apps</li>
            <li>More</li>
          </ul>

          <span className="relative right-2 flex h-[1px] w-[calc(100%+0.5rem)] bg-gray-300"></span>

          <div className="pb-3 pt-3">
            <p className="pb-1 pt-1">(hide) Channels</p>
            <ul className="grid gap-1">
              <li># general</li>
              <li># random</li>
              <li># memes</li>
            </ul>
          </div>

          <div className="pb-3 pt-3">
            <p className="pb-1 pt-1">(hide) Direct messages</p>
            <ul className="grid gap-1">
              <li>Slackbot</li>
              <li>User 1</li>
              <li>User 2</li>
              <li>User 3</li>
            </ul>
          </div>
        </nav>

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
